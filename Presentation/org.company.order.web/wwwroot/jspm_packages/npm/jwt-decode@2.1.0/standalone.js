/* */ 
var jwt_decode = require('./lib/index');
if (typeof global.window.define == 'function' && global.window.define.amd) {
  global.window.define('jwt_decode', function() {
    return jwt_decode;
  });
} else if (global.window) {
  global.window.jwt_decode = jwt_decode;
}
