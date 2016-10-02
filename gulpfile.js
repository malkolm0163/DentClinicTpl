var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS    = require('gulp-clean-css'),
    rename       = require('gulp-rename'),
    browserSync  = require('browser-sync').create(),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify');

gulp.task('browser-sync', ['styles'], function() {
    browserSync.init({
        server: {
            baseDir: "./app"
        },
        notify: false
    });
});

gulp.task('styles', function () {
    return gulp.src('app/sass/*.sass')
        .pipe(sass({
            includePaths: require('node-bourbon').includePaths
        }).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix : ''}))
        .pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
        .pipe(cleanCSS())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
    return gulp.src([
        './app/libs/jquery/dist/jquery.2.2.4.min.js',
        './app/libs/owl-carousel/owl-carousel/owl.carousel.min.js',
        './app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
        './app/libs/jquery-equalheights/jquery.equalheights.min.js'
    ])
        .pipe(concat('libs.js'))
        .pipe(uglify()) //Minify libs.js
        .pipe(gulp.dest('./app/js/'));
});

gulp.task('watch', function () {
    gulp.watch('app/sass/*.sass', ['styles']);
    // gulp.watch('app/libs/**/*.js', ['scripts']);
    gulp.watch('app/js/*.js').on("change", browserSync.reload);
    gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);
