varying vec2 vUv;

uniform float time;
uniform sampler2D testchannel0;

void main() {
  //gl_FragColor = mix(texture2D(testchannel0, vUv), vec4(vec3(vUv.x, vUv.y, sin(time)), 1.0), 0.5);

  //vec2 st = vUv;
  //float pixcels = 10.0;
  //gl_FragColor = texture2D(testchannel0, floor(st * pixcels) / pixcels);
  
  vec2 st = vUv;
  float pixcels = 100.0;
  vec4 mosaicCol = texture2D(testchannel0, floor(st * pixcels) / pixcels);

  pixcels = 20.0;
  float dist = distance(fract(st * pixcels), vec2(0.5));
  dist = step(dist, 0.5);
  gl_FragColor = vec4(1.0,1.0,0.0, dist) *  mosaicCol * vec4(1.0,1.0,1.0,0.2);
  
}
