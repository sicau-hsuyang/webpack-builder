<template lang="pug">
  div HelloHelloWorld {{demo}}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Gender } from '@/enums/index'
import { LoginService } from '../api'
@Component({
  name: 'HelloWorld'
})
export default class HelloWorld extends Vue {
  demo = Gender.MALE

  demo() {
    new LoginService().login().then(res => {})
  }
}
</script>
