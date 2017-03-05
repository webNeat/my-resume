var gulp = require('gulp'),
    connect = require('gulp-connect'),
    del = require('del');

var config = require('../config.json'),
    run = require('../utils/run'),
    helper = require('../utils/helper');

// *** Vendors Tasks *** //

// Base vendors
gulp.task('clean:vendors:base', function(){
    var dests = [
        config.vendors.base.js.dest,
        // config.vendors.base.less.dest,
        config.vendors.base.css.dest,
        config.vendors.base.fonts.dest
    ];
    del.sync(dests);
});
gulp.task('vendors:base', ['clean:vendors:base'], function(){
    // Scripts
    run.concat(config.vendors.base.js.src, config.vendors.base.js.dest);
    // Styles
    run.concat(config.vendors.base.css.src, config.vendors.base.css.dest);
    // Fonts
    gulp.src(config.vendors.base.fonts.src)
        .pipe(gulp.dest(config.vendors.base.fonts.dest));
});

// All Tasks
gulp.task('vendors', ['vendors:base']);
gulp.task('clean:vendors', ['clean:vendors:base']);
