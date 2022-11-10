import { ILyric, parseLyric } from '@/utils/parse-lyric'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '../service/player'

export const fetchCurrentSongAction = createAsyncThunk(
  'currentSong',
  (ids: number, { dispatch }) => {
    // 1.获取歌曲信息
    getSongDetail(ids).then((res) => {
      if (!res.songs.length) return
      dispatch(changeCurrentSongAction(res.songs[0]))
    })
    getSongLyric(ids).then((res) => {
      const lyricString = res.lrc.lyric
      const lyric = parseLyric(lyricString)
      dispatch(changeLyricAction(lyric))
    })
  }
)
interface IPlayerState {
  currentSong: any
  lyrics: ILyric[]
  lyricIndex: number
  playSongList: any[]
  playSongIndex: number
}

const initialState: IPlayerState = {
  lyrics: [],
  lyricIndex: -1,
  currentSong: {},
  playSongList: [
    {
      name: '把你交还人海',
      id: 1804604231,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 34618946,
          name: '廖亚桐',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 8,
      crbt: null,
      cf: '',
      al: {
        id: 120475436,
        name: '把你交还人海',
        picUrl:
          'https://p1.music.126.net/YIHYCPHfUkU_WqW10BA1uw==/109951165543546098.jpg',
        tns: [],
        pic_str: '109951165543546098',
        pic: 109951165543546100
      },
      dt: 192132,
      h: {
        br: 320002,
        fid: 0,
        size: 7687775,
        vd: 25828,
        sr: 48000
      },
      m: {
        br: 192002,
        fid: 0,
        size: 4612703,
        vd: 28429,
        sr: 48000
      },
      l: {
        br: 128002,
        fid: 0,
        size: 3075167,
        vd: 30105,
        sr: 48000
      },
      sq: {
        br: 817210,
        fid: 0,
        size: 19626525,
        vd: 25851,
        sr: 48000
      },
      hr: {
        br: 1584898,
        fid: 0,
        size: 38063711,
        vd: 25861,
        sr: 48000
      },
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 536870912,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 8,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 1418088,
      mv: 0,
      publishTime: 0
    },
    {
      name: '这，就是爱',
      id: 191060,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 6472,
          name: '张杰',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 277,
      crbt: null,
      cf: '',
      al: {
        id: 19298,
        name: '这，就是爱',
        picUrl:
          'https://p1.music.126.net/-IjIggUaU6QOg04LtWhjDA==/109951163940905361.jpg',
        tns: [],
        pic_str: '109951163940905361',
        pic: 109951163940905360
      },
      dt: 294556,
      h: {
        br: 320000,
        fid: 0,
        size: 11784403,
        vd: -75923,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 7070659,
        vd: -73355,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4713787,
        vd: -71760,
        sr: 44100
      },
      sq: {
        br: 963078,
        fid: 0,
        size: 35460145,
        vd: -76063,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '01',
      no: 4,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 2,
      s_id: 0,
      mark: 8704,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 277,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 5779684,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 636011,
      publishTime: 1290355200000
    }
  ],
  playSongIndex: 0
}
const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    }
  }
})
export const {
  changeCurrentSongAction,
  changeLyricAction,
  changeLyricIndexAction
} = playerSlice.actions
export default playerSlice.reducer
