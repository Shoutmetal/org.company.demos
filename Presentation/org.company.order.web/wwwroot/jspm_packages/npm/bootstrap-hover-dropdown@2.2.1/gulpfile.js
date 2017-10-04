/* */ 
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
gulp.task('default', function() {
  return gulp.src('bootstrap-hover-dropdown.js').pipe(uglify({preserveComments: 'some'})).pipe(rename('bootstrap-hover-dropdown.min.js')).pipe(gulp.dest('.'));
});
var fs = require('fs');
var bump = require('gulp-bump');
var filter = require('gulp-filter');
var git = require('gulp-git');
var tagVersion = require('gulp-tag-version');
var replace = require('gulp-replace');
var streamqueue = require('streamqueue');
function increment(importance) {
  var packages = ['package.json', 'bower.json', 'composer.json'];
  var currentVersion = JSON.parse(fs.readFileSync('bower.json')).version;
  gulp.src(packages).pipe(bump({type: importance})).pipe(gulp.dest('.')).on('end', function() {
    var newVersion = JSON.parse(fs.readFileSync('bower.json')).version;
    var packagesStream = gulp.src(packages);
    var jsStream = gulp.src(['bootstrap-hover-dropdown.js', 'bootstrap-hover-dropdown.min.js']).pipe(replace('Version: v' + currentVersion, 'Version: v' + newVersion)).pipe(gulp.dest('.'));
    streamqueue({objectMode: true}, jsStream, packagesStream).pipe(git.commit('bump packages\' version')).pipe(filter('package.json')).pipe(tagVersion()).on('end', function() {
      var spawn = require('child_process').spawn;
      spawn('npm', ['publish'], {stdio: 'inherit'});
    });
  });
}
gulp.task('patch', ['default'], function() {
  return increment('patch');
});
gulp.task('feature', ['default'], function() {
  return increment('minor');
});
gulp.task('release', ['default'], function() {
  return increment('major');
});
