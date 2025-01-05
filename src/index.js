const express = require('express')
const path = require('path')
const morgan = require('morgan')
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,'public')))

app.use(morgan('combined'));

const hbs = require('express-handlebars')
app.engine('hbs', hbs.engine({
  extname: '.hbs'
}))
app.set('view engine','hbs')
app.set('views', path.join(__dirname,'resources\\views'))
app.get('/', (req, res) => {
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})
//127.0.0.1
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})