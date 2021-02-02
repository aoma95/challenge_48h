module.exports = app => {

    app.get('/', function (req, res) {
        res.render('index.html');
    });

    app.get('/page5', function (req, res) {
        res.render('page5.html');
    });

}
