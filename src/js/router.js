module.exports = app => {

    app.get('/', function (req, res) {
        res.render('index.html');
    });

    app.get('/cams', function (req, res) {
        res.render('page2.html');
    });

}
