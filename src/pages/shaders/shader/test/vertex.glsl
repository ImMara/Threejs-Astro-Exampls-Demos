//uniform mat4 projectionMatrix; // works with raw shader material
//uniform mat4 viewMatrix;
//uniform mat4 modelMatrix;

//attribute vec3 position;
attribute float aRandom;// get the attribute from the index script
//attribute vec2 uv;

uniform vec2 uFrequency;
uniform float uTime;

varying vec2 vUv;
varying float vElevation;

//varying float vRandom; // pass the attribute to the fragment shader

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    float elevation = sin(modelPosition.x * uFrequency.x - uTime ) * 0.1;
    elevation += sin(modelPosition.y * uFrequency.y - uTime ) * 0.1;

    modelPosition.z += elevation;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;

    vUv = uv;
    vElevation = elevation;

//    vRandom = aRandom;// pass the attribute to the fragment shader
}