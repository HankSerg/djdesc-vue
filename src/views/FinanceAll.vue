<template>
  <div class="finance">
    <h1>Страница со всеми расходами</h1>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  methods: mapActions('finance', [
    'GET_FINANCE',
  ]),
  mounted() {
    this.GET_FINANCE();
  },
};
</script>
