import React, {useState, useEffect} from 'react'
import { useParams, useLocation } from 'react-router-dom'
import DOMPurify from 'dompurify'
// import { useSelector } from 'react-redux'
import axios from 'axios'
import styles from './Detail.module.css'

export default function Detail() {
  const location = useLocation()
  const {id} = useParams()


  // eslint-disable-next-line
  const [videoGame, setVideoGame] = useState({})
  // const detailGame = useSelector(state => state.games)

  useEffect(() =>{
    const fetchVideoGame = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/videogame/${id}`)
        setVideoGame(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchVideoGame()
  }, [id])


  return (
    <div className={styles.detailContainer}>
      <div className={styles.detail}>
      <h1 className={styles.littleTitle}>{videoGame.name}</h1>
      <img src={videoGame.image} alt="" />
      <p><b>Genero:</b> {location.state.genre.join(', ')}</p>
      <p className={styles.littleTitle}>Rating: {videoGame.rating}</p>
      <p><b>Fecha de lanzamiento:</b> {location.state.release}</p>
      <p className={styles.littleTitle}>Descripcion</p>
      <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(videoGame.description)}}></div>
      {videoGame.platforms? <p><b>Plataformas: </b> {videoGame.platforms.join(', ')}</p> : null}
      </div>
    </div>
  )
}
