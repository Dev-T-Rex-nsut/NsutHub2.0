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

function flipCard(id, fid ,wch){
    console.log(id, fid)
    if(wch){
        document.getElementById(id).style.display = "none";
        document.getElementById(fid).style.display = "block";
    } else{
        document.getElementById(id).style.display = "block";
        document.getElementById(fid).style.display = "none";
    }
}
function main(classname) {
    // var x = document.getElementsByClassName(classname)
    var y = document.getElementsByClassName("mainimage")

    for (var i = 0; i < y.length; i++) {
        y[i].style.display="none";
    }

    //x[0].style.display="block";
}
function info(classname,a) {
    // var x = document.getElementsByClassName(classname);
    var y = document.getElementsByClassName("box");
    var b = document.getElementsByClassName("but");
    // var z = document.getElementsByClassName(a);

    for (var i = 0; i < y.length; i++) {
        y[i].style.display="none";
        b[i].style.boxShadow="0.4vw 0.8vw #888888";
    }

    // x[0].style.display="block";
    // z[0].style.boxShadow="none";
}

export {toggleMenu, moveRight, flipCard, info, main}