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
.center-text {
  text-align: center;
}

.center-text h2 {
  font-size: var(--h2-font);
  font-weight: bold;
}

.center-text .invite-text {
  margin-top: 20px;
}

.center-text .invite-text span {
  font-size: var(--p-font);
  color: var(--other-color);
}

.resources{
  background-color: var(--second-bg-color);
}

.services-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  align-items: stretch;
  gap: 2.3rem;
  margin-top: 4.2rem;
}

.box {
  background: #2d343f;
  border-radius: 28px;
  border: 1px solid transparent;
  box-shadow: 0 0 5px var(--main-color);
  transition: all .5s ease;
  cursor: pointer;
}

.box-services{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  padding: 80px 40px 66px;
  background: #2d343f;
  border-radius: 28px;
  border: 1px solid transparent;
  box-shadow: 0 0 5px var(--main-color);
  transition: all .5s ease;
  cursor: pointer;
}

.box-services img {
  margin-bottom: 20px;
  height: 200px;
  width: 200px;
  border-radius: 28px;
  border: 1px solid transparent;
  box-shadow: 0 0 5px var(--main-color);
}

.box-services h3 {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
}

.box-services p {
  font-size: var(--p-font);
  font-weight: 400;
  color: var(--other-color);
  line-height: 30px;
  margin-bottom: 20px;
}

.box-services a {
  display: inline-block;
  font-size: 22px;
  line-height: 1.273em;
  font-weight: 700;
  padding: 7px 0;
  color: var(--text-color);
  border-bottom: 2px solid #5d6c83;
  transition: all .5s ease;
}

.box-services i {
  vertical-align: middle;
  font-size: 25px;
  color: var(--main-color);
  margin-left: 5px;
}

.box-services a:hover {
  border-bottom: 2px solid var(--main-color);
}

.box-services:hover {
  border: 1px solid var(--main-color);
  transform: translateY(-5px) scale(1.03);
}

.box iframe{
  width: 100%;
  height: 38rem;
  border-radius: 28px;
  border: 1px solid transparent;

}
</style>
