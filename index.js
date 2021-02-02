const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));

app.set('views', __dirname + '/src/pages');
app.use(express.static(__dirname + '/src'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/src'));

require('./src/js/router.js')(app);

app.listen(8080, () => {
   console.log('TOTO');
});
