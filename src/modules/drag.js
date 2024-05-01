export function drag(element, callback) {
  if (!element) {
      console.error("Element not found.");
      return;
  }

  let initialX, initialY, offsetX, offsetY;

  function handleDragStart(event) {
      initialX = event.clientX;
      initialY = event.clientY;
      offsetX = initialX - element.getBoundingClientRect().left;
      offsetY = initialY - element.getBoundingClientRect().top;

      document.addEventListener("mousemove", handleDragMove);
      document.addEventListener("mouseup", handleDragEnd);
  }

  function handleDragMove(event) {
      const newX = event.clientX - offsetX;
      const newY = event.clientY - offsetY;

      element.style.left = newX + "px";
      element.style.top = newY + "px";

      const position = { x: newX, y: newY };
      callback(position);
  }

  function handleDragEnd() {
      document.removeEventListener("mousemove", handleDragMove);
      document.removeEventListener("mouseup", handleDragEnd);
  }

  element.addEventListener("mousedown", handleDragStart);

  element.style.position = "absolute";
}