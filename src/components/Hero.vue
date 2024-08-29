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
  height: 100vh;
  width: 100%;
  background: url(../public/img/homem_tocando.png);
  background-position: top right;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}

.main-content h1 {
  font-size: var(--h1-font);
  font-weight: 700; /* Garanta que o texto esteja em negrito */
  margin: 20px 0px 20px;
  line-height: 1.2;
  color: var(--main-color);
}

.main-content h1 .highlight {
  font-weight: 700; /* Negrito específico para o texto */
}

.main-content h4 {
  font-size: 1.6rem;
  font-weight: 700;
  width: 620px;
  margin-bottom: 10px;
}

.main-content p {
  font-size: var(--p-font);
  font-weight: 400;
  width: 620px;
  max-width: 100%;
  color: var(--other-color);
  line-height: 30px;
  margin-bottom: 15px;
}

.social {
  margin-bottom: 40px;
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
  transition: all .5s ease;
}

.social a:hover {
  transform: scale(1.1);
  box-shadow: 0 0 20px var(--main-color);
}

.btn {
  display: inline-block;
  padding: 11px 26px;
  background: var(--main-color);
  color: var(--bg-color);
  border: 2px solid var(--main-color);
  border-radius: 8px;
  font-size: 20px;
  font-weight: 600;
  transition: all .5s ease;
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
  transition: all .5s ease;
}

.btn2:hover {
  background: var(--main-color);
  color: var(--bg-color);
}
</style>
