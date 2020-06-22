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
      // zy.type('okzy').then(res => {
      //   console.log(res)
      // })
      zy.search('okzy', '我不是药神').then(res => {
        console.log(res)
      })
      // zy.list('xhgcjym', 1).then(res => {
      //   console.log(res, 'list')
      // })
      // zy.detail('xhgcjym', 32316).then(res => {
      //   console.log(res, 'detail')
      // })
      // zy.down('xhgcjym', 32316).then(res => {
      //   console.log(res, 'down')
      // })
      // for (const i of sites) {
      //   zy.list(i.key).then(res => {
      //     console.log(i.key, res)
      //   })
      // }
    }
  },
  mounted () {
    console.log(sites.length)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
