function openMenu() {
    document.getElementById('side-menu').style.width = '60%';
    document.getElementById('side-menu').style.zIndex="1";
    document.getElementById('menu').style.display = 'none';
}

function closeMenu() {
    document.getElementById('side-menu').style.width = "0";
    document.getElementById('menu').style.display = 'block';
    
}

