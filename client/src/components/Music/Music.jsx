import React from 'react'
import sound from '../../assets/soundtrack.mp3'
import styles from './Music.module.css'

function Music(props) {
  const {isPlaying} = props
  const {audioRef} = props

  return (
    <div className={styles.audioContainer}>
    {/* <button onClick={() => togglePlay()}>Music: {isPlaying? 'ON' : 'OFF'}</button> */}
    <audio ref={audioRef} controls autoPlay={isPlaying} loop>
      <source src={sound} type="audio/mpeg" />
    </audio>
    </div>
  )
}

export default Music