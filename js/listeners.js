/* global right forward penStyle left*/
(function() {
    
    /**
     * Detects which key was pressed
     */
    function detectKey(event) {
        var code = event.keyCode;
        switch(code) {
            case 37:
                console.log('left');
                break;
            case 38:
                forward(90);
                break;
            case 39:
                right(90);
                break;
            case 40:
                console.log('down');
                break;
        }
    }
    
    
    document.addEventListener('keydown', detectKey);
    
    
})();