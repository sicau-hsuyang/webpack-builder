import { Vue } from 'vue-property-decorator'
export default class Export extends Vue {
  sayHello () {
    // console.log('hello world')
    throw new Error('the implement must in sub-class')
  }

  doExport () {
    console.log('export txt')
  }
}
