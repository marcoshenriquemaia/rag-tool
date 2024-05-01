import { drag } from "./modules/drag"

const colorArray = [
  "#ff0000", // Red
  "#00ff00", // Green
  "#ffff00", // Yellow
  "#ff00ff", // Magenta
  "#00ffff", // Cyan
  "#800080", // Purple
  "#008000", // Dark Green
  "#000080", // Navy
  "#ffa500"  // Orange
];

export const run = () => {
  const $buttonAddAlly = document.querySelector('.button-add-ally')
  const $buttonAddEnemy = document.querySelector('.button-add-enemy')
  const $battlefield = document.querySelector('.battlefield')

  $buttonAddAlly.addEventListener('click', () => {
    const ptsQuantity = document.querySelectorAll('.pt')?.length + 1
    const id = Math.random() * 10
    const newEl = document.createElement('div')
    // newEl.style.backgroundColor = colorArray[ptsQuantity % 10]
    newEl.classList.add('pt')
    newEl.classList.add('pt-al')
    newEl.textContent = ptsQuantity
    newEl.id = id

    drag(newEl)
    
    $battlefield.appendChild(newEl)
  })
  
  $buttonAddEnemy.addEventListener('click', () => {
    const ptsQuantity = document.querySelectorAll('.pt')?.length + 1
    const id = Math.random() * 10
    const newEl = document.createElement('div')
    // newEl.style.backgroundColor = colorArray[ptsQuantity % 10]
    newEl.classList.add('pt')
    newEl.classList.add('pt-en')
    newEl.textContent = ptsQuantity
    newEl.id = id
    
    drag(newEl)

    $battlefield.appendChild(newEl)
  })
} 