<template>
  <form id="login" @submit.prevent="submit">
    <input type="text" name="username" placeholder="username" v-model="username">
    <input type="password" name="password" placeholder="password" v-model="password">
    <input type="submit" value="Залогиниться" />
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
    async submit() {
      await this.LOGIN(this);
      this.$router.push('/');
    },
    ...mapActions('auth', [
      'LOGIN',
    ]),
  },
};
</script>

<style lang="css" scoped>
</style>
