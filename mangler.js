class ManglerModel {
	constructor() {

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

var app = new ManglerApp(viewElements);