<template>
  <div>
    <HelloWorld />
    <LoginView />
    <Demo />
    <DemoClass />
    <button @click="handleExport">
      导出
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import LoginView from '@/views/Login.vue'

@Component({
  name: 'App',
  components: {
    HelloWorld,
    LoginView
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  display: flex;
}
</style>
