var gulp=require('gulp');
var concat=require('gulp-concat');
var sass=require('gulp-sass');
var jsmin=require('gulp-ugilfy');
var cssmin=require('gulp-clean-css');

gulp.task('wrbserver',function(){
    return gulp.src('./')
    function(){
        open:true,
        port:8081,
        livereload:true,
        middleware:function(req,res,next){
            var pathname=res.parse(url.src).pathname;
            if(pathname====''){
                res.end(JSON.stringify(''))
            }else{
                pathname=pathname==='?':'index.html'.pathname
            }
        }
    }
})

gulp.task('css',function(){
    return gulp.src('./src/css/*.css')
    .pipe(concat('index.css'))
    .pipe(dest('./src/css'))
})
gulp.task('scss',function(){
    return gulp.src('./src/scss/*.scss')
    .pipe(concat(''))
    .pipe(dest('./src/scss'))
})
gulp.task('js',function(){
    return gulp.src('.src.js/*.js')
    .pipe(concat(jsmin))
    .pipe(ugilfy())
    .pipe(dest('./src/js'));
})
gulp.watch('task',function(){

})
gulp.