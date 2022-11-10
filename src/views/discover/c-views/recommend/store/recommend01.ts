import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getBanners,
  getHotRecommend,
  getAlbumNewestRecommend
} from '../service/recommend'
import type { IRecommendState } from './type'
export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (arg, { dispatch }) => {
    try {
      const res = await getBanners()
      dispatch(changeBannersAction(res.banners))
    } catch (error) {
      console.log('err:', error)
      dispatch(changeBannersAction([]))
    }
  }
)

export const fetchHotRecommendDataAction = createAsyncThunk(
  'hot_recommend',
  async (arg, { dispatch }) => {
    try {
      const res = await getHotRecommend(8)
      console.log(res)
      dispatch(changeHotRecommendAction(res.result))
    } catch (error) {
      console.log('err:', error)
      dispatch(changeHotRecommendAction([]))
    }
  }
)

export const fetchNewestAlbumDataAction = createAsyncThunk(
  'new_album',
  async (arg, { dispatch }) => {
    try {
      const res = await getAlbumNewestRecommend()
      dispatch(changeNewestAlbumAction(res.albums))
    } catch (error) {
      dispatch(changeNewestAlbumAction([]))
    }
  }
)

const initialState: IRecommendState = {
  banners: [],
  hotRecommend: [],
  newestAlbum: [],
  ranking: [],
  settleSingers: []
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommend = payload
    },
    changeNewestAlbumAction(state, { payload }) {
      state.newestAlbum = payload
    }
  }
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchBannerDataAction.pending, (state, action) => {
  //       console.log(state)
  //       console.log(action)
  //     })
  //     .addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
  //       state.banners = payload
  //     })
  //     .addCase(fetchBannerDataAction.rejected, (state, action) => {
  //       console.log(state)
  //       console.log(action)
  //     })
  // }
})
export const {
  changeBannersAction,
  changeNewestAlbumAction,
  changeHotRecommendAction
} = recommendSlice.actions

export default recommendSlice.reducer
