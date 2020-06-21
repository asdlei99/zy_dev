<template>
  <div class="hello">
    <button @click="getAxios">axios</button>
  </div>
</template>

<script>
// import axios from 'axios'
import { sites } from '@/lib/site/sites'
import zy from '@/lib/site/tools'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    getAxios (e) {
      // zy.class_list('okzyw').then(res => {
      //   console.log(res)
      // })
      // zy.search('okzyw', '我不是药神').then(res => {
      //   console.log(res)
      // })
      // zy.detail('okzyw', '4119').then(res => {
      //   console.log(res.data.info, 'hello')
      // })
      zy.list('okzyw', 1, 12).then(res => {
        console.log(res.data.info)
      })
    }
  },
  mounted () {
    console.log(sites.length)
    // for (const i of sites) {
    //   this.getAxios(i)
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
