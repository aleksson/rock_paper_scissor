let btns = document.getElementsByClassName('options');
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (ev) {

        this.disabled = true;
        this.style.backgroundColor = this.getAttribute("color");

        /*console.log('Option', {
        val : this.value,
        title:  this.title
        });*/
        
        Play(this.title);
    });
}

$(document).ready(function () {
    clog = console.log;
});


