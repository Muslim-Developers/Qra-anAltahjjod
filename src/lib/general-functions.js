// General function to handle open/close the side-bar menu

export function openSideBar(close) {
    document.querySelector("main").classList.toggle("slide");
    document.querySelector("main").classList.toggle("stop-scroll");
    if (close) 
        document.querySelector(".cover").classList.toggle("show-cover");
    else 
        document.querySelector(".cover").classList.add("show-cover");
    document.querySelector("sub").scrollTo(0, 0);
}