import { globalShortcut } from 'electron'

const globalKey = {
  name: 'focus',
  desc: '老板键, 打开或隐藏界面',
  key: 'Alt+Space'
}
const localKey = [
  {
    name: 'playAndPause',
    desc: '播放或暂停',
    key: 'space'
  },
  {
    name: 'forward',
    desc: '快进',
    key: 'right'
  },
  {
    name: 'back',
    desc: '快退',
    key: 'left'
  },
  {
    name: 'volumeUp',
    desc: '音量调高',
    key: 'up'
  },
  {
    name: 'volumeDown',
    desc: '音量调高',
    key: 'down'
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
    key: 'esc'
  },
  {
    name: 'next',
    desc: '下一集',
    key: 'alt+right'
  },
  {
    name: 'prev',
    desc: '上一集',
    key: 'alt+left'
  },
  {
    name: 'home',
    desc: '跳到视频开始位置',
    key: 'home'
  },
  {
    name: 'end',
    desc: '跳到视频结束位置',
    key: 'end'
  },
  {
    name: 'opacityUp',
    desc: '透明度调高',
    key: 'alt+up'
  },
  {
    name: 'opacityDown',
    desc: '透明度调低',
    key: 'alt+down'
  },
  {
    name: 'playbackRateUp',
    desc: '播放倍速加快',
    key: 'pageup'
  },
  {
    name: 'playbackRateDown',
    desc: '播放倍速减慢',
    key: 'pagedown'
  },
  {
    name: 'mini',
    desc: '进入或退出mini模式',
    key: 'alt+m'
  }
]

const gloabShortcutlInit = (e) => {
  globalShortcut.register(globalKey.key, () => {
    e.isFocused() ? e.blur() : e.focus()
  })
}

export {
  globalKey,
  localKey,
  gloabShortcutlInit
}
