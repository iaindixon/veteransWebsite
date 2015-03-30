function whichTransitionEvent(){
    var t;
    var el = document.getElementById('portal');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    }

    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}

/* Listen for a transition! */
var transitionEvent = whichTransitionEvent();
transitionEvent && e.addEventListener(transitionEvent, function() {
	
});