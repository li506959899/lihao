const gulp = require("gulp");

const connect = require("gulp-connect");

const proxy = require("gulp-connect-proxy");

const sass = require("gulp-sass-china");

const uglify = require("gulp-uglify");

const concat = require("gulp-concat");

const babel = require("gulp-babel");

gulp.task("server", function () {
    connect.server({
        root: ["dist"],
        port: 8008,
        livereload: true,
        middleware: function (connect, opt) {
            var Proxy = require('gulp-connect-proxy');
            opt.route = '/proxy';
            var proxy = new Proxy(opt);
            return [proxy];
        }

    });
});

gulp.task("html", function () {
    return gulp.src("index.html")
        .pipe(gulp.dest("dist/"))
        .pipe(connect.reload())

})


gulp.task("scss", () => {
    return gulp.src("scss/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("dist/style"))
        .pipe(connect.reload())
})

gulp.task("script", () => {
    return gulp.src(["js/*.js"])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        // .pipe(concat("main.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
        .pipe(connect.reload())

})

// gulp.task('packjs', () => {
//     return gulp.src('./src/scripts/*.js')
//         .pipe(babel({
//             presets: ['@babel/env']
//         }))
//         .pipe(gulp.dest('./dist/scripts'))
// })

gulp.task("htmlchild", function () {
    return gulp.src("html/*.html")
        .pipe(gulp.dest("dist/html/"))
        .pipe(connect.reload())

})


gulp.task("font", () => {
    return gulp.src(["font/*"])
        .pipe(gulp.dest("dist/font"))
        .pipe(connect.reload());
})

gulp.task("img", () => {
    return gulp.src("img/*")
        .pipe(gulp.dest("dist/img"))
        .pipe(connect.reload())
})
gulp.task("php", () => {
    return gulp.src("php/*")
        .pipe(gulp.dest("dist/php"))
        .pipe(connect.reload())
})

// gulp.task("js",function(){
//     return gulp.src("js/*")
//           .pipe(uglify())
//           .pipe(concat("gdsah.js"))
//           .pipe(gulp.dest('dist/js'));
// })

gulp.task("watch", function () {
    gulp.watch("index.html", ["html"]);
    gulp.watch("scss/*.scss", ["scss"]);
    gulp.watch("js/*.js", ["script"])
    gulp.watch("html/*.html", ["htmlchild"])
    gulp.watch("img/*", ["img"])
    gulp.watch("php/*", ["php"])

})

gulp.task("default", ["server", "watch"])
gulp.task("buld", ["php", "scss", "html", "script", "htmlchild", "img"])