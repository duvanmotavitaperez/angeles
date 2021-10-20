window.onload = () => {
    let $form = document.getElementById('formdata')
    let $button = document.getElementById('button')
    let $textArea = document.querySelector('textarea')
    $button.addEventListener('click', () => {
        console.log($textArea.value)
    })
    $form.addEventListener('submit', (event) => {
        event.preventDefault()
    })
}