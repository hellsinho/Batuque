<template>
  <header>
    <a href="#" class="logo">
      <img src="/img/logo.svg" alt="batuque-sobre-baquetas-cruzadas" width="100px">
    </a>

    <div class="bx bx-menu" id="menu-icon"></div>

    <ul class="navlist">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">Sobre</a></li>
      <li><a href="#services">Demonstração</a></li>
      <li><a href="#resources">Tecnologias</a></li>
    </ul>

    <div class="top-btnn">
      <a href="#contact" class="h-btn">contate-nos</a>
      <a href="#contact-form" class="h-btn">reportar bugs</a>
    </div>
  </header>
</template>

<script>
export default {
  mounted() {
    const header = document.querySelector("header");

    window.addEventListener ("scroll", function() {
      header.classList.toggle("sticky", window.scrollY > 120);
    });

    let menu = document.querySelector('#menu-icon');
    let navlist = document.querySelector('.navlist');

    menu.onclick = () => {
      menu.classList.toggle('bx-x');
      navlist.classList.toggle('active');
    };

    window.onscroll = () => {
      menu.classList.remove('bx-x');
      navlist.classList.remove('active');
    };
  }
};
</script>

<style scoped>
/* Inclua seu CSS específico para o cabeçalho aqui */
</style>
