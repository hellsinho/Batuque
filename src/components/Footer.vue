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
  padding: 22px;
  background: var(--bg-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.footer {
  padding: 18px 8%;
}

.copyright p {
  font-size: 15px;
  font-weight: 400;
  color: var(--other-color);
}

.scroll-top i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--main-color);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  color: var(--text-color);
  font-size: 27px;
}</style>
