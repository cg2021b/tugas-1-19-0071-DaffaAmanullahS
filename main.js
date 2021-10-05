function main(){
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");


    var verticesKiri = [
        //kanan atas
        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.5, 0.466, 0.604, 0.804, 0.816,
        -0.48, 0.465, 0.604, 0.804, 0.816,

        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.48, 0.465, 0.604, 0.804, 0.816,
        -0.461, 0.463, 0.604, 0.804, 0.816,

        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.461, 0.463, 0.604, 0.804, 0.816,
        -0.441, 0.458, 0.604, 0.804, 0.816,

        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.441, 0.458, 0.604, 0.804, 0.816,
        -0.421, 0.45, 0.604, 0.804, 0.816,

        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.421, 0.45, 0.604, 0.804, 0.816,
        -0.404, 0.44, 0.604, 0.804, 0.816,

        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.404, 0.44, 0.604, 0.804, 0.816,
        -0.392, 0.429, 0.604, 0.804, 0.816,

        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.392, 0.429, 0.604, 0.804, 0.816,
        -0.383, 0.415, 0.604, 0.804, 0.816,

        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.383, 0.415, 0.604, 0.804, 0.816,
        -0.38, 0.4, 0.604, 0.804, 0.816,

        //kanan bawah
        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.5, 0.334, 0.604, 0.804, 0.816,
        -0.48, 0.335, 0.604, 0.804, 0.816,
        
        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.48, 0.335, 0.604, 0.804, 0.816,
        -0.461, 0.337, 0.604, 0.804, 0.816,

        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.461, 0.337, 0.604, 0.804, 0.816,
        -0.441, 0.342, 0.604, 0.804, 0.816,

        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.441, 0.342, 0.604, 0.804, 0.816,
        -0.421, 0.35, 0.604, 0.804, 0.816,

        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.421, 0.35, 0.604, 0.804, 0.816,
        -0.404, 0.36, 0.604, 0.804, 0.816,

        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.404, 0.36, 0.604, 0.804, 0.816,
        -0.392, 0.371, 0.604, 0.804, 0.816,

        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.392, 0.371, 0.604, 0.804, 0.816,
        -0.383, 0.385, 0.604, 0.804, 0.816,

        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.383, 0.385, 0.604, 0.804, 0.816,
        -0.38, 0.4, 0.604, 0.804, 0.816,

        //kiri atas
        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.5, 0.466, 0.604, 0.804, 0.816,
        -0.52, 0.465, 0.604, 0.804, 0.816,

        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.52, 0.465, 0.604, 0.804, 0.816,
        -0.539, 0.463, 0.604, 0.804, 0.816,
        
        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.539, 0.463, 0.604, 0.804, 0.816,
        -0.559, 0.458, 0.604, 0.804, 0.816,

        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.559, 0.458, 0.604, 0.804, 0.816,
        -0.579, 0.45, 0.604, 0.804, 0.816,

        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.579, 0.45, 0.604, 0.804, 0.816,
        -0.596, 0.44, 0.604, 0.804, 0.816,

        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.596, 0.44, 0.604, 0.804, 0.816,
        -0.608, 0.429, 0.604, 0.804, 0.816,

        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.608, 0.429, 0.604, 0.804, 0.816,
        -0.617, 0.415, 0.604, 0.804, 0.816,

        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.617, 0.415, 0.604, 0.804, 0.816,
        -0.62, 0.4, 0.604, 0.804, 0.816,

        //kiri bawah
        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.5, 0.334, 0.604, 0.804, 0.816,
        -0.52, 0.335, 0.604, 0.804, 0.816,

        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.52, 0.335, 0.604, 0.804, 0.816,
        -0.539, 0.337, 0.604, 0.804, 0.816,

        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.539, 0.337, 0.604, 0.804, 0.816,
        -0.559, 0.342, 0.604, 0.804, 0.816,

        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.559, 0.342, 0.604, 0.804, 0.816,
        -0.579, 0.35, 0.604, 0.804, 0.816,

        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.579, 0.35, 0.604, 0.804, 0.816,
        -0.596, 0.36, 0.604, 0.804, 0.816,

        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.596, 0.36, 0.604, 0.804, 0.816,
        -0.608, 0.371, 0.604, 0.804, 0.816,

        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.608, 0.371, 0.604, 0.804, 0.816,
        -0.617, 0.385, 0.604, 0.804, 0.816,

        -0.5, 0.4, 0.604, 0.804, 0.816,
        -0.617, 0.385, 0.604, 0.804, 0.816,
        -0.62, 0.4, 0.604, 0.804, 0.816,

        //kanan body
        -0.5, -0.1, 0.118, 0.541, 0.58,
        -0.5, 0.334, 0.118, 0.541, 0.58,
        -0.48, 0.335, 0.118, 0.541, 0.58,
        
        -0.5, -0.1, 0.118, 0.541, 0.58,
        -0.48, 0.335, 0.118, 0.541, 0.58,
        -0.461, 0.337, 0.118, 0.541, 0.58,

        -0.5, -0.1, 0.118, 0.541, 0.58,
        -0.461, 0.337, 0.118, 0.541, 0.58,
        -0.441, 0.342, 0.118, 0.541, 0.58,

        -0.5, -0.1, 0.118, 0.541, 0.58,
        -0.441, 0.342, 0.118, 0.541, 0.58,
        -0.421, 0.35, 0.118, 0.541, 0.58,

        -0.5, -0.1, 0.118, 0.541, 0.58,
        -0.421, 0.35, 0.118, 0.541, 0.58,
        -0.404, 0.36, 0.118, 0.541, 0.58,

        -0.5, -0.1, 0.118, 0.541, 0.58,
        -0.404, 0.36, 0.118, 0.541, 0.58,
        -0.392, 0.371, 0.118, 0.541, 0.58,

        -0.5, -0.1, 0.118, 0.541, 0.58,
        -0.392, 0.371, 0.118, 0.541, 0.58,
        -0.383, 0.385, 0.118, 0.541, 0.58,

        -0.5, -0.1, 0.118, 0.541, 0.58,
        -0.383, 0.385, 0.118, 0.541, 0.58,
        -0.38, 0.4, 0.118, 0.541, 0.58,

        -0.5, -0.1, 0.118, 0.541, 0.58,
        -0.4, -0.1, 0.118, 0.541, 0.58,
        -0.38, 0.4, 0.118, 0.541, 0.58,

        //kiri body
        -0.5, -0.1, 0.118, 0.541, 0.58,
        -0.5, 0.334, 0.118, 0.541, 0.58,
        -0.52, 0.335, 0.118, 0.541, 0.58,

        -0.5, -0.1, 0.118, 0.541, 0.58,
        -0.52, 0.335, 0.118, 0.541, 0.58,
        -0.539, 0.337, 0.118, 0.541, 0.58,

        -0.5, -0.1, 0.118, 0.541, 0.58,
        -0.539, 0.337, 0.118, 0.541, 0.58,
        -0.559, 0.342, 0.118, 0.541, 0.58,

        -0.5, -0.1, 0.118, 0.541, 0.58,
        -0.559, 0.342, 0.118, 0.541, 0.58,
        -0.579, 0.35, 0.118, 0.541, 0.58,

        -0.5, -0.1, 0.118, 0.541, 0.58,
        -0.579, 0.35, 0.118, 0.541, 0.58,
        -0.596, 0.36, 0.118, 0.541, 0.58,

        -0.5, -0.1, 0.118, 0.541, 0.58,
        -0.596, 0.36, 0.118, 0.541, 0.58,
        -0.608, 0.371, 0.118, 0.541, 0.58,

        -0.5, -0.1, 0.118, 0.541, 0.58,
        -0.608, 0.371, 0.118, 0.541, 0.58,
        -0.617, 0.385, 0.118, 0.541, 0.58,

        -0.5, -0.1, 0.118, 0.541, 0.58,
        -0.617, 0.385, 0.118, 0.541, 0.58,
        -0.62, 0.4, 0.118, 0.541, 0.58,

        -0.5, -0.1, 0.118, 0.541, 0.58,
        -0.6, -0.1, 0.118, 0.541, 0.58,
        -0.62, 0.4, 0.118, 0.541, 0.58,

        //kanan alas
        -0.5, -0.1, 0.118, 0.541, 0.58,
        -0.5, -0.156, 0.118, 0.541, 0.58,
        -0.4692, -0.1521, 0.118, 0.541, 0.58,
        
        -0.5, -0.1, 0.118, 0.541, 0.58,
        -0.4692, -0.1521, 0.118, 0.541, 0.58,
        -0.4373, -0.1388, 0.118, 0.541, 0.58,

        -0.5, -0.1, 0.118, 0.541, 0.58,
        -0.4373, -0.1388, 0.118, 0.541, 0.58,
        -0.4147, -0.1209, 0.118, 0.541, 0.58,

        -0.5, -0.1, 0.118, 0.541, 0.58,
        -0.4147, -0.1209, 0.118, 0.541, 0.58,
        -0.4, -0.1, 0.118, 0.541, 0.58,

        //kiri alas
        -0.5, -0.1, 0.118, 0.541, 0.58,
        -0.5, -0.156, 0.118, 0.541, 0.58,
        -0.5308, -0.1522, 0.118, 0.541, 0.58,

        -0.5, -0.1, 0.118, 0.541, 0.58,
        -0.5308, -0.1522, 0.118, 0.541, 0.58,
        -0.5627, -0.1388, 0.118, 0.541, 0.58,

        -0.5, -0.1, 0.118, 0.541, 0.58,
        -0.5627, -0.1388, 0.118, 0.541, 0.58,
        -0.5853, -0.1204, 0.118, 0.541, 0.58,

        -0.5, -0.1, 0.118, 0.541, 0.58,
        -0.5853, -0.1204, 0.118, 0.541, 0.58,
        -0.6, -0.1, 0.118, 0.541, 0.58,

        //kanan selimut tutup
        -0.5, 0.305, 0.4745, 0.6745, 0.816,
        -0.5, 0.334, 0.4745, 0.6745, 0.816,
        -0.4525, 0.3106, 0.4745, 0.6745, 0.816,

        -0.5, 0.334, 0.4745, 0.6745, 0.816,
        -0.4525, 0.3106, 0.4745, 0.6745, 0.816,
        -0.461, 0.337, 0.4745, 0.6745, 0.816,

        -0.4525, 0.3106, 0.4745, 0.6745, 0.816,
        -0.461, 0.337, 0.4745, 0.6745, 0.816,
        -0.4098, 0.3281, 0.4745, 0.6745, 0.816,

        -0.461, 0.337, 0.4745, 0.6745, 0.816,
        -0.4098, 0.3281, 0.4745, 0.6745, 0.816,
        -0.392, 0.371, 0.4745, 0.6745, 0.816,

        -0.4098, 0.3281, 0.4745, 0.6745, 0.816,
        -0.392, 0.371, 0.4745, 0.6745, 0.816,
        -0.38, 0.36, 0.4745, 0.6745, 0.816,

        -0.392, 0.371, 0.4745, 0.6745, 0.816,
        -0.38, 0.36, 0.4745, 0.6745, 0.816,
        -0.383, 0.385, 0.4745, 0.6745, 0.816,

        -0.38, 0.36, 0.4745, 0.6745, 0.816,
        -0.383, 0.385, 0.4745, 0.6745, 0.816,
        -0.375, 0.3805, 0.4745, 0.6745, 0.816,
        
        -0.383, 0.385, 0.4745, 0.6745, 0.816,
        -0.375, 0.3805, 0.4745, 0.6745, 0.816,
        -0.38, 0.4, 0.4745, 0.6745, 0.816,

        
        //kiri selimut tutup
        -0.5, 0.305, 0.4745, 0.6745, 0.816,
        -0.5, 0.334, 0.4745, 0.6745, 0.816,
        -0.5475, 0.3106, 0.4745, 0.6745, 0.816,

        -0.5, 0.334, 0.4745, 0.6745, 0.816,
        -0.5475, 0.3106, 0.4745, 0.6745, 0.816,
        -0.539, 0.337, 0.4745, 0.6745, 0.816,

        -0.5475, 0.3106, 0.4745, 0.6745, 0.816,
        -0.539, 0.337, 0.4745, 0.6745, 0.816,
        -0.5902, 0.3281, 0.4745, 0.6745, 0.816,

        -0.539, 0.337, 0.4745, 0.6745, 0.816,
        -0.5902, 0.3281, 0.4745, 0.6745, 0.816,
        -0.579, 0.35, 0.4745, 0.6745, 0.816,

        -0.5902, 0.3281, 0.4745, 0.6745, 0.816,
        -0.579, 0.35, 0.4745, 0.6745, 0.816,
        -0.62, 0.36, 0.4745, 0.6745, 0.816,

        -0.579, 0.35, 0.4745, 0.6745, 0.816,
        -0.62, 0.36, 0.4745, 0.6745, 0.816,
        -0.608, 0.371, 0.4745, 0.6745, 0.816,

        -0.62, 0.36, 0.4745, 0.6745, 0.816,
        -0.608, 0.371, 0.4745, 0.6745, 0.816,
        -0.625, 0.3805, 0.4745, 0.6745, 0.816,
        
        -0.608, 0.371, 0.4745, 0.6745, 0.816,
        -0.625, 0.3805, 0.4745, 0.6745, 0.816,
        -0.62, 0.4, 0.4745, 0.6745, 0.816,

        //kiri tutup
        -0.6486, 0.3806, 0.4745, 0.6745, 0.816,
        -0.6481, 0.3671, 0.4745, 0.6745, 0.816,
        -0.633, 0.3602, 0.4745, 0.6745, 0.816,

        -0.6486, 0.3806, 0.4745, 0.6745, 0.816,
        -0.633, 0.3602, 0.4745, 0.6745, 0.816,
        -0.62, 0.36, 0.4745, 0.6745, 0.816,

        -0.6486, 0.3806, 0.4745, 0.6745, 0.816,
        -0.62, 0.36, 0.4745, 0.6745, 0.816,
        -0.625, 0.3805, 0.4745, 0.6745, 0.816,

        -0.6486, 0.3806, 0.4745, 0.6745, 0.816,
        -0.625, 0.3805, 0.4745, 0.6745, 0.816,
        -0.6343, 0.3938, 0.4745, 0.6745, 0.816,

        -0.6343, 0.3938, 0.4745, 0.6745, 0.816,
        -0.625, 0.3805, 0.4745, 0.6745, 0.816,
        -0.62, 0.4, 0.4745, 0.6745, 0.816,

    ];

    var verticesKanan = [
        //kiri atas
        0.5, 0.4, 0.604, 0.804, 0.816,
        0.5, 0.466, 0.604, 0.804, 0.816,
        0.48, 0.465, 0.604, 0.804, 0.816,

        0.5, 0.4, 0.604, 0.804, 0.816,
        0.48, 0.465, 0.604, 0.804, 0.816,
        0.461, 0.463, 0.604, 0.804, 0.816,

        0.5, 0.4, 0.604, 0.804, 0.816,
        0.461, 0.463, 0.604, 0.804, 0.816,
        0.441, 0.458, 0.604, 0.804, 0.816,

        0.5, 0.4, 0.604, 0.804, 0.816,
        0.441, 0.458, 0.604, 0.804, 0.816,
        0.421, 0.45, 0.604, 0.804, 0.816,

        0.5, 0.4, 0.604, 0.804, 0.816,
        0.421, 0.45, 0.604, 0.804, 0.816,
        0.404, 0.44, 0.604, 0.804, 0.816,

        0.5, 0.4, 0.604, 0.804, 0.816,
        0.404, 0.44, 0.604, 0.804, 0.816,
        0.392, 0.429, 0.604, 0.804, 0.816,

        0.5, 0.4, 0.604, 0.804, 0.816,
        0.392, 0.429, 0.604, 0.804, 0.816,
        0.383, 0.415, 0.604, 0.804, 0.816,

        0.5, 0.4, 0.604, 0.804, 0.816,
        0.383, 0.415, 0.604, 0.804, 0.816,
        0.38, 0.4, 0.604, 0.804, 0.816,

        //kiri bawah
        0.5, 0.4, 0.604, 0.804, 0.816,
        0.5, 0.334, 0.604, 0.804, 0.816,
        0.48, 0.335, 0.604, 0.804, 0.816,
        
        0.5, 0.4, 0.604, 0.804, 0.816,
        0.48, 0.335, 0.604, 0.804, 0.816,
        0.461, 0.337, 0.604, 0.804, 0.816,

        0.5, 0.4, 0.604, 0.804, 0.816,
        0.461, 0.337, 0.604, 0.804, 0.816,
        0.441, 0.342, 0.604, 0.804, 0.816,

        0.5, 0.4, 0.604, 0.804, 0.816,
        0.441, 0.342, 0.604, 0.804, 0.816,
        0.421, 0.35, 0.604, 0.804, 0.816,

        0.5, 0.4, 0.604, 0.804, 0.816,
        0.421, 0.35, 0.604, 0.804, 0.816,
        0.404, 0.36, 0.604, 0.804, 0.816,

        0.5, 0.4, 0.604, 0.804, 0.816,
        0.404, 0.36, 0.604, 0.804, 0.816,
        0.392, 0.371, 0.604, 0.804, 0.816,

        0.5, 0.4, 0.604, 0.804, 0.816,
        0.392, 0.371, 0.604, 0.804, 0.816,
        0.383, 0.385, 0.604, 0.804, 0.816,

        0.5, 0.4, 0.604, 0.804, 0.816,
        0.383, 0.385, 0.604, 0.804, 0.816,
        0.38, 0.4, 0.604, 0.804, 0.816,

        //kanan atas
        0.5, 0.4, 0.604, 0.804, 0.816,
        0.5, 0.466, 0.604, 0.804, 0.816,
        0.52, 0.465, 0.604, 0.804, 0.816,

        0.5, 0.4, 0.604, 0.804, 0.816,
        0.52, 0.465, 0.604, 0.804, 0.816,
        0.539, 0.463, 0.604, 0.804, 0.816,
        
        0.5, 0.4, 0.604, 0.804, 0.816,
        0.539, 0.463, 0.604, 0.804, 0.816,
        0.559, 0.458, 0.604, 0.804, 0.816,

        0.5, 0.4, 0.604, 0.804, 0.816,
        0.559, 0.458, 0.604, 0.804, 0.816,
        0.579, 0.45, 0.604, 0.804, 0.816,

        0.5, 0.4, 0.604, 0.804, 0.816,
        0.579, 0.45, 0.604, 0.804, 0.816,
        0.596, 0.44, 0.604, 0.804, 0.816,

        0.5, 0.4, 0.604, 0.804, 0.816,
        0.596, 0.44, 0.604, 0.804, 0.816,
        0.608, 0.429, 0.604, 0.804, 0.816,

        0.5, 0.4, 0.604, 0.804, 0.816,
        0.608, 0.429, 0.604, 0.804, 0.816,
        0.617, 0.415, 0.604, 0.804, 0.816,

        0.5, 0.4, 0.604, 0.804, 0.816,
        0.617, 0.415, 0.604, 0.804, 0.816,
        0.62, 0.4, 0.604, 0.804, 0.816,

        //kanan bawah
        0.5, 0.4, 0.604, 0.804, 0.816,
        0.5, 0.334, 0.604, 0.804, 0.816,
        0.52, 0.335, 0.604, 0.804, 0.816,

        0.5, 0.4, 0.604, 0.804, 0.816,
        0.52, 0.335, 0.604, 0.804, 0.816,
        0.539, 0.337, 0.604, 0.804, 0.816,

        0.5, 0.4, 0.604, 0.804, 0.816,
        0.539, 0.337, 0.604, 0.804, 0.816,
        0.559, 0.342, 0.604, 0.804, 0.816,

        0.5, 0.4, 0.604, 0.804, 0.816,
        0.559, 0.342, 0.604, 0.804, 0.816,
        0.579, 0.35, 0.604, 0.804, 0.816,

        0.5, 0.4, 0.604, 0.804, 0.816,
        0.579, 0.35, 0.604, 0.804, 0.816,
        0.596, 0.36, 0.604, 0.804, 0.816,

        0.5, 0.4, 0.604, 0.804, 0.816,
        0.596, 0.36, 0.604, 0.804, 0.816,
        0.608, 0.371, 0.604, 0.804, 0.816,

        0.5, 0.4, 0.604, 0.804, 0.816,
        0.608, 0.371, 0.604, 0.804, 0.816,
        0.617, 0.385, 0.604, 0.804, 0.816,

        0.5, 0.4, 0.604, 0.804, 0.816,
        0.617, 0.385, 0.604, 0.804, 0.816,
        0.62, 0.4, 0.604, 0.804, 0.816,

        //kiri body
        0.5, 0.008, 0.118, 0.541, 0.58,
        0.5, 0.334, 0.118, 0.541, 0.58,
        0.48, 0.335, 0.118, 0.541, 0.58,
        
        0.5, 0.008, 0.118, 0.541, 0.58,
        0.48, 0.335, 0.118, 0.541, 0.58,
        0.461, 0.337, 0.118, 0.541, 0.58,

        0.5, 0.008, 0.118, 0.541, 0.58,
        0.461, 0.337, 0.118, 0.541, 0.58,
        0.441, 0.342, 0.118, 0.541, 0.58,

        0.5, 0.008, 0.118, 0.541, 0.58,
        0.441, 0.342, 0.118, 0.541, 0.58,
        0.421, 0.35, 0.118, 0.541, 0.58,

        0.5, 0.008, 0.118, 0.541, 0.58,
        0.421, 0.35, 0.118, 0.541, 0.58,
        0.404, 0.36, 0.118, 0.541, 0.58,

        0.5, 0.008, 0.118, 0.541, 0.58,
        0.404, 0.36, 0.118, 0.541, 0.58,
        0.392, 0.371, 0.118, 0.541, 0.58,

        0.5, 0.008, 0.118, 0.541, 0.58,
        0.392, 0.371, 0.118, 0.541, 0.58,
        0.383, 0.385, 0.118, 0.541, 0.58,

        0.5, 0.008, 0.118, 0.541, 0.58,
        0.383, 0.385, 0.118, 0.541, 0.58,
        0.38, 0.4, 0.118, 0.541, 0.58,

        0.5, 0.008, 0.118, 0.541, 0.58,
        0.4, 0.008, 0.118, 0.541, 0.58,
        0.38, 0.4, 0.118, 0.541, 0.58,

        //kanan body
        0.5, 0.008, 0.118, 0.541, 0.58,
        0.5, 0.334, 0.118, 0.541, 0.58,
        0.52, 0.335, 0.118, 0.541, 0.58,

        0.5, 0.008, 0.118, 0.541, 0.58,
        0.52, 0.335, 0.118, 0.541, 0.58,
        0.539, 0.337, 0.118, 0.541, 0.58,

        0.5, 0.008, 0.118, 0.541, 0.58,
        0.539, 0.337, 0.118, 0.541, 0.58,
        0.559, 0.342, 0.118, 0.541, 0.58,

        0.5, 0.008, 0.118, 0.541, 0.58,
        0.559, 0.342, 0.118, 0.541, 0.58,
        0.579, 0.35, 0.118, 0.541, 0.58,

        0.5, 0.008, 0.118, 0.541, 0.58,
        0.579, 0.35, 0.118, 0.541, 0.58,
        0.596, 0.36, 0.118, 0.541, 0.58,

        0.5, 0.008, 0.118, 0.541, 0.58,
        0.596, 0.36, 0.118, 0.541, 0.58,
        0.608, 0.371, 0.118, 0.541, 0.58,

        0.5, 0.008, 0.118, 0.541, 0.58,
        0.608, 0.371, 0.118, 0.541, 0.58,
        0.617, 0.385, 0.118, 0.541, 0.58,

        0.5, 0.008, 0.118, 0.541, 0.58,
        0.617, 0.385, 0.118, 0.541, 0.58,
        0.62, 0.4, 0.118, 0.541, 0.58,

        0.5, 0.008, 0.118, 0.541, 0.58,
        0.6, 0.008, 0.118, 0.541, 0.58,
        0.62, 0.4, 0.118, 0.541, 0.58,

        //kiri body
        0.5, -0.1, 0.118, 0.541, 0.58,
        0.5, 0.334, 0.118, 0.541, 0.58,
        0.48, 0.335, 0.118, 0.541, 0.58,
        
        0.5, -0.1, 0.118, 0.541, 0.58,
        0.48, 0.335, 0.118, 0.541, 0.58,
        0.461, 0.337, 0.118, 0.541, 0.58,

        0.5, -0.1, 0.118, 0.541, 0.58,
        0.461, 0.337, 0.118, 0.541, 0.58,
        0.441, 0.342, 0.118, 0.541, 0.58,

        0.5, -0.1, 0.118, 0.541, 0.58,
        0.441, 0.342, 0.118, 0.541, 0.58,
        0.421, 0.35, 0.118, 0.541, 0.58,

        0.5, -0.1, 0.118, 0.541, 0.58,
        0.421, 0.35, 0.118, 0.541, 0.58,
        0.404, 0.36, 0.118, 0.541, 0.58,

        0.5, -0.1, 0.118, 0.541, 0.58,
        0.404, 0.36, 0.118, 0.541, 0.58,
        0.392, 0.371, 0.118, 0.541, 0.58,

        0.5, -0.1, 0.118, 0.541, 0.58,
        0.392, 0.371, 0.118, 0.541, 0.58,
        0.383, 0.385, 0.118, 0.541, 0.58,

        0.5, -0.1, 0.118, 0.541, 0.58,
        0.383, 0.385, 0.118, 0.541, 0.58,
        0.38, 0.4, 0.118, 0.541, 0.58,

        0.5, -0.1, 0.118, 0.541, 0.58,
        0.4, -0.1, 0.118, 0.541, 0.58,
        0.38, 0.4, 0.118, 0.541, 0.58,

        //kanan body
        0.5, -0.1, 0.118, 0.541, 0.58,
        0.5, 0.334, 0.118, 0.541, 0.58,
        0.52, 0.335, 0.118, 0.541, 0.58,

        0.5, -0.1, 0.118, 0.541, 0.58,
        0.52, 0.335, 0.118, 0.541, 0.58,
        0.539, 0.337, 0.118, 0.541, 0.58,

        0.5, -0.1, 0.118, 0.541, 0.58,
        0.539, 0.337, 0.118, 0.541, 0.58,
        0.559, 0.342, 0.118, 0.541, 0.58,

        0.5, -0.1, 0.118, 0.541, 0.58,
        0.559, 0.342, 0.118, 0.541, 0.58,
        0.579, 0.35, 0.118, 0.541, 0.58,

        0.5, -0.1, 0.118, 0.541, 0.58,
        0.579, 0.35, 0.118, 0.541, 0.58,
        0.596, 0.36, 0.118, 0.541, 0.58,

        0.5, -0.1, 0.118, 0.541, 0.58,
        0.596, 0.36, 0.118, 0.541, 0.58,
        0.608, 0.371, 0.118, 0.541, 0.58,

        0.5, -0.1, 0.118, 0.541, 0.58,
        0.608, 0.371, 0.118, 0.541, 0.58,
        0.617, 0.385, 0.118, 0.541, 0.58,

        0.5, -0.1, 0.118, 0.541, 0.58,
        0.617, 0.385, 0.118, 0.541, 0.58,
        0.62, 0.4, 0.118, 0.541, 0.58,

        0.5, -0.1, 0.118, 0.541, 0.58,
        0.6, -0.1, 0.118, 0.541, 0.58,
        0.62, 0.4, 0.118, 0.541, 0.58,

        //kiri alas
        0.5, -0.1, 0.118, 0.541, 0.58,
        0.5, -0.156, 0.118, 0.541, 0.58,
        0.4692, -0.1521, 0.118, 0.541, 0.58,
        
        0.5, -0.1, 0.118, 0.541, 0.58,
        0.4692, -0.1521, 0.118, 0.541, 0.58,
        0.4373, -0.1388, 0.118, 0.541, 0.58,

        0.5, -0.1, 0.118, 0.541, 0.58,
        0.4373, -0.1388, 0.118, 0.541, 0.58,
        0.4147, -0.1209, 0.118, 0.541, 0.58,

        0.5, -0.1, 0.118, 0.541, 0.58,
        0.4147, -0.1209, 0.118, 0.541, 0.58,
        0.4, -0.1, 0.118, 0.541, 0.58,

        //kanan alas
        0.5, -0.1, 0.118, 0.541, 0.58,
        0.5, -0.156, 0.118, 0.541, 0.58,
        0.5308, -0.1522, 0.118, 0.541, 0.58,

        0.5, -0.1, 0.118, 0.541, 0.58,
        0.5308, -0.1522, 0.118, 0.541, 0.58,
        0.5627, -0.1388, 0.118, 0.541, 0.58,

        0.5, -0.1, 0.118, 0.541, 0.58,
        0.5627, -0.1388, 0.118, 0.541, 0.58,
        0.5853, -0.1204, 0.118, 0.541, 0.58,

        0.5, -0.1, 0.118, 0.541, 0.58,
        0.5853, -0.1204, 0.118, 0.541, 0.58,
        0.6, -0.1, 0.118, 0.541, 0.58,

        //kiri selimut tutup
        0.5, 0.305, 0.4745, 0.6745, 0.816,
        0.5, 0.334, 0.4745, 0.6745, 0.816,
        0.4525, 0.3106, 0.4745, 0.6745, 0.816,

        0.5, 0.334, 0.4745, 0.6745, 0.816,
        0.4525, 0.3106, 0.4745, 0.6745, 0.816,
        0.461, 0.337, 0.4745, 0.6745, 0.816,

        0.4525, 0.3106, 0.4745, 0.6745, 0.816,
        0.461, 0.337, 0.4745, 0.6745, 0.816,
        0.4098, 0.3281, 0.4745, 0.6745, 0.816,

        0.461, 0.337, 0.4745, 0.6745, 0.816,
        0.4098, 0.3281, 0.4745, 0.6745, 0.816,
        0.392, 0.371, 0.4745, 0.6745, 0.816,

        0.4098, 0.3281, 0.4745, 0.6745, 0.816,
        0.392, 0.371, 0.4745, 0.6745, 0.816,
        0.38, 0.36, 0.4745, 0.6745, 0.816,

        0.392, 0.371, 0.4745, 0.6745, 0.816,
        0.38, 0.36, 0.4745, 0.6745, 0.816,
        0.383, 0.385, 0.4745, 0.6745, 0.816,

        0.38, 0.36, 0.4745, 0.6745, 0.816,
        0.383, 0.385, 0.4745, 0.6745, 0.816,
        0.375, 0.3805, 0.4745, 0.6745, 0.816,
        
        0.383, 0.385, 0.4745, 0.6745, 0.816,
        0.375, 0.3805, 0.4745, 0.6745, 0.816,
        0.38, 0.4, 0.4745, 0.6745, 0.816,

        //kiri selimut tutup
        0.5, 0.305, 0.4745, 0.6745, 0.816,
        0.5, 0.334, 0.4745, 0.6745, 0.816,
        0.5475, 0.3106, 0.4745, 0.6745, 0.816,

        0.5, 0.334, 0.4745, 0.6745, 0.816,
        0.5475, 0.3106, 0.4745, 0.6745, 0.816,
        0.539, 0.337, 0.4745, 0.6745, 0.816,

        0.5475, 0.3106, 0.4745, 0.6745, 0.816,
        0.539, 0.337, 0.4745, 0.6745, 0.816,
        0.5902, 0.3281, 0.4745, 0.6745, 0.816,

        0.539, 0.337, 0.4745, 0.6745, 0.816,
        0.5902, 0.3281, 0.4745, 0.6745, 0.816,
        0.579, 0.35, 0.4745, 0.6745, 0.816,

        0.5902, 0.3281, 0.4745, 0.6745, 0.816,
        0.579, 0.35, 0.4745, 0.6745, 0.816,
        0.62, 0.36, 0.4745, 0.6745, 0.816,

        0.579, 0.35, 0.4745, 0.6745, 0.816,
        0.62, 0.36, 0.4745, 0.6745, 0.816,
        0.608, 0.371, 0.4745, 0.6745, 0.816,

        0.62, 0.36, 0.4745, 0.6745, 0.816,
        0.608, 0.371, 0.4745, 0.6745, 0.816,
        0.625, 0.3805, 0.4745, 0.6745, 0.816,
        
        0.608, 0.371, 0.4745, 0.6745, 0.816,
        0.625, 0.3805, 0.4745, 0.6745, 0.816,
        0.62, 0.4, 0.4745, 0.6745, 0.816,

        //kanan tutup
        0.6486, 0.3806, 0.4745, 0.6745, 0.816,
        0.6481, 0.3671, 0.4745, 0.6745, 0.816,
        0.633, 0.3602, 0.4745, 0.6745, 0.816,

        0.6486, 0.3806, 0.4745, 0.6745, 0.816,
        0.633, 0.3602, 0.4745, 0.6745, 0.816,
        0.62, 0.36, 0.4745, 0.6745, 0.816,

        0.6486, 0.3806, 0.4745, 0.6745, 0.816,
        0.62, 0.36, 0.4745, 0.6745, 0.816,
        0.625, 0.3805, 0.4745, 0.6745, 0.816,

        0.6486, 0.3806, 0.4745, 0.6745, 0.816,
        0.625, 0.3805, 0.4745, 0.6745, 0.816,
        0.6343, 0.3938, 0.4745, 0.6745, 0.816,

        0.6343, 0.3938, 0.4745, 0.6745, 0.816,
        0.625, 0.3805, 0.4745, 0.6745, 0.816,
        0.62, 0.4, 0.4745, 0.6745, 0.816,
        
    ]

    var vertices = [...verticesKiri, ...verticesKanan];

    //linked list untuk menyimpan data vertex
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying  vec3 vColor;
        uniform mat4 uTranslate;
        void main(){
            gl_Position = uTranslate * vec4(aPosition, 0.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main(){
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader,fragmentShaderSource);

    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);

    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 5*Float32Array.BYTES_PER_ELEMENT, 0);
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 5*Float32Array.BYTES_PER_ELEMENT, 2*Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);

    var speed = 0.0071;
    var change = 0;
    const uTranslate = gl.getUniformLocation(shaderProgram, 'uTranslate');
    function render() {
        if(change >= 0.5 || change <=-0.5) speed = -speed;
        change += speed;
        
        const kiri = [
			1.0, 0.0, 0.0, 0.0,
			0.0, 1.0, 0.0, 0.0,
			0.0, 0.0, 1.0, 0.0,
			0, 0.0, 0.0, 1.0,
		]
		
		const kanan = [
			1.0, 0.0, 0.0, 0.0,
			0.0, 1.0, 0.0, 0.0,
			0.0, 0.0, 1.0, 0.0,
			0, change, 0.0, 1.0,
		]

        gl.clearColor(1.0, 1.0, 1.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.uniformMatrix4fv(uTranslate, false, kiri);
        gl.drawArrays(gl.TRIANGLES, 0, verticesKiri.length/5);

		gl.uniformMatrix4fv(uTranslate, false, kanan);
        gl.drawArrays(gl.TRIANGLES, verticesKiri.length/5, verticesKanan.length/5);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}