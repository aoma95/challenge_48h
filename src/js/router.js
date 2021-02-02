module.exports = app => {

    app.get('/', function (req, res) {
        res.render('index.html');
    });

    app.get('/page8', (req, res) => {
        res.render('page8.html')
    })

}
