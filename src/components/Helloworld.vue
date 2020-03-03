<template lang="pug">
  div HelloHelloWorld {{demo}}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Gender } from '@/enums/index'
@Component({
  name: 'HelloWorld'
})
export default class HelloWorld extends Vue {
  demo = Gender.MALE
}
</script>
