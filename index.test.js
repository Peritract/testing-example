/**
 * @jest-environment jsdom
 */

const fs = require('fs'); // Get access to the filesystem
const path = require('path'); // Find the script's location without any fuss

// Load the raw html from a file as a string
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8').toString(); 

// Fill the fake document with the right HTML
document.documentElement.innerHTML = html

const { increaseCount } = require("./index");

describe("Front-end", () => {


    test("There is a thing in the document", () => {
        const button = document.querySelector("#clicker");
        expect(button).not.toBe(null);
    })
    
    test("There is a thing in the document with a specific class", () => {
        const button = document.querySelector("#clicker");
        expect(button.classList.contains("flip")).toBe(true);
    })
    
    test("When you click the button, the readout goes up", () => {
        const button = document.querySelector("#clicker");
        const readout = document.querySelector("#readout");
    
        expect(readout.textContent).toBe("0");
    
        button.click();
    
        expect(readout.textContent).toBe("1");
    })

})

