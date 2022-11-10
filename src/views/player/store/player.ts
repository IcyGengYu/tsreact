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
}

const initialState: IPlayerState = {
  lyrics: [],
  lyricIndex: -1,
  currentSong: {}
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
