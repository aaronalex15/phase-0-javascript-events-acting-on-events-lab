function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keyup", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

const dodger = document.getElementById('dodger');

function moveDodgerRight() {
    const containerWidth = window.innerWidth;
    let leftPosition = parseInt(dodger.style.left.replace('px', '')) || 0;
    const maxWidth = containerWidth - dodger.offsetWidth;
    if (leftPosition < maxWidth) {
      dodger.style.left = leftPosition + 1 + 'px';
    }
  }

document.addEventListener('keyup', function(event) {
  if (event.key === 'ArrowRight') {
    moveDodgerRight();
  }
});
