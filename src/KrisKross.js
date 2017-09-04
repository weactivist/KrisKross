let KrisKross = ( function() {
	function KrisKross() {
		this.defineCustomElement();

		let elements = document.getElementsByTagName( "kris-kross" );

		for( let i = 0; i < elements.length; i++ ) {
			if( this.inViewport( elements[i] ) ) {
				this.addPlaceholder( elements[i] );
			}
		}
	}

	KrisKross.prototype = {
		addPlaceholder: function( element ) {
			if( element.hasAttribute( "responsive" ) ) {
				element.style.width = "100%";
			}
			else if( element.hasAttribute( "width" ) ) {
				element.style.width = element.getAttribute( "width" ) + "px";
			}

			if( element.hasAttribute( "height" ) ) {
				element.style.height = element.getAttribute( "height" ) + "px";
			}
		},
		defineCustomElement: function() {
			window.customElements.define( "kris-kross", KrisKrossElement );
		},
		/**
		 * @returns {{top: number, left: number, right: number, bottom: number}}
		 */
		getViewport: function() {
			let doc = document.documentElement;
			let top = ( window.pageXOffset || doc.scrollLeft ) - ( doc.clientLeft || 0 );
			let left = ( window.pageYOffset || doc.scrollTop ) - ( doc.clientTop || 0 );

			return {
				top: top,
				left: left,
				right: window.innerWidth + left,
				bottom: window.innerHeight + top
			};
		},
		/**
		 * @param element
		 * @returns {boolean}
		 */
		inViewport: function( element ) {
			let rect = element.getBoundingClientRect();
			let viewport = this.getViewport();

			return rect.top <= viewport.bottom;
		}
	};

	return KrisKross;
} )();

new KrisKross();