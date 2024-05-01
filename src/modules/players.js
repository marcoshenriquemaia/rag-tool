export class Players {
  setPlayers(data) {
    localStorage.setItem("players", JSON.stringify(data))
  }
  
  getPlayers(){
    return localStorage.getItem("players") ? JSON.parse(localStorage.getItem("players")) : {}
  }
}