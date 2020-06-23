const sites = [
  {
    key: 'okzy',
    name: 'OK 资源网',
    json: 'https://cj.okzy.tv/inc/feifei3s/',
    xml: 'https://cj.okzy.tv/inc/apickm3u8s_subname.php',
    down: 'https://cj.okzy.tv/inc/apidown_subname.php'
  },
  {
    key: 'zuidazy',
    name: '最大资源网',
    json: 'http://www.zdziyuan.com/inc/feifei3.4/',
    xml: 'http://www.zdziyuan.com/inc/api_zuidam3u8.php',
    down: 'http://www.zdziyuan.com/inc/apidown.php'
  },
  {
    key: 'gaoqingzy',
    name: '高清资源网',
    json: 'http://cj.gaoqingzyw.com/inc/feifei3/',
    xml: 'http://cj.gaoqingzyw.com/inc/gqm3u8.php',
    down: 'http://cj.gaoqingzyw.com/inc/apidown.php'
  },
  {
    key: 'doubanzy',
    name: '豆瓣电影资源',
    json: 'http://v.1988cj.com/inc/feifei3/',
    xml: 'http://v.1988cj.com/inc/dbm3u8.php',
    down: 'http://v.1988cj.com/inc/apidown.php'
  },
  {
    key: '135zy',
    name: '135 资源网',
    json: 'http://cj.zycjw1.com/inc/feifei3/',
    xml: 'http://cj.zycjw1.com/inc/135m3u8.php',
    down: 'http://cj.zycjw1.com/inc/apidown.php'
  },
  {
    key: 'kankanzy',
    name: '看看资源',
    json: 'http://v.bbtsv.com/inc/feifei3/',
    xml: 'http://v.bbtsv.com/inc/131m3u8.php',
    down: ''
  },
  {
    key: 'subo988',
    name: '速播资源站',
    json: 'http://www.subo988.com/inc/feifei3.4/',
    xml: 'https://www.subo988.com/inc/maccms_subom3u8.php',
    down: ''
  },
  {
    key: '209zy',
    name: '209 资源',
    json: 'http://cj.1156zy.com/inc/feifei3/',
    xml: 'http://cj.1156zy.com/inc/33uuck.php',
    down: ''
  },
  {
    key: 'zuixinzy',
    name: '最新资源',
    json: 'http://api.zuixinapi.com/inc/feifei3/',
    xml: 'http://api.zuixinapi.com/inc/apixinm3u8.php',
    down: ''
  },
  {
    key: 'kubozy',
    name: '酷播资源',
    json: 'http://api.kbzyapi.com/inc/feifei3.4/',
    xml: 'http://api.kbzyapi.com/inc/s_api_kakam3u8.php',
    down: ''
  },
  {
    key: 'yongjiuzy',
    name: '永久资源',
    json: 'http://cj.yongjiuzyw.com/inc/feifei3/',
    xml: 'http://cj.yongjiuzyw.com/inc/s_yjm3u8.php',
    down: ''
  },
  {
    key: '123ku',
    name: '123 资源',
    json: 'http://cj.123ku2.com:12315/inc/feifei3/',
    xml: 'http://cj.123ku2.com:12315/inc/123kum3u8.php',
    down: ''
  },
  {
    key: 'kuyunzy',
    name: '酷云资源',
    json: 'http://caiji.kuyun98.com/inc/feifei/',
    xml: 'http://caiji.kuyun98.com/inc/ldg_kkm3u8.php',
    down: ''
  },
  {
    key: 'wolongzy',
    name: '卧龙资源',
    json: 'http://cj.wlzy.tv/api/ff/vod/',
    xml: 'https://cj.wlzy.tv/inc/s_api_mac_m3u8.php',
    down: ''
  },
  {
    key: 'mahuazy',
    name: '麻花资源',
    json: 'https://www.mhapi123.com/inc/feifei3_all/',
    xml: 'https://www.mhapi123.com/inc/api.php',
    down: ''
  },
  {
    key: 'kkzy',
    name: '快快资源',
    json: 'https://api.kkzy.tv/inc/apijson_vod.php',
    xml: 'https://api.kkzy.tv/inc/ckm3u8.php',
    down: ''
  },
  {
    key: '158zy',
    name: '壹伍捌资源网',
    json: 'http://cj.158zyz.net:158/inc/feifei3.4',
    xml: 'http://cj.158zyz.net:158/inc/158m3u8.php',
    down: ''
  },
  {
    key: 'rrzy',
    name: '人人资源',
    json: 'https://www.rrzy.cc/api.php/provide/vod/from/rrm3u8/at/json/',
    xml: 'https://www.rrzyw.cc/api.php/provide/vod/from/rrm3u8/at/xml/',
    down: ''
  },
  {
    key: 'smzy',
    name: '神马资源网',
    json: 'http://api.shenmacj.com/api.php/provide/vod/at/json/',
    xml: 'http://api.shenmacj.com/api.php/provide/vod/from/smm3u8/at/xml/',
    down: ''
  },
  {
    key: 'mokazy',
    name: '魔卡资源网',
    json: 'https://cj.heiyap.com/api.php/provide/vod/',
    xml: 'https://cj.heiyap.com/api.php/provide/vod/from/mkm3u8/at/xml/',
    down: ''
  },
  {
    key: 'kyzy',
    name: '快影资源站',
    json: 'https://www.kyzy.tv/api.php/provide/vod/',
    xml: 'https://www.kyzy.tv/api.php/kym3u8/vod/at/xml/',
    down: ''
  },
  {
    key: 'khzy',
    name: '快活资源站',
    json: 'https://www.khzyapi.com/api.php/provide/vod/at/json/',
    xml: 'http://cj.1886zy.co/inc/zkm3u8.php',
    down: ''
  },
  {
    key: 'xhgcjym',
    name: '小黄瓜资源',
    json: 'http://cj.xhgcjym.com/inc/apijson.php',
    xml: 'http://cj.xhgcjym.com/inc/api.php',
    down: '',
    level: 18
  },
  {
    key: 'jiali',
    name: '佳丽 TV',
    json: 'https://jialiapi.com/api.php/provide/vod/',
    xml: 'https://jialiapi.com/api.php/provide/vod/at/xml/',
    down: '',
    level: 18
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
