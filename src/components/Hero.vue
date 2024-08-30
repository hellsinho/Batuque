<template>
  <section class="hero" id="home">
    <div class="main-content" data-aos="fade-in">
      <h1><span class="highlight">BATUQUE</span></h1>
      <h4>A sua bateria de realidade aumentada para batucar em qualquer lugar</h4>
      <p>Desenvolva suas habilidades rítmicas de forma lúdica através de módulos de diferentes níveis, tudo com apenas uma câmera e em um ambiente confortável. E o melhor: poderá levar sua bateria para qualquer lugar com muito mais facilidade.</p>
    </div>
    <div class="social">
      <a href="#"><i class="ri-facebook-fill"></i></a>
      <a href="#"><i class="ri-instagram-fill"></i></a>
      <a href="#"><i class="ri-twitter-x-fill"></i></a>
      <a href="#"><i class="ri-youtube-fill"></i></a>
    </div>
    <div class="main-btn">
      <a href="#" class="btn">Conheça a Batuque</a>
      <a href="#" class="btn btn2">Saiba mais</a>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    // Adicione lógica JavaScript se necessário
  }
};
</script>

<style scoped>
.hero {
  margin: 4rem 0 0 0;
  height: 100vh;
  width: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 2rem;
  box-sizing: border-box;
  position: relative;
}

.main-content {
  position: relative;
  z-index: 1;
}

.main-content h1 {
  font-size: var(--h1-font);
  font-weight: 700;
  margin: 20px 0;
  color: var(--main-color);
}

.main-content h1 .highlight {
  font-weight: 700;
}

.main-content h4 {
  font-size: 1.6rem;
  font-weight: 700;
  margin: 10px 0;
  width: 620px;
}

.main-content p {
  font-size: var(--p-font);
  font-weight: 400;
  width: 620px;
  max-width: 100%;
  color: var(--other-color);
  line-height: 1.6;
  margin-bottom: 15px;
}

.social {
  margin: 40px 0;
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
  margin-right: 17px;
  box-shadow: 0 0 20px transparent;
  cursor: pointer;
  transition: all 0.5s ease;
}

.social a:hover {
  transform: scale(1.1);
  box-shadow: 0 0 20px var(--main-color);
}

.main-btn {
  margin-top: 40px;
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
}

.btn:hover {
  background: transparent;
  color: var(--main-color);
  box-shadow: 0 0 20px var(--main-color);
}

.btn2 {
  background: transparent;
  color: var(--main-color);
  border: 2px solid var(--main-color);
  margin-left: 15px;
  transition: all 0.5s ease;
}

.btn2:hover {
  background: var(--main-color);
  color: var(--bg-color);
}

/* Media Queries para Responsividade */
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
    height: auto; /* Permite que a altura se ajuste automaticamente */
    margin-top: 80px; /* Garante que o conteúdo não fique escondido atrás do cabeçalho */
  }

  .main-content {
    margin-top: 20px; /* Espaço para garantir que o texto não fique em cima do cabeçalho */
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
