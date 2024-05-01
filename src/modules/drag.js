import { playersInstance } from "..";
import { createPlayerList } from "./createPlayerList";
import { modal } from "./modal";

export function drag(element, type) {
  if (!element) {
    console.error("Element not found.");
    return;
  }

  const indexType = element.textContent + type;

  let initialX, initialY, offsetX, offsetY;

  function handleDragStart(event) {
    initialX = event.clientX;
    initialY = event.clientY;
    offsetX = initialX - element.getBoundingClientRect().left;
    offsetY = initialY - element.getBoundingClientRect().top;

    document.addEventListener("mousemove", handleDragMove);
    document.addEventListener("mouseup", handleDragEnd);

    createPlayerList(playersInstance.getPlayers());

    document.querySelector(`.wrapper-${indexType}`)?.classList.add("focus");
  }

  function handleDragMove(event) {
    const newX = event.clientX - offsetX;
    const newY = event.clientY - offsetY;

    element.style.left = newX + "px";
    element.style.top = newY + "px";
  }

  function handleDragEnd() {
    document.removeEventListener("mousemove", handleDragMove);
    document.removeEventListener("mouseup", handleDragEnd);
  }

  element.addEventListener("mousedown", handleDragStart);

  type &&
    element.addEventListener("dblclick", () => {
      const currentPlayers = playersInstance.getPlayers()

      console.log('LOG:','currentPlayers', currentPlayers);

      !currentPlayers[indexType] && playersInstance.setPlayers({
        ...playersInstance.getPlayers(),
        [indexType]: ["", "", "", "", ""]
      })

      modal((localStorage.getItem("players") ? JSON.parse(localStorage.getItem("players")) : {})[indexType], indexType, (value, index) => {
        const newPlayers = { ...playersInstance.getPlayers() }
        newPlayers[indexType][index] = value;

        playersInstance.setPlayers(newPlayers)
      });
    });

  element.style.position = "absolute";
}
