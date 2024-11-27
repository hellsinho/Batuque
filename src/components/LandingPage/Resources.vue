<template>
  <section class="resources" id="resources">
    <div class="center-text" data-aos="fade-down">
      <h2>Tecnologias <span>utilizadas</span></h2>
    </div>
    <div class="services-content" data-aos="zoom-in-up">
      <div class="box-services">
        <div class="tecnologia">
          <img src="/img/visao_computacional.jpg" alt="Visão Computacional">
          <h3>Visão Computacional</h3>
          <p>Visão computacional é uma área da inteligência artificial que capacita computadores a entenderem o mundo visual por meio de algoritmos e modelos, permitindo o processamento e análise de imagens e vídeos para identificar padrões e objetos.</p>
        </div>
        <a href="#">
          Saiba mais
          <i class="ri-arrow-right-line"></i>
        </a>
      </div>
      <div class="box-services">
        <div class="tecnologia">
          <img src="/img/realidade_aumentada.jpg" alt="Realidade Aumentada">
          <h3>Realidade Aumentada</h3>
          <p>A realidade aumentada (RA) mescla o mundo físico com elementos virtuais, gerando uma experiência imersiva. Utilizando dispositivos como smartphones, a RA superpõe informações digitais ao ambiente real.</p>
        </div>
        <a href="#">
          Saiba mais
          <i class="ri-arrow-right-line"></i>
        </a>
      </div>
      <div class="box-services">
        <div class="tecnologia">
          <img src="/img/opencv_logo.png" alt="OpenCV">
          <h3>OpenCV</h3>
          <p>O OpenCV é uma biblioteca de código aberto para visão computacional, com algoritmos e ferramentas para processamento de imagem e vídeo. Ele simplifica o desenvolvimento de aplicações nesta área, oferecendo funcionalidades desde detecção de bordas até reconhecimento de objetos.</p>
        </div>
        <a href="#">
          Saiba mais
          <i class="ri-arrow-right-line"></i>
        </a>
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
template{
  background-color: var(--second-bg-color);

}

.resources {
  padding: 2rem 0;
  margin-inline: 4rem;
}

.center-text {
  text-align: center;
}

.center-text h2 {
  font-size: var(--h2-font);
  font-weight: bold;
}

.center-text h2 span {
  color: var(--main-color);
  font-size: var(--h2-font);
  font-weight: bold;
}

.services-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.box-services {
  background: #2d343f;
  border-radius: 28px;
  border: 1px solid transparent;
  box-shadow: 0 0 5px var(--main-color);
  transition: all .5s ease;
  cursor: pointer;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.box-services img {
  width: 100%;
  height: auto;
  max-width: 200px;
  border-radius: 28px;
  box-shadow: 0 0 5px var(--main-color);
  margin-bottom: 1rem;
}

.box-services h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.box-services p {
  font-size: var(--p-font);
  font-weight: 400;
  color: var(--other-color);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.box-services a {
  display: inline-flex;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-color);
  border-bottom: 2px solid #5d6c83;
  transition: all .5s ease;
}

.box-services i {
  vertical-align: middle;
  font-size: 1.25rem;
  color: var(--main-color);
  margin-left: 0.5rem;
}

.box-services a:hover {
  border-bottom: 2px solid var(--main-color);
}

.box-services:hover {
  border: 1px solid var(--main-color);
  transform: translateY(-5px) scale(1.03);
}
</style>
