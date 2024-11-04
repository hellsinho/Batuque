<!-- src/pages/LoginPage.vue -->
<template>
      <LoginForm />
  </template>
  
<script>
  import LoginForm from '../components/forms/LoginForm.vue';

  export default {
    name: 'LoginPage',
    components: {
      LoginForm,
    },
  };
</script>