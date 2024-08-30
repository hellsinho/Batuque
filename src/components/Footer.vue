<template>
  <div class="footer">
    <div class="copyright">
      <p>&copy; 2024 Batuque. Todos os direitos reservados</p>
    </div>
    <a href="#home" class="scroll-top">
      <i class="ri-arrow-up-s-fill"></i>
    </a>
  </div>
</template>

<script>
export default {
  mounted() {
    // Adicione lógica JavaScript se necessário
  }
};
</script>

<style scoped>
.footer {
  background: var(--bg-color);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
}

.footer .copyright p {
  font-size: 0.875rem;
  color: var(--other-color);
  text-align: center;
  margin: 0;
}

.scroll-top {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: var(--main-color);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--text-color);
  font-size: 24px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease, transform 0.3s ease;
}

.scroll-top:hover {
  background: var(--other-color);
  transform: scale(1.1);
}

.scroll-top i {
  margin: 0;
}
</style>
