window.onload = () => {
    const $form = document.getElementById('formdata')
    const $eye = document.getElementById('showText')
    const $textArea = document.querySelector('textarea')
    const $buttonSend = document.querySelector('.button-send')
    const $alert = document.querySelector('.alert')
    const $password = document.querySelector('.input-item.password')
    
    $eye.addEventListener('click', () => {
        $eye.classList.toggle('show-text')
    })
    $buttonSend.addEventListener('click', () => {
        const form = new FormData($form)
        const username = form.get('username')
        const pass = form.get('userpass')
        if(username == '' || pass == ''){
            $alert.classList.toggle('hidden')
            $textArea.addEventListener('focus', () => $alert.classList.add('hidden'))
        }
        else{
            fetch(`/main`, {
                method: "POST",
                body: form,
            }).then((response) => {
                console.log(response)
            })
        }
        
    })
    $form.addEventListener('submit', (event) => {
        event.preventDefault()
    })
}
