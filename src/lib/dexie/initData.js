const setting = [
  {
    id: 0,
    theme: 'light',
    site: 'zuidazy',
    pass: false
  }
]

const sites = [
  {
    id: '1',
    index: '1',
    key: 'okzy',
    name: 'OK 资源网',
    json: 'https://cj.okzy.tv/inc/feifei3s/',
    xml: 'https://cj.okzy.tv/inc/apickm3u8s_subname.php',
    down: 'https://cj.okzy.tv/inc/apidown_subname.php',
    level: 16
  },
  {
    id: '2',
    index: '2',
    key: 'zuidazy',
    name: '最大资源网',
    json: 'http://www.zdziyuan.com/inc/feifei3.4/',
    xml: 'http://www.zdziyuan.com/inc/api_zuidam3u8.php',
    down: 'http://www.zdziyuan.com/inc/apidown.php',
    level: 16
  },
  {
    id: '3',
    index: '3',
    key: 'gaoqingzy',
    name: '高清资源网',
    json: 'http://cj.gaoqingzyw.com/inc/feifei3/',
    xml: 'http://cj.gaoqingzyw.com/inc/gqm3u8.php',
    down: 'http://cj.gaoqingzyw.com/inc/apidown.php',
    level: 16
  },
  {
    id: '4',
    index: '4',
    key: 'doubanzy',
    name: '豆瓣电影资源',
    json: 'http://v.1988cj.com/inc/feifei3/',
    xml: 'http://v.1988cj.com/inc/dbm3u8.php',
    down: 'http://v.1988cj.com/inc/apidown.php',
    level: 16
  },
  {
    id: '5',
    index: '5',
    key: '135zy',
    name: '135 资源网',
    json: 'http://cj.zycjw1.com/inc/feifei3/',
    xml: 'http://cj.zycjw1.com/inc/135m3u8.php',
    down: 'http://cj.zycjw1.com/inc/apidown.php',
    level: 16
  },
  {
    id: '6',
    index: '6',
    key: 'kankanzy',
    name: '看看资源',
    json: 'http://v.bbtsv.com/inc/feifei3/',
    xml: 'http://v.bbtsv.com/inc/131m3u8.php',
    down: '',
    level: 16
  },
  {
    id: '7',
    index: '7',
    key: 'subo988',
    name: '速播资源站',
    json: 'http://www.subo988.com/inc/feifei3.4/',
    xml: 'https://www.subo988.com/inc/maccms_subom3u8.php',
    down: '',
    level: 16
  },
  {
    id: '8',
    index: '8',
    key: '209zy',
    name: '209 资源',
    json: 'http://cj.1156zy.com/inc/feifei3/',
    xml: 'http://cj.1156zy.com/inc/33uuck.php',
    down: '',
    level: 16
  },
  {
    id: '9',
    index: '9',
    key: 'zuixinzy',
    name: '最新资源',
    json: 'http://api.zuixinapi.com/inc/feifei3/',
    xml: 'http://api.zuixinapi.com/inc/apixinm3u8.php',
    down: '',
    level: 16
  },
  {
    id: '10',
    index: '10',
    key: 'kubozy',
    name: '酷播资源',
    json: 'http://api.kbzyapi.com/inc/feifei3.4/',
    xml: 'http://api.kbzyapi.com/inc/s_api_kakam3u8.php',
    down: '',
    level: 16
  },
  {
    id: '11',
    index: '11',
    key: 'yongjiuzy',
    name: '永久资源',
    json: 'http://cj.yongjiuzyw.com/inc/feifei3/',
    xml: 'http://cj.yongjiuzyw.com/inc/s_yjm3u8.php',
    down: '',
    level: 16
  },
  {
    id: '12',
    index: '12',
    key: '123ku',
    name: '123 资源',
    json: 'http://cj.123ku2.com:12315/inc/feifei3/',
    xml: 'http://cj.123ku2.com:12315/inc/123kum3u8.php',
    down: '',
    level: 16
  },
  {
    id: '13',
    index: '13',
    key: 'kuyunzy',
    name: '酷云资源',
    json: 'http://caiji.kuyun98.com/inc/feifei/',
    xml: 'http://caiji.kuyun98.com/inc/ldg_kkm3u8.php',
    down: '',
    level: 16
  },
  {
    id: '14',
    index: '14',
    key: 'wolongzy',
    name: '卧龙资源',
    json: 'http://cj.wlzy.tv/api/ff/vod/',
    xml: 'https://cj.wlzy.tv/inc/s_api_mac_m3u8.php',
    down: '',
    level: 16
  },
  {
    id: '15',
    index: '15',
    key: 'mahuazy',
    name: '麻花资源',
    json: 'https://www.mhapi123.com/inc/feifei3_all/',
    xml: 'https://www.mhapi123.com/inc/api.php',
    down: '',
    level: 16
  },
  {
    id: '16',
    index: '16',
    key: 'kkzy',
    name: '快快资源',
    json: 'https://api.kkzy.tv/inc/apijson_vod.php',
    xml: 'https://api.kkzy.tv/inc/ckm3u8.php',
    down: '',
    level: 16
  },
  {
    id: '17',
    index: '17',
    key: '158zy',
    name: '壹伍捌资源网',
    json: 'http://cj.158zyz.net:158/inc/feifei3.4',
    xml: 'http://cj.158zyz.net:158/inc/158m3u8.php',
    down: '',
    level: 16
  },
  {
    id: '18',
    index: '18',
    key: 'rrzy',
    name: '人人资源',
    json: 'https://www.rrzy.cc/api.php/provide/vod/from/rrm3u8/at/json/',
    xml: 'https://www.rrzyw.cc/api.php/provide/vod/from/rrm3u8/at/xml/',
    down: '',
    level: 16
  },
  {
    id: '19',
    index: '19',
    key: 'smzy',
    name: '神马资源网',
    json: 'http://api.shenmacj.com/api.php/provide/vod/at/json/',
    xml: 'http://api.shenmacj.com/api.php/provide/vod/from/smm3u8/at/xml/',
    down: '',
    level: 16
  },
  {
    id: '20',
    index: '20',
    key: 'mokazy',
    name: '魔卡资源网',
    json: 'https://cj.heiyap.com/api.php/provide/vod/',
    xml: 'https://cj.heiyap.com/api.php/provide/vod/from/mkm3u8/at/xml/',
    down: '',
    level: 16
  },
  {
    id: '21',
    index: '21',
    key: 'kyzy',
    name: '快影资源站',
    json: 'https://www.kyzy.tv/api.php/provide/vod/',
    xml: 'https://www.kyzy.tv/api.php/kym3u8/vod/at/xml/',
    down: '',
    level: 16
  },
  {
    id: '22',
    index: '22',
    key: 'khzy',
    name: '快活资源站',
    json: 'https://www.khzyapi.com/api.php/provide/vod/at/json/',
    xml: 'http://cj.1886zy.co/inc/zkm3u8.php',
    down: '',
    level: 16
  },
  {
    id: '23',
    index: '23',
    key: 'xhgcjym',
    name: '小黄瓜资源',
    json: 'http://cj.xhgcjym.com/inc/apijson.php',
    xml: 'http://cj.xhgcjym.com/inc/api.php',
    down: '',
    level: 18
  },
  {
    id: '24',
    index: '24',
    key: 'jiali',
    name: '佳丽 TV',
    json: 'https://jialiapi.com/api.php/provide/vod/',
    xml: 'https://jialiapi.com/api.php/provide/vod/at/xml/',
    down: '',
    level: 18
  }
]

export {
  setting,
  sites
}
