(() => {
  const canvas = document.getElementById("stars");
  const tints = ["#ffffff", "#ffffff", "#ffffff", "#ffe2b8", "#d4e2ff"];

  function paint() {
    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);

    const count = Math.round((w * h) / 3200);
    for (let i = 0; i < count; i++) {
      ctx.globalAlpha = 0.15 + Math.random() * 0.65;
      ctx.fillStyle = tints[Math.floor(Math.random() * tints.length)];
      ctx.beginPath();
      ctx.arc(Math.random() * w, Math.random() * h, 0.25 + Math.random() ** 4 * 1.4, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  window.addEventListener("resize", paint);
  paint();
})();
