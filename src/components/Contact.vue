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
        <textarea placeholder="Escreva aqui sua mensagem" required></textarea>
        <input type="submit" value="Enviar mensagem" class="send-btn">
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
.contact {
  background-color: #22282f;
  padding: 2rem;
}

.center-text {
  text-align: center;
}

.center-text h2 {
  font-size: var(--h2-font);
  font-weight: bold;
  color: var(--text-color);
}

.center-text h2 span {
  color: var(--main-color);
}

.center-text .invite-text {
  margin-top: 1rem;
}

.center-text .invite-text span {
  font-size: var(--p-font);
  color: var(--other-color);
}

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

.contact-form form {
  width: 100%;
  max-width: 600px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--other-color);
  border-radius: 8px;
  background: var(--bg-color);
  color: var(--text-color);
  margin-bottom: 1rem;
  box-sizing: border-box;
}

.contact-form textarea {
  resize: vertical;
  min-height: 150px;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: var(--other-color);
}

.contact-form .send-btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: var(--main-color);
  color: var(--bg-color);
  border: 2px solid var(--main-color);
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.5s ease;
  cursor: pointer;
  width: 100%;
  text-align: center;
}

.contact-form .send-btn:hover {
  background: transparent;
  color: var(--main-color);
  box-shadow: 0 0 20px var(--main-color);
}
</style>
