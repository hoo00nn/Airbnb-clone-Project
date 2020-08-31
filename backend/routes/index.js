const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(port, () => {
  console.log(`server is running on port ${port}...`);
});