document.addEventListener('DOMContentLoaded', () => {
    const car = document.createElement('div');
    car.classList.add('car');
    document.body.appendChild(car);
  
    let posX = 50;
    let posY = 50;
    const speed = 10;
  
    document.addEventListener('keydown', (e) => {
      if (window.innerWidth < 600) return;
  
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          posY -= speed;
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          posY += speed;
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          posX -= speed;
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          posX += speed;
          break;
      }
  
      car.style.top = `${posY}px`;
      car.style.left = `${posX}px`;
    });
  });
  