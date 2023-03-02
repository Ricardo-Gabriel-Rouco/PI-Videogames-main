const regexName = /^[a-zA-Z0-9\s]+$/

export default function validation(formData){
  let errors = {}
  if(!formData.name) errors.name = 'Debe ingresar un valor';
  if(formData.name.length > 50) errors.name = 'No debe tenes mas de 50 caracteres'
  if(!regexName.test(formData.name)) errors.name = 'Solo puede utilizar Números, letras y espacios'
  if(!formData.description) errors.description = 'Debe ingresar un valor';
  if(!(new Date(formData.release) instanceof Date && !isNaN(new Date(formData.release)))) errors.release = 'Debe ingresar una fecha';
  if(!formData.rating) errors.rating = 'Debe ingresar un valor';
  if(formData.rating < 0 || formData.rating > 5) errors.rating = 'La valoracion del juego debe estar entre 0 y 5';
  if(!formData.genres) errors.genres = 'Debe ingresar un valor';
  if(!formData.platforms) errors.platforms = 'Debe ingresar un valor';

  return errors
}