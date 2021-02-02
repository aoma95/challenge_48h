module.exports = app => {

    app.get('/', function (req, res) {
        res.render('index.html');
    })

    app.get('/page4', (req, res) => {
        res.render('page4.html')
    })

    

}
