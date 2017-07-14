var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();   //加载gulp-load-plugins插件，并马上运行它

const source = {
    css: {
        src: [
            './src/index.less',
            './src/compoents/**/*.less',
            './src/pages/**/*.less'
        ],
        dist: './dist/css',
        build: './build/css'
    },
    html: {
        src: [
        './src/index.html',
        './src/compoents/**/*.html',
        './src/pages/**/*.html'
        ],
        dist: './dist/html',
        build: './build/html'
    },
    js: {
        src: [
        './src/index.js',
        './src/compoents/**/*.js',
        './src/pages/**/*.js'
        ],
        dist: './dist/js',
        build: './build/js'
    },
    images: {
        src: './src/assets/images/*',
        dist: './dist/assets/images',
        build: './build/assets/images'
    }
};

gulp.task('clean', function(cb) {
    return gulp.src(['./build/*'])
            .pipe(plugins.clean());
});
/*
gulp.task('minify-css', function() {
    return gulp.src('source.css.dist/*.css')
            .pipe(plugins.minifyCss())
            .pipe(gulp.dest('source.css.dist'))
})
*/
gulp.task('less', function() {
    return gulp.src('source.styles')    // 压缩的文件
            .pipe(plugins.less())
            .pipe(plugins.minifyCss())  //执行压缩
            .pipe(plugins.concat('all.min.css'))
            .pipe(gulp.dest('./dist/css'))  // 输出到指定的目录
            .pipe(gulp.dest('./build/css'))  // 输出到指定的目录
            .pipe(reload({
                stream: true
            }));
});

gulp.task('images', function() {
    return gulp.src('source.images.src')    // 压缩的文件
            .pipe(plugins.less())
            .pipe(plugins.imagemin({
                optimizationalLevel: 7
            }))
            .pipe(gulp.dest(source.images.dist))  // 输出到指定的目录
            .pipe(gulp.dest(source.images.build))  // 输出到指定的目录
});

gulp.task('html', function() {
    var options = { 
        removeComments: true,   //清除HTML注释 
        collapseWhitespace: true,   //压缩HTML 
        collapseBooleanAttributes: true,    //省略布尔属性的值 <input checked="true"/> ==> <input checked /> 
        removeEmptyAttributes: true,    //删除所有空格作属性值 <input id="" /> ==> <input /> 
        removeScriptTypeAttributes: true,   //删除<script>的type="text/javascript" 
        removeStyleLinkTypeAttributes: true,    //删除<style>和<link>的type="text/css" 
        minifyJS: true,     //压缩页面JS 
        minifyCSS: true     //压缩页面CSS 
    };
    return gulp.src('source.html.src')    // 压缩的文件
            .pipe(plugins.htmlmin(options))
            .pipe(gulp.dest(source.html.build))
            .pipe(gulp.dest(source.html.dist))  // 输出到指定的目录
});

gulp.task('midify-js', function() {
    return gulp.src('source.js.src')    // 压缩的文件
            .pipe(plugins.uglify())     // 使用uglify进行压缩
            .pipe(gulp.dest(source.js.dist))  // 输出到指定的目录
            .pipe(gulp.dest(source.js.build))  // 输出到指定的目录
});

gulp.task('jsLint', function () {
    gulp.src('source.js.build/*.js')
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter()); // 输出检查结果
});

/*
gulp.task('concat', function () {
    gulp.src('js/*.js')  //要合并的文件
    .pipe(concat('all.js'))  // 合并匹配到的js文件并命名为 "all.js"
    .pipe(gulp.dest('dist/js'));
});
*/

gulp.task('default', function() {

});