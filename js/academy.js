'use strict'

// const edit= document.querySelector('.profile__edit')
// const editIcon= document.querySelector('.icon')
// const gifIcon= document.querySelector('.gif-icon')

let navbarItems= document.querySelectorAll('.navbar__item')
let homeworkItems= document.querySelectorAll('.homework-item')


navbarItems.forEach((item,index)=>{
    item.addEventListener('click', ()=>{
        navbarItems.forEach(interItem=>{
            interItem.classList.remove('navbar-active')
        })
        navbarItems[index].classList.add('navbar-active')
    })
})

homeworkItems.forEach((item,index)=>{
    item.addEventListener('click', ()=>{
        homeworkItems.forEach(interItem=>{
            interItem.classList.remove('homework-active')
        })
        homeworkItems[index].classList.add('homework-active')
    })
})
