<template>
  <div class="main-layout">
    <div>Sider</div>
    <div>
      <div>Header</div>
      <div>
        Page Content
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
};
</script>

<style lang="less"></style>
