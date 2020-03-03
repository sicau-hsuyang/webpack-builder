<template>
  <div>
    Demo Class Component {{ name }}
    <button @click="test">
      1111
    </button>
  </div>
</template>

<script>
import { Component } from 'vue-property-decorator'

import DemoParent from './DemoParent'

@Component
export default class DemoCom extends DemoParent {
  name = 'yangxu'

  test () {
    this.sayHello()
  }
}
</script>
