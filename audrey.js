const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
window.addEventListener("scroll", function () {
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */

    audrey.style.minWidth = "50px"; 
    audrey.style.width = window.scrollY * .33 + "px"; 


    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */

    //why does "px" work instead of "100px"? (strategy idea from classmate)
    //"100px" makes the box flash and seem glitchy when scrolling, why?
    audrey.style.minHeight = "100px";
    audrey.style.height = window.scrollY * .25 + "px";

    //console.log(event)
})