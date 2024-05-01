export function createPlayerList(playerObj) {
  document.querySelector('.player-list')?.remove()
  const container = document.createElement('ul')
  container.classList.add('player-list')
  
  for (const key in playerObj) {
    const players = playerObj[key]

    if (key.includes('enemy') || players.every(player => !player)) continue

    const wrapper = document.createElement('div')
    wrapper.classList.add('player-list-wrapper')
    wrapper.classList.add(`wrapper-${key}`)

    const title = document.createElement('h2')
    title.textContent = key.replace('ally', '').replace('enemy', '')
    title.classList.add('players-title')
    
    const playerList = document.createElement('ul')
    playerList.classList.add('player-list-box')

    players.forEach(player => {
      const playerEl = document.createElement('li')
      playerEl.textContent = player
  
      playerList.appendChild(playerEl)
    })

    wrapper.appendChild(title)
    wrapper.appendChild(playerList)
    container.appendChild(wrapper)
  }

  document.body.appendChild(container)
}