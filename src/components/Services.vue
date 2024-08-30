<template>
  <section class="services" id="services">
    <div class="center-text" data-aos="fade-down">
      <h2>DEMONSTRAÇÃO</h2>
    </div>
    <div class="services-content" data-aos="zoom-in-up">
      <div class="box">
        <iframe src="https://www.youtube.com/embed/9Pk4ppoRDX8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; loop" allowfullscreen></iframe>
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
.services {
  padding: 2rem 0;
}

.services-content {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.box {
  width: 100%;
  max-width: 800px;
  background: #2d343f;
  border-radius: 28px;
  box-shadow: 0 0 5px var(--main-color);
  transition: all .5s ease;
  overflow: hidden;
}

.box iframe {
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  border-radius: 28px;
  border: none;
}

.center-text {
  text-align: center;
}

.center-text h2 {
  font-weight: bold;
  font-size: var(--h2-font);
}

@media (max-width: 768px) {
  .box iframe {
    height: auto;
  }
}
</style>
