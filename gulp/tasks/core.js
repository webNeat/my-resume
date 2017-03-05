var gulp = require('gulp'),
    connect = require('gulp-connect'),
    del = require('del');

var config = require('../config.json'),
    run = require('../utils/run'),
    helper = require('../utils/helper');

// *** Core Tasks *** //

// Core Views
gulp.task('clean:core:views', function(){
    var dests = helper.getDestinations(config.core.views);
    del.sync(dests);
});
gulp.task('core:views', ['clean:core:views'], function(){
    config.core.views.forEach(function(v){
        run.jade(v.src, v.dest);
    });
});
gulp.task('watch:core:views', function(){
    var srcs = helper.getSources(config.core.views);
    gulp.watch(srcs, ['core:views']);
});

// Core Scripts
gulp.task('clean:core:scripts', function(){
    var dests = helper.getDestinations(config.core.scripts);
    del.sync(dests);
});
gulp.task('core:scripts', ['clean:core:scripts'], function(){
    config.core.scripts.forEach(function(s){
        run.concat(s.src, s.dest);
    });
});
gulp.task('watch:core:scripts', function(){
    var srcs = helper.getSources(config.core.scripts);
    gulp.watch(srcs, ['core:scripts']);
});

// Core Styles
gulp.task('clean:core:styles', function(){
    del.sync([config.core.styles.dest]);
});
gulp.task('core:styles', ['clean:core:styles'], function(){
    var dest = helper.splitPath(config.core.styles.dest);
    run.less(config.core.styles.src, dest.dir, config.core.styles.path);
});
gulp.task('watch:core:styles', function(){
    gulp.watch(config.core.styles.src, ['core:styles']);
});

// Core Images
gulp.task('clean:core:imgs', function(){
    del.sync([config.core.imgs.dest]);
});
gulp.task('core:imgs', ['clean:core:imgs'], function(){
    return gulp.src(config.core.imgs.src)
        .pipe(gulp.dest(config.core.imgs.dest))
        .pipe(connect.reload());
});

// Core Files
gulp.task('clean:core:files', function(){
    del.sync([config.core.files.dest]);
});
gulp.task('core:files', ['clean:core:files'], function(){
    return gulp.src(config.core.files.src)
        .pipe(gulp.dest(config.core.files.dest))
        .pipe(connect.reload());
});
gulp.task('watch:core:files', function(){
    gulp.watch(config.core.files.src, ['core:files']);
});

// All Core Tasks
gulp.task('core', ['core:views', 'core:scripts', 'core:styles', 'core:imgs', 'core:files']);
gulp.task('watch:core', ['watch:core:views', 'watch:core:scripts', 'watch:core:styles', 'watch:core:files']);
gulp.task('clean:core', ['clean:core:views', 'clean:core:scripts', 'clean:core:styles', 'clean:core:imgs', 'clean:core:files' ]);
