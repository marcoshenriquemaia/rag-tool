import { drag } from "./modules/drag"
import baron from '../Owl_Baron.webp'
import goblin from '../goblin.png'
import { createPlayerList } from "./modules/createPlayerList"
import { Players } from "./modules/players"

export const playersInstance = new Players()

export const run = () => {
  const $buttonAddAlly = document.querySelector('.button-add-ally')
  const $buttonAddEnemy = document.querySelector('.button-add-enemy')
  const $buttonAddBoss = document.querySelector('.button-add-boss')
  const $buttonAddGoblin = document.querySelector('.button-add-goblin')
  const $battlefield = document.querySelector('.battlefield')

  $buttonAddAlly.addEventListener('click', () => {
    const ptsQuantity = document.querySelectorAll('.pt-al')?.length + 1
    const id = Math.random() * 10
    const newEl = document.createElement('div')
    newEl.classList.add('pt')
    newEl.classList.add('pt-al')
    newEl.textContent = ptsQuantity
    newEl.id = id

    drag(newEl, "ally")
    
    $battlefield.appendChild(newEl)
  })
  
  $buttonAddEnemy.addEventListener('click', () => {
    const ptsQuantity = document.querySelectorAll('.pt-en')?.length + 1
    const id = Math.random() * 10
    const newEl = document.createElement('div')
    newEl.classList.add('pt')
    newEl.classList.add('pt-en')
    newEl.textContent = ptsQuantity
    newEl.id = id
    
    drag(newEl, "enemy")

    $battlefield.appendChild(newEl)
  })

  $buttonAddBoss.addEventListener('click', () => {
    const ptsQuantity = document.querySelectorAll('.pt-en')?.length + 1
    const id = Math.random() * 10
    const newEl = document.createElement('img')
    newEl.src = `.${baron}`
    newEl.classList.add('boss')
    newEl.textContent = ptsQuantity
    newEl.id = id
  
    drag(newEl)

    $battlefield.appendChild(newEl)
  })

  $buttonAddGoblin.addEventListener('click', () => {
    const ptsQuantity = document.querySelectorAll('.pt-en')?.length + 1
    const id = Math.random() * 10
    const newEl = document.createElement('img')
    newEl.src = `.${goblin}`
    newEl.classList.add('goblin')
    newEl.textContent = ptsQuantity
    newEl.id = id
    
    drag(newEl)

    $battlefield.appendChild(newEl)
  })

  if (!playersInstance.getPlayers()) playersInstance.setPlayers({})

  createPlayerList(playersInstance.getPlayers())
} 