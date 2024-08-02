
let ele;
function renderToDom(DomOfApp, domNode) {
        for(const key in DomOfApp) {
            if(typeof DomOfApp[key] === 'object') {
                renderToDom(DomOfApp[key], ele);
            } else {
                if (key === 'type') {
                    ele = document.createElement(DomOfApp['type']);

                } else if(typeof Number(key) === 'number') {
                   if (typeof DomOfApp[key] === 'object') {
                    renderToDom(DomOfApp[key], ele);
                   } else {
                    ele.innerText = DomOfApp[key];
                   }
                } 
                else {
                    ele.setAttribute(key, DomOfApp[key]);
                }
            }
        }
        domNode.appendChild(ele);
}