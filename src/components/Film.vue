<template>
  <div class="film">
    <div class="header">
      <div class="zy-select" @mouseleave="show.site = false">
        <div class="vs-placeholder" @click="show.site = true">{{site.name}}</div>
        <div class="vs-options" v-show="show.site">
          <ul class="zy-scroll">
            <li :class="site.key === i.key ? 'active' : ''" v-for="i in sites" :key="i.key" @click="siteClick(i)">{{ i.name }}</li>
          </ul>
        </div>
      </div>
      <div class="zy-select" @mouseleave="show.type = false" v-if="types.length > 0">
        <div class="vs-placeholder" @click="show.type = true">{{type.name}}</div>
        <div class="vs-options" v-show="show.type">
          <ul class="zy-scroll">
            <li :class="type.tid === i.tid ? 'active' : ''" v-for="i in types" :key="i.tid" @click="typeClick(i)">{{ i.name }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="body"></div>
  </div>
</template>
<script>
import { sites, getSite } from '../lib/site/sites'
import zy from '../lib/site/tools'
export default {
  name: 'film',
  data () {
    return {
      show: {
        site: false,
        type: false,
        search: false
      },
      sites: sites,
      site: {},
      types: [],
      type: {}
    }
  },
  methods: {
    siteClick (e) {
      this.site = e
      getSite(e)
      zy.type(e.key).then(res => {
        this.types = res
        this.type = res[0]
      })
    },
    typeClick (e) {
      this.type = e
    }
  }
}
</script>
<style lang="scss" scoped>
.film{
  height: calc(100% - 40px);
  width: 100%;
  display: flex;
  flex-direction: column;
  .header{
    height: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
