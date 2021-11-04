import * as THREE from './js/three.module.js';
import {OrbitControls} from './js/OrbitControls.js';
import {GLTFLoader} from './js/GLTFLoader.js';
import {Reflector} from './jsm/objects/Reflector.js';
import * as dat from './jsm/libs/dat.gui.module.js'

class FogGUIHelper {
  constructor(fog, backgroundColor) {
    this.fog = fog;
    this.backgroundColor = backgroundColor;
  }
  get near() {
    return this.fog.near;
  }
  set near(v) {
    this.fog.near = v;
    this.fog.far = Math.max(this.fog.far, v);
  }
  get far() {
    return this.fog.far;
  }
  set far(v) {
    this.fog.far = v;
    this.fog.near = Math.min(this.fog.near, v);
  }
  get color() {
    return `#${this.fog.color.getHexString()}`;
  }
  set color(hexString) {
    this.fog.color.set(hexString);
    this.backgroundColor.set(hexString);
  }
}

const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene();
const gui = new dat.GUI()


//size
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    //update size
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    //update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    //update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

})

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.x = 0;
camera.position.y = 10;
camera.position.z = 60;
scene.add(camera);

//controls
const controls = new OrbitControls(camera, canvas);
controls.autoRotate = true;

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.render(scene, camera, controls);
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.gammaOutput = true;

//panorama background
const sky = new THREE.TextureLoader();
const seaSky = sky.load(['sky/skybackground.jpg']);
scene.background = seaSky;


//scenegraph
function dumpObject(obj, lines = [], isLast = true, prefix = '') {
    const localPrefix = isLast ? '└─' : '├─';
    lines.push(`${prefix}${prefix ? localPrefix : ''}${obj.name || '*no-name*'} [${obj.type}]`);
    const newPrefix = prefix + (isLast ? '  ' : '│ ');
    const lastNdx = obj.children.length - 1;
    obj.children.forEach((child, ndx) => {
        const isLast = ndx === lastNdx;
        dumpObject(child, lines, isLast, newPrefix);
    });
    return lines;
}

//object gltf
const loader = new GLTFLoader()
loader.load('./model/scene.gltf', function(gltf){
        const root = gltf.scene;
        root.position.x = 0;
        root.position.y = 0;
        scene.add(root);

        root.traverse(n => { if ( n.isMesh ) {
          n.castShadow = true; 
          n.receiveShadow = true;
        }});

})

// mirror
let plane = new THREE.PlaneGeometry(999, 999);
let mirrorPlane = new Reflector( plane, {
  clipBias: 0.003,
  textureWidth: window.innerWidth * window.devicePixelRatio,
  textureHeight: window.innerHeight * window.devicePixelRatio,
  color: 0x889999
} );
mirrorPlane.rotation.x = - Math.PI / 2;
mirrorPlane.position.y = -5.5;
mirrorPlane.receiveShadow = true;
scene.add(mirrorPlane);

// //lights
const pointLight = new THREE.PointLight(0xfafafa);
pointLight.position.set(-250, 300, 90);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0x2a2a2a);
scene.add(ambientLight);

const solarLight = new THREE.DirectionalLight();
solarLight.position.set(999, 999, -999);
solarLight.castShadow = true;
solarLight.intensity = 2;
solarLight.shadow.mapSize.width = 999;
solarLight.shadow.mapSize.height = 999;
solarLight.shadow.camera.near = 100;
solarLight.shadow.camera.far = 500;

scene.add(solarLight);


//fog
const near = 10;
const far = 200;
const color = 'lightblue';
scene.fog = new THREE.Fog(color, near, far);

//fog helper
const fogGUIHelper = new FogGUIHelper(scene.fog, scene.background);
gui.add(fogGUIHelper, 'near', near, far).listen();
gui.add(fogGUIHelper, 'far', near, far).listen();
gui.addColor(fogGUIHelper, 'color');

//reflective sphere
const cubeRenderTarget = new THREE.WebGLCubeRenderTarget( 128, { format: THREE.RGBFormat, generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter } );
let sphereCamera = new THREE.CubeCamera(1,500,cubeRenderTarget);
sphereCamera.position.set(0, 3, 0);
scene.add(sphereCamera);
const sphereMirror = new THREE.MeshBasicMaterial({
  envMap: sphereCamera.renderTarget.texture,
});
const sphereGeo = new THREE.SphereGeometry(1.5, 25 , 10);
const mirrorBall = new THREE.Mesh( sphereGeo, sphereMirror);
mirrorBall.position.y = 5;
mirrorBall.position.x = 0;
scene.add(mirrorBall);


//animate
const animate = () =>
{
    controls.update();
    sphereCamera.update(renderer, scene);
    renderer.render(scene, camera);

    window.requestAnimationFrame(animate);
}
animate();