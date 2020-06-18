
document.querySelector("iframe").addEventListener("load", function() {

    alert(this.nodeName);

});

window.addEventListener('load', () =>  {

    const preload = document.querySelector(".preload")
    preload.classList.add("preload-finish")

});

