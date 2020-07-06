import { globalShortcut } from 'electron'
import els from 'electron-localshortcut'

const globalKey = {
  name: 'focus',
  desc: '老板键, 打开或隐藏界面',
  key: 'Alt+Space'
}
const localKey = [
  {
    name: 'playAndPause',
    desc: '播放或暂停',
    key: 'Space'
  },
  {
    name: 'forward',
    desc: '快进',
    key: 'Right'
  },
  {
    name: 'back',
    desc: '快退',
    key: 'Left'
  },
  {
    name: 'volumeUp',
    desc: '音量调高',
    key: 'Up'
  },
  {
    name: 'volumeDown',
    desc: '音量调高',
    key: 'Down'
  },
  {
    name: 'mute',
    desc: '静音',
    key: 'm'
  },
  {
    name: 'top',
    desc: '置顶或退出置顶',
    key: 't'
  },
  {
    name: 'fullscreen',
    desc: '进入或退出全屏',
    key: 'f'
  },
  {
    name: 'escape',
    desc: '退出全屏',
    key: 'Esc'
  },
  {
    name: 'next',
    desc: '下一集',
    key: 'Alt+Right'
  },
  {
    name: 'prev',
    desc: '上一集',
    key: 'Alt+Left'
  },
  {
    name: 'home',
    desc: '跳到视频开始位置',
    key: 'Home'
  },
  {
    name: 'end',
    desc: '跳到视频结束位置',
    key: 'End'
  },
  {
    name: 'opacityUp',
    desc: '透明度调高',
    key: 'Alt+Up'
  },
  {
    name: 'opacityDown',
    desc: '透明度调低',
    key: 'Alt+Down'
  },
  {
    name: 'playbackRateUp',
    desc: '播放倍速加快',
    key: 'PageUp'
  },
  {
    name: 'playbackRateDown',
    desc: '播放倍速减慢',
    key: 'PageDown'
  },
  {
    name: 'mini',
    desc: '进入或退出mini模式',
    key: 'Alt+m'
  }
]

const gloabShortcutlInit = (e) => {
  globalShortcut.register(globalKey.key, () => {
    e.isFocused() ? e.blur() : e.focus()
  })
}

const loaclShortcutInit = (e) => {
  localKey.map(item, () => {
    els.register(e, item.key, () => {
      e.webContents.send(item.name)
    })
  })
}

export {
  globalKey,
  localKey,
  gloabShortcutlInit,
  loaclShortcutInit
}
