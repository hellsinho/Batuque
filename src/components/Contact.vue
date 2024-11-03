<template>
  <section class="contact" id="contact">
    <div class="contact-container">
      <div class="center-text" data-aos="fade-down">
        <h2>Vamos entrar em <span class="bold-text">contato</span></h2>
        <div class="invite-text">
          <span>Fique à vontade para deixar seu feedback sobre nosso produto!</span>
        </div>
      </div>

      <div class="contact-form" data-aos="zoom-in-up">
        <form @submit.prevent="submitForm">
          <input type="text" placeholder="Seu nome" required>
          <input type="email" placeholder="Endereço de e-mail" required>
          <textarea placeholder="Escreva aqui sua mensagem" required></textarea>
          <input type="submit" value="Enviar mensagem" class="send-btn">
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    submitForm() {
      // Adicione a lógica para o envio do formulário, se necessário
      console.log("Formulário enviado!");
    }
  }
};
</script>

<style scoped>

textarea{
  resize: none;
}

.contact {
  background-color: var(--second-bg-color);
  padding: 2rem;
}

.contact-container {
  background-color: var(--bg-color);
  border-radius: 80px;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.center-text {
  text-align: center;
  position: relative;
}

.center-text h2 {
  font-size: var(--h2-font);
  font-weight: bold;
  color: var(--text-color);
  margin-bottom: 1rem;
  position: relative;
}

.center-text h2 .bold-text {
  font-weight: bold;
  color: var(--main-color);
}

.center-text h2::after {
  content: "";
  display: block;
  width: 0;
  height: 2px;
  background: var(--main-color);
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  transition: width 0.5s ease;
  max-width: 50%;
}

.center-text h2:hover::after {
  width: 100%;
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
