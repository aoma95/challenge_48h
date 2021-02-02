module.exports = app => {

    app.get('/', function (req, res) {
        res.render('index.html');
    });

    app.get('/page6', (req, res) => {
        res.render('page6.html')
    })

}
