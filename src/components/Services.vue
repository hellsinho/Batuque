<template>
  <section class="services" id="services">
    <div class="center-text" data-aos="fade-down">
      <h2>DEMONSTRAÇÃO</h2>
    </div>
    <div class="services-content" data-aos="zoom-in-up">
      <div class="box">
        <iframe width="600" height="400" src="https://www.youtube.com/embed/9Pk4ppoRDX8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; loop" allowfullscreen></iframe>
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
.box iframe{
  width: 100%;
  height: 38rem;
  border-radius: 28px;
  border: 1px solid transparent;

}
.center-text {
  text-align: center;

}

.center-text h2 {
  font-weight: bold;
  font-size: var(--h2-font);
}

.center-text .invite-text {
  margin-top: 20px;
}

.center-text .invite-text span {
  font-size: var(--p-font);
  color: var(--other-color);
}
</style>
