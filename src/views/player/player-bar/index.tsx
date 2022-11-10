import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import {
  BarControl,
  BarOperator,
  BarPlayerInfo,
  PlayerBarWrapper
} from './style'
import { Link } from 'react-router-dom'
import { formatTime, getImageSize, getSongPlayUrl } from '@/utils'
import { Slider } from 'antd'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/hooks'
import { useRef } from 'react'
import { changeLyricIndexAction, fetchCurrentSongAction } from '../store/player'

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: FC<IProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isSliding, setIsSliding] = useState(false)
  const { currentSong, lyrics, lyricIndex } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      lyrics: state.player.lyrics,
      lyricIndex: state.player.lyricIndex
    }),
    shallowEqualApp
  )

  const audioRef = useRef<HTMLAudioElement>(null)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCurrentSongAction(1804604231))
  }, [])

  // 组件内的副作用
  useEffect(() => {
    audioRef.current!.src = getSongPlayUrl(currentSong.id)
    // audioRef.current?.play().catch(() => {
    //   setIsPlaying(false)
    // })

    // 获取总时间
    setDuration(currentSong.dt)
  }, [currentSong])
  function handleTimeUpdate() {
    const currentTime = audioRef.current!.currentTime * 1000
    // 歌曲进度
    const progress = (currentTime / duration) * 100
    if (!isSliding) {
      setCurrentTime(currentTime)
      setProgress(progress)
    }

    // 3.根据当前时间匹配对应的歌词
    //currentTime/lyrics
    let index = lyrics.length - 1

    for (let i = 0; i < lyrics.length; i++) {
      if (lyrics[i].time > currentTime) {
        index = i - 1
        break
      }
    }

    if (lyricIndex === index || index === -1) return
    console.log(lyrics[index]?.text)

    dispatch(changeLyricIndexAction(index))
  }
  function handleTimeEnded() {
    // console.log('first')
  }
  function handlePlayClick() {
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch(() => setIsPlaying(false))

    setIsPlaying(!isPlaying)
    setIsSliding(false)
  }

  function handleSliderHandleChange(value: number) {
    const currentTime = (value / 100) * duration
    audioRef.current!.currentTime = currentTime / 1000
    setCurrentTime(currentTime)

    setIsSliding(false)
  }

  function handSliderOnChange(value: number) {
    if (!isSliding) setIsSliding(true)
    const currentTime = (value / 100) * duration
    setCurrentTime(currentTime)
    setProgress(value)
  }
  function handPrevClicked() {
    window.open('')
  }
  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl isPlaying={isPlaying}>
          <button
            className="btn sprite_playbar prev"
            onClick={handPrevClicked}
          ></button>
          <button
            className="btn sprite_playbar play"
            onClick={handlePlayClick}
          ></button>
          <button className="btn sprite_playbar next"></button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/player">
            <img
              className="image"
              src={getImageSize(currentSong?.al?.picUrl, 50)}
              alt=""
            />
          </Link>

          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{currentSong?.ar?.[0]?.name}</span>
            </div>
            <div className="progress">
              <Slider
                step={0.2}
                value={progress}
                tooltip={{ formatter: null }}
                onAfterChange={(e) => handleSliderHandleChange(e)}
                onChange={(e) => handSliderOnChange(e)}
              ></Slider>
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator playMode={1}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleTimeEnded}
      />
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
