/*
  Deixa a primeira letra de uma palavra maíscula
  Ex: joão -> João 
*/
const capitalizeFirstLetter = string => {
  return string[0].toUpperCase() + string.slice(1)
}

export default capitalizeFirstLetter