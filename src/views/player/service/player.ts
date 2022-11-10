import iyRequest from '@/service'

export function getSongDetail(ids: number) {
  return iyRequest.get({
    url: `/song/detail?ids=${ids}`
  })
}

export function getSongLyric(id: number) {
  return iyRequest.get({
    url: `/lyric`,
    params: {
      id
    }
  })
}
