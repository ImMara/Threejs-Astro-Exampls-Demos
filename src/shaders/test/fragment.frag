varying vec2 vUv;

void main(void)
{
    // uv works from bottom left to top right

    // P3
//    float strength = vUv.x;
//    gl_FragColor = vec4(strength, strength, strength, 1.0); // RGB + Alpha

    // P4
//    float strength = vUv.y;
//    gl_FragColor = vec4(strength, strength, strength, 1.0);

    // P5
//    float strength = 1.0 - vUv.y;
//    gl_FragColor = vec4(strength, strength, strength, 1.0);

    // P6
//    float strength = vUv.y*10.0;
//    gl_FragColor = vec4(strength, strength, strength, 1.0);

    // P7
//    float strength = mod(vUv.y * 10.0 ,1.0); //mod =modulo reah 1 and then start again
//    gl_FragColor = vec4(strength, strength, strength, 1.0);

    // P8
//    float strength =mod( vUv.y * 10.0, 1.0);
//    strength = step(0.5, strength); // step = 0.5 is the threshold
//    // when it reaches a limit it will go to 1, if it's below it will go to 0
//    gl_FragColor = vec4(strength, strength, strength, 1.0);

        // P9
//    float strength =mod( vUv.y * 10.0, 1.0);
//        strength = step(0.8, strength); // step = 0.5 is the threshold
//        // when it reaches a limit it will go to 1, if it's below it will go to 0
//        gl_FragColor = vec4(strength, strength, strength, 1.0);

        // P10
//    float strength =mod( vUv.x * 10.0, 1.0);
//        strength = step(0.5, strength); // step = 0.5 is the threshold
//        // when it reaches a limit it will go to 1, if it's below it will go to 0
//        gl_FragColor = vec4(strength, strength, strength, 1.0);

    // P11
//    float strength = step(0.8, mod(vUv.x *10.0 ,1.0));;
//    strength += step(0.8, mod(vUv.y *10.0 ,1.0));
//    gl_FragColor = vec4(strength, strength, strength, 1.0);

        // P12
//        float strength = step(0.8, mod(vUv.x *10.0 ,1.0));
//        strength *= step(0.8, mod(vUv.y *10.0 ,1.0));
//        gl_FragColor = vec4(strength, strength, strength, 1.0);
    // P13
//    float strength = step(0.4, mod(vUv.x *10.0 ,1.0));
//    strength *= step(0.8, mod(vUv.y *10.0 ,1.0));
//    gl_FragColor = vec4(strength, strength, strength, 1.0);

        // P14
//        float barX = step(0.4, mod(vUv.x *10.0 ,1.0));
//        barX *= step(0.8, mod(vUv.y *10.0 ,1.0));
//        float barY = step(0.4, mod(vUv.y *10.0 ,1.0));
//        barY *= step(0.8, mod(vUv.x *10.0 ,1.0));
//        float strength = barX + barY;
//        gl_FragColor = vec4(strength, strength, strength, 1.0);

        // P15


}