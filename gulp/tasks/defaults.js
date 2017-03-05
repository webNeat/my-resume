var gulp = require('gulp'),
    connect = require('gulp-connect');

// *** Watching all changes *** //
gulp.task('watch', ['watch:core']);

// *** Cleaning all *** //
gulp.task('clean', ['clean:core', 'clean:vendors']);

// *** Building all *** //
gulp.task('build', ['vendors', 'core']);

// *** Local server *** //
gulp.task('serve', function(){
    return connect.server({
        root: 'build',
        port: 3000,
        livereload: true
    });
});

// *** The default task *** //
gulp.task('default', ['build', 'serve', 'watch']);
