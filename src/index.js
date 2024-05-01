import { drag } from "./modules/drag"

const colorArray = [
  "#ff0000", // Red
  "#00ff00", // Green
  "#0000ff", // Blue
  "#ffff00", // Yellow
  "#ff00ff", // Magenta
  "#00ffff", // Cyan
  "#800080", // Purple
  "#008000", // Dark Green
  "#000080", // Navy
  "#ffa500"  // Orange
];

export const run = () => {
  const $buttonAdd = document.querySelector('.button-add')
  const $battlefield = document.querySelector('.battlefield')

  $buttonAdd.addEventListener('click', () => {
    const ptsQuantity = document.querySelectorAll('.pt')?.length + 1
    const id = Math.random() * 10
    const newEl = document.createElement('div')
    newEl.style.backgroundColor = colorArray[ptsQuantity % 10]
    newEl.classList.add('pt')
    newEl.textContent = ptsQuantity
    newEl.id = id

    drag(newEl, console.log)
    
    $battlefield.appendChild(newEl)
  })
} 