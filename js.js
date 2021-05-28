document.getElementById("click").addEventListener('click', (e)=>{
    var overlay = document.getElementById("signup");
    overlay.style.display = 'inline-block';
    var button_click = document.getElementById("button-click")
    button_click.addEventListener('click', (e)=>{
        overlay.style.display = 'none';
    });
})
window.onload = function(){
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");

    var images = [one, two, three];
    var i = 0;
    var prev = document.getElementById("previous");
    var next = document.getElementById("next");

    next.addEventListener('click', function(){
        if(i<images.length-1){
            i++;
        }
        
        images[i-1].style.visibility = 'hidden';
    })
    prev.addEventListener('click', function(){
        if(i > 0){
            i = i-1;
        }
        images[i].style.visibility = 'visible';
    })
}
