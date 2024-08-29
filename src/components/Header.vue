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
      <a href="#contact" class="h-btn">Contate-nos</a>
      <a href="#contact-form" class="h-btn">Reportar Bugs</a>
    </div>
  </header>
</template>

<script>
export default {
  mounted() {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
      header.classList.toggle("sticky", window.scrollY > 120);
    });

    const menu = document.querySelector('#menu-icon');
    const navlist = document.querySelector('.navlist');

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
header {
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15%;
  transition: all 0.5s ease;
  background: var(--bg-color); /* Para visibilidade */
}

.navlist {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
}

.navlist li {
  margin-left: 20px;
}

.navlist a {
  font-size: var(--p-font);
  font-weight: 600;
  color: var(--other-color);
  transition: all 0.5s ease;
  padding: 10px;
}

.navlist a:hover {
  color: var(--main-color);
  text-shadow: 3px 3px 20px var(--main-color), -2px 1px 30px var(--text-color);
}

.logo {
  max-width: 100px;
  height: auto;
  padding: 5px;
}

#menu-icon {
  font-size: 35px;
  cursor: pointer;
  display: none;
}

.top-btnn {
  display: flex;
  align-items: center;
}

.top-btnn .h-btn {
  display: inline-block;
  padding: 10px 20px;
  margin-left: 20px;
  background: transparent;
  color: var(--main-color);
  border: 2px solid var(--main-color);
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.5s ease;
}

.top-btnn .h-btn:hover {
  background: var(--main-color);
  color: var(--bg-color);
  box-shadow: 0 0 20px var(--main-color);
  transform: scale(1.1);
}

header.sticky {
  background: var(--bg-color);
  box-shadow: 0 .1rem 1rem rgb(0, 0, 0, .2);
}
</style>
