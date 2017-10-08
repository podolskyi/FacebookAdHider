console.log("started up");
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

function findElementAndHideParent(elements, innerhtml, parentname){
    var i;
    for(i=0; i < elements.length; i++){
        if (elements[i].innerHTML == innerhtml){
            var e = elements[i].parentElement;
            while(true){
                if(e.className == parentname){
                    //hide element
                    console.log("%c REMOVED " + innerhtml + " post. ", 'background: #222; color: #bada55');
                    e.style.display = "none"
                    elements[i].innerHTML = innerhtml + "HIDDEN"
                    break;
                }
                else{
                    e = e.parentElement;
                }    
            }
        }
    }
}

var observer = new MutationObserver(function(mutations, observer) {
    findElementAndHideParent(document.getElementsByClassName("_m8d"), "Voorgesteld bericht", "_5pcr fbUserStory");
    findElementAndHideParent(document.getElementsByClassName("_3e_2 _m8c"), "Gesponsord", "_5pcr fbUserStory");
});

observer.observe(document, {
    subtree: true,
    attributes: true,
    childList: false,
    characterData: false,
    attributeOldValue: false,
    characterDataOldValue: false
});


