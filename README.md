# Event Handlers

Today we're going to draw. But better than that, we're going to have a drawing competition. But __first__ we have to prepare our canvas to our awesome drawings.

In this project you have a few files:

- `index.html`
- `js/index.js`
- `js/tiny-turtle/`
- `js/listeners.js`

## Where To Do Your Work

You will do all your work in `js/listeners.js`. In this file you will need to complete the following steps:

1. Create an event listener on the `document` to listen for the `keydown` event
2. Test which key has been pressed using `event.keyCode`
3. Decide which controls you want to use (arrow keys are the easiest) and create your __event handlers__
4. Make an event listener and event handler for the "Clear" button
5. Draw an awesome picture


## How Do I Make A Drawing?

After you create your __event listeners__ and __event handlers__, you'll be able to call a few functions to make the drawing. Here are all the functions:

- `Turtle.forward()`
	- This moves the line forward `5px`
- `Turtle.right()`
	- This rotates the line direction `10 degrees` to the right
- `Turtle.left()`
	- This rotates the line direction `10 degrees` to the left
- `Turtle.clear()`
	- This will erase the image and setup the line for a new drawing


__IMPORTANT:__ There's no 'undo' functionality :)