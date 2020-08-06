function toggleMenu() {
    document.getElementsByClassName('closedNav')[0].classList.toggle('sidenav');
    document.getElementsByClassName('secondNav')[0].classList.toggle('collapseNav');
    document.getElementsByClassName('moveRt')[0].classList.toggle('collapseNav');
}

function moveRight() {
    document.getElementsByClassName('moveRt')[0].classList.remove('collapseNav');
    document.getElementsByClassName('secondNav')[0].classList.remove('collapseNav');
    document.getElementsByClassName('closedNav')[0].classList.remove('sidenav');
}

export {toggleMenu, moveRight}