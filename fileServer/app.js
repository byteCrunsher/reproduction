const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const app = express();
const router = express.Router();

app.use(cors());

app.use(express.static(path.resolve(__dirname, '../base')));

fs.readdirSync(path.resolve(__dirname, '../apps')).forEach(appName => {
	app.use(express.static(path.resolve(__dirname, `../apps/${appName}`)));
});

router.get('/subApps/:appName', function(req, res) {
	res.sendFile(
		path.resolve(__dirname, `../apps/${req.params.appName}/index.html`)
	);
});

router.get('*', function(req, res) {
	res.sendFile(path.resolve(__dirname, '../base/index.html'));
});

app.use('/', router);

app.listen(3000, function() {
	console.log('Fileserver listening on port 3000');
});
