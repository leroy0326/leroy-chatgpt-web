import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://img.bosszhipin.com/beijin/upload/com/workfeel/20230313/7bf6f160950405e929b5c04176e2195d8676bab61a58cff6266e993c0816f73c81c2e42c5dd13b43.jpg',
      name: 'DEKE-Leroy',
      description: 'Star on <a href="https://github.com/leroy0326/ChatGPT" class="text-blue-500" target="_blank" >Github</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
