<template>
  <section class="contact" id="contact">
    <div class="center-text" data-aos="fade-down">
      <h2>Vamos entrar em <span>contato?</span></h2>
      <div class="invite-text">
        <span>Fique à vontade para deixar seu feedback sobre nosso produto!</span>
      </div>
    </div>

    <div class="contact-form" data-aos="zoom-in-up">
      <form action="">
        <input type="text" placeholder="Seu nome" required>
        <input type="email" placeholder="Endereço de e-mail" required>
        <textarea name="" id="" cols="30" rows="10" placeholder="Escreva aqui sua mensagem" required></textarea>
        <input type="submit" name="" value="Enviar mensagem" class="send-btn">
      </form>
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
@import "src/assets/main.css";
.contact {
  background-color: #22282f;
  padding: 60px 0;
}
</style>
