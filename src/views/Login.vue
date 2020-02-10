<template>
  <form id="login" @submit.prevent="submit">
    <input type="text" name="username" value="" placeholder="username"
    v-model="username">
    <input type="password" name="password" value="" placeholder="password"
    v-modle="password">
    <input type="submit" name="" value="Авторизация">
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    submit() {
      return this.LOGIN(this);
    },
    ...mapActions('auth', ['LOGIN']),
  },
};
</script>

<style lang="css" scoped>
</style>
