<template>
  <div class="hello">
    <button @click="getAxios">axios</button>
  </div>
</template>

<script>
import axios from 'axios'
import { sites } from '@/lib/site/sites'
import zy from '@/lib/site/tools'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    getAxios (e) {
      axios.post('http://localhost:4848/proxy', {
        // url: 'https://cj.okzy.tv/inc/feifei3s/?ac=detail&wd=1'
        url: e.api
      }).then(res => {
        // console.log(e.name)
        console.log(res.data.info, 'res')
      })
    }
  },
  mounted () {
    zy.detail('okzyw', '59569').then(res => {
      console.log(res.data.info, 'hello')
    })
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
