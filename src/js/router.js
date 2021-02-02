module.exports = app => {

    app.get('/', function (req, res) {
        res.render('index.html');
    });

    app.get('/page7', (req, res) => {
        res.render('page7.html')
    })

}
