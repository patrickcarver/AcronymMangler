class ManglerModel {
	constructor() {

	}
}

class ManglerView {
	constructor(viewElements) {
		this.initElements(viewElements);
	}

	initElements(viewElements) {
		const allowedElements = ['input', 'submit', 'results'];
		
		allowedElements.forEach(element => {  
			this[element] = document.getElementById(element);
		});
	}
}

class ManglerController {
	constructor() {

	}
}

class ManglerApp {
	constructor(viewElements) {
		this.model = new ManglerModel();
		this.view = new ManglerView(viewElements);
		this.controller = new ManglerController();
	}
}

let viewElements = {
	input: 'acronym-input',
	submit: 'submit-button',
	results: 'results'
};

var app = new ManglerApp(viewElements);