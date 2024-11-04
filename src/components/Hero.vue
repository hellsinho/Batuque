<template>
  <section class="hero" id="home">
    <div class="main-content" data-aos="fade-up" data-aos-duration="1000">
      <h1 data-aos="zoom-in" data-aos-delay="100" class="title">
        <span class="highlight">BATUQUE</span>
      </h1>
      <h4 data-aos="fade-up" data-aos-delay="200">A sua bateria de realidade aumentada para batucar em qualquer lugar</h4>
      <p data-aos="fade-up" data-aos-delay="300">Desenvolva suas habilidades rítmicas de forma lúdica através de módulos de diferentes níveis, tudo com apenas uma câmera e em um ambiente confortável. E o melhor: poderá levar sua bateria para qualquer lugar com muito mais facilidade.</p>
    </div>
    <div class="social" data-aos="fade-up" data-aos-delay="400">
      <a href="#"><i class="ri-facebook-fill"></i></a>
      <a href="#"><i class="ri-instagram-fill"></i></a>
      <a href="#"><i class="ri-twitter-x-fill"></i></a>
      <a href="#"><i class="ri-youtube-fill"></i></a>
    </div>
    <div class="main-btn" data-aos="fade-up" data-aos-delay="200">
      <a href="/login" class="btn">Baixar Batuque</a>
      <a href="#about" class="btn btn2">Saiba mais</a>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    // Adiciona animação da linha ao título
    const highlight = document.querySelector('.highlight');
    if (highlight) {
      highlight.addEventListener('mouseover', () => {
        highlight.classList.add('line-animate');
      });
      highlight.addEventListener('mouseout', () => {
        highlight.classList.remove('line-animate');
      });
    }

    this.flashBackground();
  },
  methods: {
    flashBackground() {
      const hero = document.querySelector('.hero');
      if (hero) {
        hero.classList.add('flash-background');
      }
    }
  }
};
</script>

<style scoped>
.hero {
  margin: 3.5rem 0 0 0;
  height: 100vh;
  width: 100%;
  background: var(--bg-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 2rem;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.hero .flash-background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 1);
  animation: backgroundFlash 0.3s forwards;
  z-index: 1;
}

.main-content {
  position: relative;
  z-index: 2;
}

.main-content h1 {
  font-size: var(--h1-font);
  font-weight: 700;
  margin: 20px 0;
  color: var(--main-color);
  position: relative;
  opacity: 0;
  transform: translateY(-30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.main-content h1[data-aos="zoom-in"] {
  opacity: 1;
  transform: translateY(0);
}

.main-content h1 .highlight {
  font-weight: 700;
  position: relative;
  display: inline-block;
  animation: text-glow 1s infinite;
}

@keyframes text-glow {
  0% {
    text-shadow: 0 0 2px var(--main-color), 0 0 4px var(--main-color), 0 0 6px var(--main-color);
  }
  50% {
    text-shadow: 0 0 4px var(--main-color), 0 0 8px var(--main-color), 0 0 12px var(--main-color);
  }
  100% {
    text-shadow: 0 0 2px var(--main-color), 0 0 4px var(--main-color), 0 0 6px var(--main-color);
  }
}

.main-content h4 {
  font-size: 1.6rem;
  font-weight: 700;
  margin: 10px 0;
  width: 620px;
  color: var(--text-color);
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.main-content h4[data-aos="fade-up"] {
  opacity: 1;
  transform: translateY(0);
}

.main-content p {
  font-size: var(--p-font);
  font-weight: 400;
  width: 620px;
  max-width: 100%;
  color: var(--other-color);
  line-height: 1.6;
  margin-bottom: 15px;
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.main-content p[data-aos="fade-up"] {
  opacity: 1;
  transform: translateY(0);
}

.social {
  margin: 40px 0;
  display: flex;
  justify-content: center;
}

.social a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  color: var(--main-color);
  border-radius: 50%;
  backdrop-filter: brightness(88%);
  font-size: 20px;
  margin: 0 10px;
  box-shadow: 0 0 20px var(--main-color);
  cursor: pointer;
  transition: all 0.5s ease;
  transform: scale(0.9);
  opacity: 0;
  animation: fadeInUp 0.5s forwards;
}

.social a:nth-child(1) {
  animation-delay: 0.1s;
}
.social a:nth-child(2) {
  animation-delay: 0.2s;
}
.social a:nth-child(3) {
  animation-delay: 0.3s;
}
.social a:nth-child(4) {
  animation-delay: 0.4s;
}

.social a:hover {
  transform: scale(1.1);
  box-shadow: 0 0 20px var(--main-color);
}

.main-btn {
  margin-top: 20px;
}

.btn {
  display: inline-block;
  padding: 11px 26px;
  background: var(--main-color);
  color: var(--bg-color);
  border: 2px solid var(--main-color);
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.5s ease;
  margin: 0 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s forwards;
}

.btn2 {
  background: transparent;
  color: var(--main-color);
  border: 2px solid var(--main-color);
  margin-left: 15px;
  transition: all 0.5s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s forwards;
  animation-delay: 0.1s;
}

.btn:hover {
  background: transparent;
  color: var(--main-color);
  box-shadow: 0 0 20px var(--main-color);
}

.btn2:hover {
  background: var(--main-color);
  color: var(--bg-color);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes backgroundFlash {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
  }
}

.flash-background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 1);
  animation: backgroundFlash 0.3s forwards;
  z-index: 1;
}

@media (max-width: 768px) {
  .hero {
    padding: 0 1rem;
    margin: 1rem 0 0 0;
  }

  .main-content h1 {
    font-size: 3rem;
  }

  .main-content h4 {
    font-size: 1.2rem;
    width: 90%;
  }

  .main-content p {
    font-size: 1.1rem;
    width: 90%;
  }

  .social {
    margin: 20px 0;
  }

  .social a {
    width: 50px;
    height: 50px;
    font-size: 18px;
  }

  .main-btn {
    margin-top: 30px;
  }

  .btn, .btn2 {
    font-size: 0.875rem;
    padding: 8px 16px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 1rem;
    height: auto;
    margin-top: 80px;
  }

  .main-content {
    margin-top: 20px;
  }

  .main-content h1 {
    font-size: 2.5rem;
  }

  .main-content h4 {
    font-size: 1rem;
    width: 100%;
  }

  .main-content p {
    font-size: 0.75rem;
  }

  .social a {
    width: 35px;
    height: 35px;
    font-size: 16px;
    margin-right: 10px;
  }

  .main-btn {
    margin-top: 20px;
  }

  .btn, .btn2 {
    font-size: 0.75rem;
    padding: 6px 12px;
  }
}
</style>
