export interface ILyric {
  time: number
  text: string
}

// 歌词解析

//
const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/

export function parseLyric(lyricString: string) {
  const lyric: ILyric[] = []
  // 1.拿到一行行的歌词
  const lines: string[] = lyricString.split('\n')
  // 2.对每句歌词进行解析.解析成对应的对象
  for (const line of lines) {
    // 1.匹配结果
    const result = timeRegExp.exec(line)
    if (!result) continue

    // 2.获取每一组数据
    const time1 = Number(result[1]) * 60 * 1000
    const time2 = Number(result[2]) * 1000
    let time3 = 0

    if (result[3].length === 3) {
      time3 = Number(result[3])
    } else if (result[3].length === 1) {
      time3 = Number(result[3]) * 100
    } else if (result[3].length === 2) {
      time3 = Number(result[3]) * 10
    } else {
      time3 = 0
    }
    const time = Number(time1 + time2 + time3)
    const text = line.replace(timeRegExp, '')

    lyric.push({ time, text })
  }

  return lyric
}
