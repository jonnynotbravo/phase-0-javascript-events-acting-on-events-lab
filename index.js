const dodger = document.getElementById('dodger');

dodger.style.backgroundColor = '#FF69B4';

dodger.style.bottom = '0px';

const movingLeft = function (event) {
    if (event.key === "ArrowLeft") {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);
  
      if(left > 0){
      dodger.style.left = `${left - 1}px`;
      }
    }
}

const movingRight = function (event) {

    if(event.key === "ArrowRight") {

        const leftNumbers = dodger.style.left.replace("px", "");
        const left = parseInt(leftNumbers, 10);
    }

        dodger.style.left = `${left + 1}px`;
}



document.addEventListener("keydown", movingLeft);
document.addEventListener('keydown', movingRight);


