var button = document.createElement('button'), cnt = 0
button.id = 'btn'
button.innerHTML = cnt
button.className = 'button'
button.onclick = function() {
    button.innerHTML++
}
document.body.appendChild(button)