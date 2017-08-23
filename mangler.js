const express = require('express');
const app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send(req.body);
});

app.post('/', (req, res) => {
	res.send(req.param('patrick'));
});

app.listen(3000, () => {
	console.log("Example app listening on port 3000!");
});

/*class ManglerModel {
	constructor() {
        this.adjectives = require('./lists/adjectives-2.json').adjectives;
        this.adverbs =    require('./lists/adverbs-2.json').adverbs;
        this.nouns =      require('./lists/nouns-2.json').nouns;
        this.verbs =      require('./lists/verbs-tense.json').verbs.map(v => v.present);
	}
}

class ManglerView {
	constructor(viewElements) {
		this.initElements(viewElements);

		this.onSubmit = null;
	}

	initElements(viewElements) {
		const allowedElements = ['input', 'submit', 'results'];

		allowedElements.forEach(element => {  
			this[element] = document.getElementById(viewElements[element]);
		});
	}

	initEventListeners(submitFunction) {
		this.onSubmit = submitFunction;
		this.submit.addEventListener('click', this.onSubmit);
	}
}

class ManglerController {
	constructor(model, view) {
		this.model = model;
		this.view = view;

		this.view.initEventListeners(this.onSubmit.bind(this));
	}

	onSubmit() {
		console.log("submit from controller");
	}
}

class ManglerApp {
	constructor(viewElements) {
		this.model = 		new ManglerModel();
		this.view = 		new ManglerView(viewElements);
		this.controller = 	new ManglerController(this.model, this.view);
	}
}

let viewElements = {
	input: 		'acronym-input',
	submit: 	'submit-button',
	results: 	'results'
};

*/