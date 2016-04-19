/* global right forward penStyle left stam*/
(function(TinyTurtle, window){
    
    var Turtle = function() {
        this.init();
    };

    var proto = Turtle.prototype;

    // Init
    proto.init = function() {
        // Canvas
        this.canvas = document.querySelector('canvas');
        // Canvas Context
        this.ctx = this.canvas.getContext('2d');
        // Instantiate Tiny Turtle
        this.Turtle = new TinyTurtle(this.canvas);

        this.forwardStep = 5;
        this.turnStep = 10;
    }

    // Move Forward
    proto.forward = function() {
        this.Turtle.forward(this.forwardStep);
    }

    proto.right = function() {
        this.Turtle.right(this.turnStep);
    };

    proto.left = function() {
        this.Turtle.left(this.turnStep);
    };

    proto.clear = function() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.Turtle = new TinyTurtle(this.canvas);
    }

    proto.setColor = function(color) {
        this.Turtle.penStyle = color || 'black';
    }

    proto.setWidth = function(width) {
        this.Turtle.penWidth = width || 1;
    }

    proto.liftUp = function(width) {
        this.Turtle.penUp();
    }

    proto.putDown = function(width) {
        this.Turtle.penDown();
    }
    
    window.Turtle = new Turtle();
})(window.TinyTurtle, window);