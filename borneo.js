
const borneoContainer = document.getElementById("borneo");

function getRandomRadius(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}
borneoContainer.addEventListener("click", (e) => {
    console.log('e', e)
    const clientX = e.clientX;
    const clientY = e.clientY;

    //oldT, oldL, new


    const circle = document.createElement("div");
    const radius = getRandomRadius(20, 100);

    circle.style.width = 2*radius + 'px';
    circle.style.height = 2*radius + 'px';
    circle.style.borderRadius = '50%';
    circle.style.backgroundColor = 'red';

    circle.style.position = 'absolute';
    circle.style.left = (clientX - radius) + 'px';
    circle.style.top = (clientY - radius) + 'px';

    borneoContainer.appendChild(circle);

});

