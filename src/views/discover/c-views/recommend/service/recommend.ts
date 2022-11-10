import iyRequest from '@/service'

export function getBanners() {
  return iyRequest.get({
    url: '/banner'
  })
}
export function getHotRecommend(limit: number) {
  return iyRequest.get({
    url: `/personalized?${limit}`
  })
}

export function getAlbumNewestRecommend() {
  return iyRequest.get({
    url: '/album/newest'
  })
}

export function getPlayListDetail(id: number) {
  return iyRequest.get({
    url: `/playlist/detail?id=${id}`
  })
}

export function getArtistList(limit = 30) {
  return iyRequest.get({
    url: '/artist/list',
    params: {
      limit
    }
  })
}
