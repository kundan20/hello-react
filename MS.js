//Move button on hover

const btn = document.getElementById('button');
const container = document.querySelector('.container');

const boundingRectContainer = container.getBoundingClientRect();
const boundingRectBtn = btn.getBoundingClientRect();

console.log(boundingRectContainer, boundingRectBtn)

btn.addEventListener('mouseover', () => {
    console.log('Hello')
    const left = Math.floor(Math.random() * (boundingRectContainer.width - boundingRectBtn.width)) + 1;
    const top = Math.floor(Math.random() * (boundingRectContainer.height - boundingRectBtn.height)) + 1;
    console.log('left', left)
    console.log('top', top)

    btn.style.left = left + 'px';
    btn.style.top = top + 'px';
});

