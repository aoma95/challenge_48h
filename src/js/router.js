module.exports = app => {

    app.get('/', function (req, res) {
        res.render('index.html');
    })

    app.get('/page4', (req, res) => {
        res.render('page4.html')
    })

    

    app.get('/page2', function (req, res) {
        res.render('page2.html');
    });

    app.get('/page3', (req, res) => {
        res.render('page3.html')
    });
    app.get('/page5', (req, res) => {
        res.render('page5.html')
    })

}
