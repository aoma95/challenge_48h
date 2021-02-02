module.exports = app => {

    app.get('/', function (req, res) {
        res.render('index.html');
    });

    app.get('/page3', (req, res) => {
        res.render('page3.html')
    });
}
