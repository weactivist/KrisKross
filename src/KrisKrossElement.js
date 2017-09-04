class KrisKrossElement extends HTMLElement {
	resize() {
		let height = 0;

		for( let i = 0; i < this.children.length; i++ ) {
			height += this.children[i].offsetHeight;
		}

		this.style.height = height + "px";
	}

	constructor() {
		super();

		this.style.display = "inline-block";
		this.style.textAlign = "center";
	}
}