# KrisKross
Useful when content is loaded after DOM is ready (like ads, AJAX, images) and pushes already rendered content around which prevents good readability.

There is nothing more disturbing than having content loaded after DOM is ready which makes the page jump around which prevents readability. This happens when ads, images and other content is loaded after DOM. It is disturbing.

## How to use
This tiny JS library creates a custom HTML element ("kris-kross") with the following attributes:
* width: Set the width of the container
* height: Set the height of the container

## Methods
* .resize(): Automatically resizes the container based on the content within it.

### Example

Markup:
`<kris-kross width="600" height="250"></kris-kross>`

Markup with imaginary content:
`<kris-kross width="600" height="250">
    <div class="banner">This is my imaginary banner which takes ~4 seconds to load. It is 600px wide and up to 250px in height.</div>
</kris-kross>`

Resize:
document.getElementByTagName('kris-kross')[0].resize()
