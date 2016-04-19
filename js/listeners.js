/* global right forward penStyle left*/
(function(Turtle) {
    
    /**
     * Detects which key was pressed
     */
    function detectKey(event) {
        var code = event.keyCode;
        switch(code) {
            case 37:
                Turtle.left();
                break;
            case 38:
                Turtle.forward();
                break;
            case 39:
                Turtle.right();
                break;
        }
    }
    
    var clear = document.querySelector('.clear');
    clear.addEventListener('click', function() {
        Turtle.clear();
    });

    document.addEventListener('keydown', detectKey);
    
    
})(window.Turtle);