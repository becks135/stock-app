export const toggleWatchList = () => {
    const watchList = document.querySelector(".watch-list");
    watchList.classList.toggle("show");
}

export const showWatchList = () => {
    const watchList = document.querySelector(".watch-list");
    watchList.classList.add("show");
}

export const hideWatchList = () => {
    const watchList = document.querySelector(".watch-list");
    watchList.classList.remove("show");
}