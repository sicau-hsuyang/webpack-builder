<template>
  <div>
    <button @click="login">
      Login
    </button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class LoginView extends Vue {}
</script>
