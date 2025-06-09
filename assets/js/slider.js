const images = [
    { src: 'assets/img/slider img/tc100.png', hoverSrc: ' assets/img/slider img/bel2.png', link: 'https://example.com/link1' },
    { src: 'assets/img/slider img/gsb.png', hoverSrc: '   assets/img/photo2-hover.jpg', link: 'https://example.com/link2' },
    { src: 'assets/img/slider img/image.png', hoverSrc: ' assets/img/photo3-hover.jpg', link: 'https://example.com/link3' },
    { src: 'assets/img/slider img/bel2.png', hoverSrc: '  assets/img/photo4-hover.jpg', link: 'https://example.com/link4' },
    { src: 'assets/img/slider img/tc100.png', hoverSrc: ' assets/img/photo5-hover.jpg', link: 'https://example.com/link5' }
  ];
  const track = document.getElementById('track');

  function populate() {
    // append two sets for smooth infinite scroll
    const combined = images.concat(images);
    combined.forEach(item => {
      const wrapper = document.createElement('a');
      wrapper.href = item.link;
      wrapper.target = '_blank';
      wrapper.className = 'marquee-item';

      const img = document.createElement('img');
      img.src = item.src;

      const hoverImg = document.createElement('img');
      hoverImg.src = item.hoverSrc;
      hoverImg.className = 'hover-img';

      wrapper.appendChild(img);
      wrapper.appendChild(hoverImg);

      track.appendChild(wrapper);
    });
  }

  function pauseAnimation() {
    track.style.animationPlayState = 'paused';
  }

  function resumeAnimation() {
    track.style.animationPlayState = 'running';
  }

  populate();