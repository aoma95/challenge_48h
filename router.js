module.exports = app => {
    app.get('/', function (req, res) {
        res.render('index.html');
    })

    app.get('/cams', (req, res) => {
        res.render('page2.html');
    })

    app.get('/crisis', (req, res) => {
        res.render('page3.html')
    })

    app.get('/mdp', (req, res) => {
        res.render('page4.html')
    })

    app.get('/adminmap', (req, res) => {
        res.render('page5.html')
    })

    app.get('/page6', (req, res) => {
        res.render('page6.html')
    })

    app.get('/page7', (req, res) => {
        res.render('page7.html')
    })

    app.get('/page8', (req, res) => {
        res.render('page8.html')
    })

    app.get('/page9', (req, res) => {
        res.render('page9.html')
    })
}
