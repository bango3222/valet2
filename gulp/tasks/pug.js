module.exports = function () {
//Задача на компиляцию pug в html

    task.gulp.task('pug', function () {
        return task.gulp.src('src/pug/pages/**/*.pug')
            .pipe(task.gp.pug({
                pretty: true,
                plugins: [task.css_module({
                    generateScopedName: '[path][local]-[hash:base64:10]',
                })]
            }))
            .pipe(task.gulp.dest('build/'))
            .on('end', task.bs.reload);
    });
};