import { VueConstructor } from 'vue'
import Component from './component.vue';

const HelloWorld: any = {
  install(Vue: VueConstructor, options: any) {
    let config = options || { name: "HelloWorld" }
    Vue.component(config.name, Component);
  }
};


export default HelloWorld;
