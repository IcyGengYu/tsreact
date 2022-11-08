import iyRequest from '@/service'

export function getBanners() {
  return iyRequest.get({
    url: '/banner'
  })
}
