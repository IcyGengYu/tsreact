import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getBanners,
  getHotRecommend,
  getAlbumNewestRecommend,
  getPlayListDetail,
  getArtistList
} from '../service/recommend'
import type { IRecommendState } from './type'

export const fetchRecommendDataAction = createAsyncThunk(
  'fetchdata',
  (arg, { dispatch }) => {
    getAlbumNewestRecommend().then((res) => {
      dispatch(changeNewestAlbumAction(res.albums))
    })
    getHotRecommend(8).then((res) => {
      dispatch(changeHotRecommendAction(res.result))
    })
    getBanners().then((res) => {
      dispatch(changeBannersAction(res.banners))
    })
    getArtistList(5).then((res) => {
      dispatch(changeSettleSingersAction(res.artists))
    })
  }
)
// 19723756飙升榜
// 3779629 新歌榜
// 2884035 原创榜
const rankingIds = [19723756, 3779629, 2884035]
export const fetchTopListDataAction = createAsyncThunk(
  'toplist',
  async (arg, { dispatch }) => {
    // 单一处理
    // for (const id of rankingIds) {
    //   getPlayListDetail(id).then((res) => {
    //     console.log(res)
    //     switch (id) {
    //       case 19723756:
    //         dispatch(changeUpRankingAction(res.playlist))
    //         break
    //       case 3779629:
    //         dispatch(changeNewRankingAction(res.playlist))
    //         break
    //       case 2884035:
    //         dispatch(changeOriginRankingAction(res.playlist))
    //         break
    //     }
    //   })
    // }
    // 将是哪个结果都拿到,放到一个数组中
    // for (const id of rankingIds) {
    //   const res = await getPlayListDetail(id)
    //   dispatch(changeRankingAction(res.playlist))
    // }
    const promises: Promise<any>[] = []
    for (const id of rankingIds) {
      promises.push(getPlayListDetail(id))
    }
    Promise.all(promises).then((res) => {
      const playlist = res.map((item) => item.playlist)
      dispatch(changeRankingAction(playlist))
    })
  }
)

const initialState: IRecommendState = {
  banners: [],
  hotRecommend: [],
  newestAlbum: [],
  ranking: [],
  settleSingers: []
  // upRanking: {},
  // newRanking: {},
  // originRanking: {}
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
    },
    changeRankingAction(state, { payload }) {
      // state.ranking.push(payload)
      state.ranking = payload
    },
    changeSettleSingersAction(state, { payload }) {
      state.settleSingers = payload
    }
    // changeUpRankingAction(state, { payload }) {
    //   state.upRanking = payload
    // },
    // changeNewRankingAction(state, { payload }) {
    //   state.newRanking = payload
    // },
    // changeOriginRankingAction(state, { payload }) {
    //   state.originRanking = payload
    // }
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
  changeHotRecommendAction,
  changeRankingAction,
  changeSettleSingersAction
  // changeNewRankingAction,
  // changeOriginRankingAction,
  // changeUpRankingAction
} = recommendSlice.actions

export default recommendSlice.reducer
