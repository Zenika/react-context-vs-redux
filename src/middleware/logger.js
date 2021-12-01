const logger = (store) => (next) => (action) => {
  // on affiche chaque action dans la console
  console.log(action.type, action.payload);
  return next(action)
}

export default logger
