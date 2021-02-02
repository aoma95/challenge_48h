module.exports = app => {

    app.get('/', function (req, res) {
        res.render('index.html');
    });

    app.get('/page9', (req, res) => {
        res.render('page9.html')
    })

}
