const sites = [
  {
    key: 'okzyw',
    name: 'OK 资源网',
    api: 'https://cj.okzy.tv/inc/feifei3s/',
    type: 'json'
  },
  {
    key: 'zuidazy',
    name: '最大资源网',
    api: 'http://www.zdziyuan.com/inc/feifei3.4/',
    type: 'json'
  },
  {
    key: 'leduozy',
    name: '乐多资源',
    api: 'http://www.leduozy.com/inc/feifei3/',
    type: 'json'
  },
  {
    key: 'kankanzy',
    name: '看看资源',
    api: 'http://v.bbtsv.com/inc/feifei3/',
    type: 'json'
  },
  {
    key: 'subo988',
    name: '速播资源站',
    api: 'http://www.subo988.com/inc/feifei3.4/',
    type: 'json'
  },
  {
    key: 'doubanzy',
    name: '豆瓣电影资源',
    api: 'http://v.1988cj.com/inc/feifei3/',
    type: 'json'
  },
  {
    key: '135zy',
    name: '135 资源网',
    api: 'http://cj.zycjw1.com/inc/feifei3/',
    type: 'json'
  },
  {
    key: '209zy',
    name: '209 资源',
    api: 'http://cj.1156zy.com/inc/feifei3/',
    type: 'json'
  },
  {
    key: 'zuixinzy',
    name: '最新资源',
    api: 'http://api.zuixinapi.com/inc/feifei3/',
    type: 'json'
  },
  {
    key: 'kubozy',
    name: '酷播资源',
    api: 'http://api.kbzyapi.com/inc/feifei3.4/',
    type: 'json'
  },
  {
    key: 'yongjiuzy',
    name: '永久资源',
    api: 'http://cj.yongjiuzyw.com/inc/feifei3/',
    type: 'json'
  },
  {
    key: '123ku',
    name: '123 资源',
    api: 'http://cj.123ku2.com:12315/inc/feifei3/',
    type: 'json'
  },
  {
    key: 'gaoqingzy',
    name: '高清资源网',
    api: 'http://cj.gaoqingzyw.com/inc/feifei3/',
    type: 'json'
  },
  {
    key: 'kuyunzy',
    name: '酷云资源',
    api: 'http://caiji.kuyun98.com/inc/feifei/',
    type: 'json'
  },
  {
    key: 'wolongzy',
    name: '卧龙资源',
    api: 'http://cj.wlzy.tv/api/ff/vod/',
    type: 'json'
  },
  {
    key: 'mahuazy',
    name: '麻花资源',
    api: 'https://www.mhapi123.com/inc/feifei3_all/',
    type: 'json'
  },
  {
    key: 'kkzy',
    name: '快快资源',
    api: 'https://api.kkzy.tv/inc/apijson_vod.php',
    type: 'json'
  },
  {
    key: '158zyw',
    name: '壹伍捌资源网',
    api: 'http://cj.158zyz.net:158/inc/feifei3.4',
    type: 'json'
  },
  {
    key: '605zy',
    name: '小黄瓜资源',
    api: 'http://cj.xhgcjym.com/inc/apijson.php',
    type: 'json'
  },
  {
    key: 'rrzy',
    name: '人人资源',
    api: 'https://www.rrzy.cc/api.php/provide/vod/from/rrm3u8/at/json/',
    type: 'json'
  },
  {
    key: 'smzy',
    name: '神马资源网',
    api: 'http://api.shenmacj.com/api.php/provide/vod/at/json/',
    type: 'json'
  },
  {
    key: 'mokazy',
    name: '魔卡资源网',
    api: 'https://cj.heiyap.com/api.php/provide/vod/',
    type: 'json',
    format: 'json'
  },
  {
    key: 'kyzy',
    name: '快影资源站',
    api: 'https://www.kyzy.tv/api.php/provide/vod/',
    type: 'json',
    format: 'json'
  },
  {
    key: 'khzy',
    name: '快活资源站',
    api: 'https://www.khzyapi.com/api.php/provide/vod/at/json/',
    type: 'json',
    format: 'json'
  },
  {
    key: 'jiali',
    name: '佳丽 TV',
    api: 'https://jialiapi.com/api.php/provide/vod/',
    type: 'json',
    format: 'json'
  }
]

const getSite = (e) => {
  for (const i of sites) {
    if (e === i.key) {
      return i
    }
  }
}

export {
  sites,
  getSite
}
