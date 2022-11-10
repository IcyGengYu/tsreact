export function formatCount(count: number) {
  if (count > 100000) {
    return (count / 10000).toFixed(2) + '万'
  } else {
    return count
  }
}

export function getImageSize(
  imageUrl: string,
  width: number,
  height: number = width
) {
  return imageUrl + `?param=${width}y${height}`
}

export function formatTime(time: number) {
  // 1.将毫秒转成秒
  const timeSecond = time / 1000
  // 2.获取分钟和秒钟
  const minute = Math.floor(timeSecond / 60)
  const second = Math.floor(timeSecond) % 60

  //格式化对应时间
  const formatMinute = String(minute).padStart(2, '0')
  const formatSecond = String(second).padStart(2, '0')
  return formatMinute + ':' + formatSecond
}
