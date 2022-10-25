var telas = [document.getElementById('index1'), document.getElementById('index2'), document.getElementById('index3')]

function changeLayout(id) {
    document.getElementById(id).style.display = 'flex';
    telas.forEach(element => {if (element != document.getElementById(id)){element.style.display = 'none';}});}

changeLayout('index1')