const btnEl = document.querySelector('#submit-button')
const inputEl = document.querySelector('#hello')
const ulEl = document.querySelector('#todo-list')


btnEl.addEventListener('click', function(evt) {
    const li = document.createElement('li')
    li.textContent = inputEl.value
    inputEl.value = ""
    ulEl.appendChild(li)
    console.log(ulEl)
})


