  function createLoveBatch() {
    const count = 15;
    for (let i = 0; i < count; i++) {
      const love = document.createElement('div');
      love.classList.add('love');
      love.innerText = 'love';
      love.style.left = Math.random() * window.innerWidth + 'px';
      love.style.animationDuration = (Math.random() * 2 + 2) + 's';
      document.body.appendChild(love);

      setTimeout(() => {
        love.remove();
      }, 4000);
    }
  }

  setInterval(createLoveBatch, 30); 

  window.addEventListener('click', (e) => {
    const explosion = document.createElement('div');
    explosion.classList.add('explosion');
    explosion.style.left = `${e.clientX}px`;
    explosion.style.top = `${e.clientY}px`;
    document.body.appendChild(explosion);
    setTimeout(() => explosion.remove(), 1000);

    const text = document.createElement('div');
    text.classList.add('love-you');
    text.innerText = 'Love You 💖';
    text.style.left = `${e.clientX - 50}px`;
    text.style.top = `${e.clientY - 20}px`;
    document.body.appendChild(text);
    setTimeout(() => text.remove(), 2000);
  });