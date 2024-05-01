import { playersInstance } from ".."
import { createPlayerList } from "./createPlayerList"

export function modal(nameList, indexType, onChange) {
  const container = document.createElement('div')
  container.classList.add('modal-container')

  const box = document.createElement('form')
  box.classList.add('modal-box')

  const button = document.createElement('button')
  button.classList.add('button-player-list')
  button.type = 'submit'

  nameList.forEach((name, index) => {
    const input = document.createElement('input')
    input.classList.add('input')
    input.classList.add('input-modal')
    input.value = name

    input.addEventListener('input', () => {
      onChange(input.value, index)
    })

    box.appendChild(input)
  })

  container.addEventListener('click', (e) => {
    if (!e.target.classList.contains('modal-container')) return

    createPlayerList(playersInstance.getPlayers())

    container.remove()
  })
  
  box.addEventListener('submit', (e) => {
    e.preventDefault()
    
    createPlayerList(playersInstance.getPlayers())

    container.remove()
  })

  box.appendChild(button)
  container.appendChild(box)

  document.body.appendChild(container)

  document.querySelectorAll('.input-modal')[0].focus()
}