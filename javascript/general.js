function resizeIframe(obj) {
    
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}

function changePage(link) {
    "use strict";
    var element = document.getElementById('myIframe').setAttribute('src', link.href);
}

//function loadContent(evt) {
//    var e = evt.srcElement;
//    var i = e.innerHTML;
//    console.log("hi!", i);
//    if (i === "Calendar") {
//        resizeIframe(this);
//    }
//    else {
//        this.style.height;
//        resizeIframe(this);   
//    }
//}
