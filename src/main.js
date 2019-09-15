const log = console.log;

document.addEventListener("DOMContentLoaded", function () {
    let div = document.createElement('div');
    div.style.width = `200px`;
    div.style.height = `200px`;
    div.style.backgroundColor = `red`;
    document.body.appendChild(div);

    log(12);
});


