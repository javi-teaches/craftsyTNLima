const fs = require('fs');
const path = require('path');

// ************ Function to Read an HTML File ************
function readHTML (fileName) {
	let htmlFilePath = path.join(__dirname, `/../views/${fileName}.html`);
	let htmlFile = fs.readFileSync(htmlFilePath, 'utf-8');
	return htmlFile;
}

const controller = {
	root: (req, res) => {
		let html = readHTML('index');
		res.send(html);
	},
	register: (req, res) => {
		let html = readHTML('register');
		res.send(html);
	},
	login: (req, res) => {
		let html = readHTML('login');
		res.send(html);
	}
};

module.exports = controller
