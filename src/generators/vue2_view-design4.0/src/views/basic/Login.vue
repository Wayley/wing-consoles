<template>
  <div class="login-page">
    login-page
    <p>User Locale: {{ locale }}</p>
    <p>User Channel Model Id: {{ channelModelId }}</p>

    <Button @click="updateLocale('en_US')">Set Locale As `en_US`</Button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Login',
  computed: mapState({
    locale: (state) => state.user.locale,
    channelModelId: (state) => state.app.channel.channelModelId,
  }),
  methods: mapActions('user', ['updateLocale']),
};
</script>

<style lang="less"></style>
