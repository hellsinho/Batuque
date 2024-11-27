<script>
import { loginUser } from '../../services/authService';

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '' // Para exibir mensagens de erro na interface
    };
  },
  methods: {
    async login() {
      try {
        const result = await loginUser(this.email, this.password);
        console.log('Login bem-sucedido:', result);
        this.$router.push('/perfil');
      } catch (error) {
        console.error('Erro no registro:', error); 
        this.errorMessage = error.response ? error.response.data.error : 'Credências inválidas! Tente novamente.';
      }
    }
  }
};
</script>

<template>
  <div class="login-card">
    <div class="logo">
      <router-link to="/"><img src="../../../public/img/logo.svg" alt="logo"></router-link>
    </div>
    <form @submit.prevent="login">
      <h2>Login</h2>
      <div class="form-group">
        <label for="login-email">Email</label>
        <input type="email" id="login-email" placeholder="Digite seu e-mail" v-model="email" required>
        <label for="login-senha">Senha</label>
        <input type="password" id="login-senha" placeholder="Digite sua senha" v-model="password" required>
        <div class="remember-account">
          <div class="login-remember">
            <input class="checkbox" type="checkbox" id="checkbox-remember">
            <label for="checkbox-remember">Lembrar-me</label>
          </div>
          <div class="forget-password">
            <a href="#">Esqueci minha senha</a>
          </div>
        </div>

        <div v-if="errorMessage" class="error-message"> 
          {{ errorMessage }} 
        </div>

        <div class="btns-login-form">
          <button type="submit" class="btn">Logar</button>
          <router-link to="/register" class="btn btn2">Registrar-se</router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<style>

.login-card {
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: auto;
    align-items: center;
    justify-content: center;
    background: rgb(0,0,0);
    background: linear-gradient(333deg, rgba(0,0,0,1) 35%, rgba(8,27,79,1) 100%);
    
}

.logo img {
    width: 100px;
    margin-bottom: 2rem;
}

.login-card form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5px );
    -webkit-backdrop-filter: blur( 5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    max-width: 400px;
    padding: 2rem;
}

.login-card h2 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--h1-font);
    text-align: center;
}

.login-remember{
    display: flex;
    align-items: center;
    width: 100%;
}

.checkbox{
    max-width: 2em;
    margin: 0 0.001rem 0 0 ;
    box-shadow: none;
}

.remember-account{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 0 1rem 0;
    font-size: 0.8rem;
    font-weight: 300;
}

.forget-password{
    width: 100%;
    text-align: right;
}

.forget-password a{
    color: #fff;
}

.btns-login-form{
    display: flex;
}


</style>