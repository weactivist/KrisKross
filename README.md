# KrisKross
Useful when content is loaded after DOM is ready (like ads, AJAX, images) and pushes already rendered content around which prevents good readability.

There is nothing more disturbing than having content loaded after DOM is ready which makes the page jump around which prevents readability. This happens when ads, images and other content is loaded after DOM. This JS library creates a container with fixed sizes. Any content loaded within that container can take how much time it wants before completion. It won't affect the page.

## How to use
This tiny JS library creates a custom HTML element ("kris-kross") with the following attributes:
* width: Set the width of the container
* height: Set the height of the container
* responsive: Set dynamic width of the container. Width is ignored if this attribute is used.

## Methods
* .resize(): Automatically resizes the container based on the content within it.

### Example

**Markup:**

`<kris-kross width="600" height="250"></kris-kross>`

`<kris-kross responsive height="250"></kris-kross>`

**Markup with imaginary content:**

`<kris-kross width="600" height="250">
    <div class="banner">This is my imaginary banner which takes ~4 seconds to load. It is 600px wide and up to 250px in height.</div>
</kris-kross>`

**Resize:**

document.getElementByTagName('kris-kross')[0].resize()
