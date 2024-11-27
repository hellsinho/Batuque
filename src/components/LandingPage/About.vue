<template>
  <section class="about" id="about">
    <div class="about-img" data-aos="zoom-in-down">
      <img src="/img/logo.svg" alt="Logo da Batuque">
    </div>
    <div class="about-text" data-aos="zoom-in-up">
      <h2>Sobre a Batuque<br><span>A bateria de realidade aumentada</span></h2>
      <div class="exp-area">
        <p>A Batuque se trata de uma bateria de realidade aumentada com foco na usabilidade e acessibilidade, visando proporcionar a melhor experiência possível para aqueles que desejam aprender a tocar bateria, mas não possuem recursos para adquirir os equipamentos tradicionais.</p>
        <span>
          Nosso grande diferencial está no fato de sermos hardwareless, ou seja, não se faz necessário o uso de sensores ou qualquer outro tipo de aparelho para usufruir da nossa aplicação. Desta forma, você somente precisa de um lugar confortável e a câmera de seu aparelho para batucar conosco.
        </span>
      </div>
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
.about {
  background: var(--second-bg-color);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 1.5rem;
  padding: 60px 8%;
  box-sizing: border-box;
}

.about-img img {
  width: 100%;
  height: auto;
  max-width: 550px;
  object-fit: cover;
  box-shadow: 0 0 20px var(--main-color);
  padding: 20px;
  border-radius: 20px;
}

.about-text h2 {
  font-size: 1.8rem;
  line-height: 1.3;
  font-weight: bold;
}

.about-text h2 span {
  font-size: 3rem;
  color: var(--main-color);
  display: block;
  font-weight: 1000;
  margin-top: 10px;
}

.exp-area {
  margin-top: 20px;
}

.exp-area p {
  color: var(--text-color);
  font-weight: 500;
  font-size: 1.325rem;
  line-height: 1.8;
  margin-bottom: 20px;
}

.exp-area span {
  color: var(--other-color);
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.6;
}

/* Media Queries */
@media (max-width: 768px) {
  .about {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 40px 5%;
  }

  .about-img img {
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
  }

  .about-text h2 {
    font-size: 1.5rem;
    margin: 40px 0 20px;
  }

  .about-text h2 span {
    font-size: 2.5rem;
  }

  .exp-area p {
    font-size: 1.2rem;
  }

  .exp-area span {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .about {
    padding: 30px 3%;
  }

  .about-text h2 {
    font-size: 1.3rem;
    margin: 30px 0 15px;
  }

  .about-text h2 span {
    font-size: 2rem;
  }

  .exp-area p {
    font-size: 1rem;
  }

  .exp-area span {
    font-size: 0.9rem;
  }
}


</style>
