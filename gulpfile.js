var gulp = require('gulp');
var ssi = require('browsersync-ssi');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./",
            middleware: ssi({
                baseDir: __dirname,
                ext: '.html',
                version: '1.4.0'
            })
        },
        open: false
    });
    gulp.watch("./**/*").on('change', browserSync.reload);

});

gulp.task('default', ['serve']);