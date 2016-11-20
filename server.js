const express = require('express'),
			path = require('path'),
			fs = require('fs'),
			bodyParser = require('body-parser'),
			app = express(),
			PRODUCTS_FILE = path.join(__dirname, 'items.json');

// set port
app.set('port', (process.env.PORT || 3000));

// set static path
app.use(express.static(path.join(__dirname, 'dist/')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Get products
app.get('/api/items', function (req, res) {
	fs.readFile(PRODUCTS_FILE, function (err, data) {
		res.setHeader('Cache-Control', 'co-cache');
		res.json(JSON.parse(data));
	});
});

// Add products
app.post('/api/items', function (req, res) {
	fs.readFile(PRODUCTS_FILE, function (err, data) {
		let items = JSON.parse(data);
		items.push(req.body);
		console.log('items', items);
		fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 3), function (err) {
			res.setHeader('Cache-Control', 'co-cache');
			res.json(products);
		})
	});
});
app.listen(app.get('port'), function () {
	console.log(`server has started on port ${app.get('port')}`);
})