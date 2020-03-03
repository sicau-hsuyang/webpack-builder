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
import Demo from '@/components/Demo.vue'
import DemoClass from '@/components/DemoClass.vue'

@Component({
  name: 'App',
  components: {
    HelloWorld,
    LoginView,
    Demo,
    DemoClass
  }
})
export default class App extends Vue {

}

</script>

<style lang="scss">
  #app{
    display: flex
  }
</style>
