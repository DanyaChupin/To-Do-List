const input = document.querySelector('.input__questions')
const btn = document.querySelector('.input__submit')
const result = document.querySelector('.questions__title')

//add event

btn.addEventListener('click', (e) => {
    e.preventDefault()
    if(input.value === '') {return}
    createDeleteElements(input.value)
    input.value = ''
})


function createDeleteElements(value) {
    const time = new Date().toString().slice(0,15)
    const task = document.createElement('div')
    const deleteBtn = document.createElement('img')
    deleteBtn.classList.add('basket')
    deleteBtn.src = '/img/basket.png'
    task.classList.add ('questions__item')
    task.innerHTML =  `
      <div>
         <p class="questions__text">
            ${time}
         </p>
         <p class="questions__importance">
             ${value}
         </p>
         </div>
     `
    task.append(deleteBtn)
    result.append(task)

    deleteBtn.addEventListener('click', e => {
        result.removeChild(task)
    })
}

