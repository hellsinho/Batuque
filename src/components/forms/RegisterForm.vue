<template>
    <div class="login-card">
        <div class="logo">
            <router-link to="/"><img src="../../../public/img/logo.svg" alt="logo"></router-link>
        </div>
        <form @submit.prevent="register">
            <h2>Registrar-se</h2>
            <div class="form-group">
                <label for="login-email">Email</label>
                <input type="email" id="login-email" placeholder="Digite seu e-mail" v-model="email" required>
                <label for="login-senha">Senha</label>
                <input type="password" id="login-senha" placeholder="Digite sua senha" v-model="password" required>
                <label for="login-confirmar-senha">Confirmar senha</label>
                <input type="password" id="login-confirmar-senha" placeholder="Digite a senha novamente" v-model="confirmPassword" required>
                <div class="remember-account">
                    <div class="login-remember">
                      <input class="checkbox" type="checkbox" id="checkbox-remember" v-model="agreeTerms"> <label for="checkbox-remember">Concordo com os termos de uso.</label>
                    </div>
                </div>
                
                <div v-if="errorMessage" class="error-message"> 
                  {{ errorMessage }} 
                </div>

                <div class="btns-login-form">
                    <button type="submit" class="btn">Registrar</button>
                    <router-link to="/login" class="btn btn2">Logar-se</router-link>
                </div>
            </div>
        </form>
    </div>
</template>


<script>
import { registerUser } from '../../services/authService';

export default {
  name: 'registrarForm',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false,
      errorMessage: ''
    };
  },
  methods: {
    async register() {
      if (!this.agreeTerms) {
        this.errorMessage = 'Você deve concordar com os termos de uso!';
        return; 
      }

      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'As senhas não correspondem!';
        return;
      }

      try {
        const result = await registerUser(this.email, this.password);
        console.log('Registro bem-sucedido:', result);
        this.$router.push('/login');
      } catch (error) {
        console.error('Erro no registro:', error); 
        this.errorMessage = error.response ? error.response.data.error : 'E-mail já cadastrado!';
      }
    }
  }
};
</script>

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

.btns-login-form{
    display: flex;
    
}

.btn {
  padding: 11px 26px;
  background: var(--main-color);
  color: var(--bg-color);
  border: 2px solid var(--main-color);
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.5s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s forwards;
  cursor: pointer;
}

.btn2 {
  background: transparent;
  color: var(--main-color);
  border: 2px solid var(--main-color);
  margin-left: 15px;
  transition: all 0.5s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s forwards;
  animation-delay: 0.1s;
  cursor: pointer;
}

.btn:hover {
  background: transparent;
  color: var(--main-color);
  box-shadow: 0 0 20px var(--main-color);
}

.btn2:hover {
  background: var(--main-color);
  color: var(--bg-color);
}

.error-message { color: red; margin-bottom: 10px; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>