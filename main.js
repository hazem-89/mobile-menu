console.log("vvvvvvv")


window.onload = main;



function main() {
    toggleMenu();
}

function toggleMenu() {
    
    const selectElement = (element) => document.querySelector(element);
    selectElement('.mobile-burger-container').addEventListener('click', () => {
        selectElement('header').classList.toggle('active');
    });

    
}
