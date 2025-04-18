export const setItemToLocalStorage = (key, item) =>{
  localStorage.setItem(key, JSON.stringify(item));
}

export const getItemFromLocalStorage = (key) =>{
  return JSON.parse(localStorage.getItem(key))
}