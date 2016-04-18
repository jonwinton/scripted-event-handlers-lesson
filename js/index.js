/* global right forward penStyle left stam*/
(function(TinyTurtle){
    
    // Without any arguments, TinyTurtle uses the first canvas on the page.
    var canvas = document.querySelector('canvas');
    var clear = document.querySelector('.clear');
    var restore = document.querySelector('.restore');
    var ctx = canvas.getContext('2d');
    var currentImg = null;
    
    
    TinyTurtle.apply(window, canvas);
    
    function box(length) {
      for (var i = 0; i < 4; i++) {
        forward(length);
        right(90);
      }
    }
    
    function turtleStamp() {
        var ctx = canvas.getContext('2d');
        
        
        var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        ctx.putImageData(imgData, 0, 0);
        
    }
    
    clear.addEventListener('click', function(){
        currentImg = ctx.getImageData(0, 0, canvas.width, canvas.height);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });    
    
    restore.addEventListener('click', function() {
         ctx.putImageData(currentImg, 0, 0);
    });

    penStyle = 'purple';
    box(90);
    left(10);
    box(80);
    left(10);
    box(70);
    
    // turtleStamp();
})(window.TinyTurtle);