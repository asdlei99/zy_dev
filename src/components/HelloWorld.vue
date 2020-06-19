<template>
  <div class="hello">
    <button @click="getAxios">axios</button>
  </div>
</template>

<script>
// import jsonp from 'promisify-jsonp'
// const pj = require('promisify-jsonp')
// import jsonp from 'jsonp'
import axios from 'axios'
// import parser from 'fast-xml-parser'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    getAxios () {
      axios.post('http://localhost:3838/proxy', {
        url: 'http://www.zdziyuan.com/inc/feifei3.4/'
      }).then(res => {
        console.log(res, 'res')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
