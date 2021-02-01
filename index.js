const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));

app.set('views', __dirname + '/src/pages');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

require('./src/js/router.js')(app);

app.listen(8081, () => {
   console.log('TOTO');
});