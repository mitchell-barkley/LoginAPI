const express = require('express');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

global.DEBUG = true;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.render('./index.ejs', { name: 'Mitchell' });
});

const loginsRouter = require('./routes/logins');
app.use('/logins', loginsRouter);

const apiRouter = require('./routes/api');
app.use('/api', apiRouter);

app.use((req, res) => {
    res.status(404).render('404.ejs');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
