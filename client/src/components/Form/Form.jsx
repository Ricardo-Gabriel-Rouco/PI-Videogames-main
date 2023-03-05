import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import validation from './validation'
import * as actions from '../../redux/actions'
import styles from './Form.module.css'
import {VscError} from 'react-icons/vsc'

export default function Form() {
  const generos = useSelector(state => state.genres)
  const plataformas = useSelector(state => state.platforms)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() =>{
    if (!generos.length) {
      dispatch(actions.fetchGenres());
      // eslint-disable-next-line
  }}, [])

  useEffect(() =>{
    if (!plataformas.length) {
      dispatch(actions.fetchPlatforms());
  }}, [dispatch, plataformas.length])
  // 

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    release: '',
    rating: '',
    platforms: [],
    genres: [],
    image: ''
  })
  // eslint-disable-next-line
  const [formErrors, setFormErrors] = useState({
    name: '',
    description: '',
    release: '',
    rating: '',
    platforms: '',
    genres: '',
    image: ''
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newFormData = {...formData};
  
    if (type === 'checkbox') {
      if (name.startsWith("genre-")) {
        const genreName = name.slice(6);
        newFormData.genres = checked ? [...newFormData.genres, genreName] : newFormData.genres.filter(genre => genre !== genreName);
      } else if (name.startsWith("platform-")) {
        const platformName = name.slice(9);
        newFormData.platforms = checked ? [...newFormData.platforms, platformName] : newFormData.platforms.filter(platform => platform !== platformName);
      }
    } else {
      newFormData[name] = value;
    }
    setFormData(newFormData);
    setFormErrors(validation(newFormData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validation({...formData, [e.target.name]: [e.target.value]}))
    if (formData.name && formData.description && formData.release && formData.rating && formData.genres.length && formData.platforms.length) {
        dispatch(actions.postGame(formData));
        alert("Guardaste un nuevo Juego");
        setFormData({
          name: '',
          description: '',
          release: '',
          rating: '',
          genres: [],
          platforms: [],
          image: ''
        });
        navigate('/home');
        dispatch(actions.fetchGames())
    } else {
        e.preventDefault()
        alert("Tienes que completar los campos correctamente");
    }
};



  return (
    <div className={styles.container}>
      <h1>Crear Videojuego</h1>
      <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="name">Name: </label>
          <input name='name' type="text" value={formData.name} onChange={handleInputChange}/>
          {formErrors.name?<p className={styles.errores}><VscError/>{formErrors.name}</p>:<p> </p>}
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <textarea name='description' type="textarea" value={formData.description} onChange={handleInputChange}/>
          {formErrors.description?<p className={styles.errores}><VscError/>{formErrors.description}</p>:<p> </p>}
        </div>
        <div>
          <label htmlFor="release">Release: </label>
          <input name='release' type="date" value={formData.release} onChange={handleInputChange}/>
          {formErrors.release?<p className={styles.errores}><VscError/> {formErrors.release}</p>:<p> </p>}
        </div>
        <div>
          <label htmlFor="rating">Rating: </label>
          <input name='rating' type="text" value={formData.rating} onChange={handleInputChange}/>
          {formErrors.rating?<p className={styles.errores}><VscError/> {formErrors.rating}</p>:<p> </p>}
        </div>
        <div className={styles.dropdown}>
          <label className={styles.dropButton} htmlFor="genres" >Genres: </label>
          <div className={styles.dropdowncontent} >
          {generos.map(g =>
            <div className={styles.checkboxestyles} key={g.id}>
            <label htmlFor={g.name}>{g.name}</label>
            <input
            type='checkbox'
            name={`genre-${g.name}`}
            value={g.name}
            checked={formData.genres.includes(g.name)}
            onChange={handleInputChange}
            />
            </div >
          )}
          </div>
          {formErrors.genres?<p className={styles.errores}><VscError/> {formErrors.genres}</p>:<p> </p>}
        </div>
        <div className={styles.dropdown}>
        <label htmlFor="platforms" className={styles.dropButton}>Platforms: </label>
        <div className={styles.dropdowncontent}>
          <div>
          {plataformas.map(g =>
            <div className={styles.checkboxestyles} key={g.id}>
            <label htmlFor={g.name}>{g.name}</label>
            <input
              type='checkbox'
              name={`platform-${g.name}`}
              value={g.name}
              checked={formData.platforms.includes(g.name)}
              onChange={handleInputChange}
              />
            </div>
          )}
          </div>
          </div>
          {formErrors.platforms?<p className={styles.errores}><VscError/> {formErrors.platforms}</p>:<p> </p>}
        </div>
        <div>
          <label htmlFor="image">Image URL: </label>
          <input name='name' type="text" value={formData.image} onChange={handleInputChange}/>
          {formErrors.image?<p className={styles.errores}><VscError/> {formErrors.image}</p>:<p> </p>}
        </div>
        <button type='submit'>Guardar</button>
      </form>
    </div>
    </div>
  )
}
