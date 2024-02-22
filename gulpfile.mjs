import gulp from 'gulp';
import fileinclude from 'gulp-file-include';


function html() {
    return gulp.src('src/*.html') // путь к исходным файлам HTML
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(gulp.dest('dist')); // путь к папке назначения
  }
  export { html };