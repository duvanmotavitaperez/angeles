window.onload = () => {
    const $form = document.getElementById('formdata')
    const $button = document.getElementById('button')
    const $eye = document.getElementById('showText')
    const $textArea = document.querySelector('textarea')
    const $passArea = document.querySelector('.input-item.password')
    const $buttonSend = document.querySelector('.button-send')
    
    $eye.addEventListener('click', () => {
        $eye.classList.toggle('show-text')
    })
    $buttonSend.addEventListener('click', () => {
        form = new FormData($form)
        const username = form.get('username')
        const pass = form.get('userpass')
        
    })
    $form.addEventListener('submit', (event) => {
        event.preventDefault()
    })
}
//This is a test