// session

const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret: 'mysecretcookie',
    saveUninitialized: false,
    resave: false,
    cookie: {maxAge: 60*60*1000}   // unit: ms, if inactive, session expires in 1 hour
}));

app.get('/', (req, res) => {
	console.log(req.session);
	if (!req.session.count) {
		req.session.count = 1;
	} else {
		req.session.count += 1;
	}
	res.send('done!');
});
app.get('/test', (req, res) => {
	console.log(req.session);
	if (!req.session.count) {
		req.session.count = 1;
	} else {
		req.session.count += 1;
	}
	res.send('done!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server is running at port', port);
});