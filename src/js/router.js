module.exports = app => {

    app.get('/', function (req, res) {
        res.render('index.html');
    });

    app.get('/crisis', function (req, res) {
        res.render('page3.html');
    });
}
