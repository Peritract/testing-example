/* Node (can use require, exports, has no necessary concept of a document) */

const increaseCount = () => {
    readout.textContent = parseInt(readout.textContent) + 1;
}


/* Browser (require, exports, needs a document to work)  */

const button = document.querySelector("#clicker");
const readout = document.querySelector("#readout");

button.addEventListener("click", increaseCount)

// Allowed in both

if (typeof exports !== 'undefined') {
    module.exports = {
        increaseCount
    };
}



