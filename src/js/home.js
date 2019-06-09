


                            // resolver rechazar
   const getUserAll = new Promise((resolve, reject)=> {
          let response = true
          setTimeout(() => {
            return response ? resolve(`El request se hizo de manera exitosa y retorno una respuesta, get user all (2)`) : reject(`Error, el request ha fallado`)
          }, 5000)
   })
                            // resolver rechazar
   const getUser = new Promise((resolve, reject)=> {
          let response = true
          setTimeout(() => {
            return response ? resolve(`El request se hizo de manera exitosa y retorno una respuesta get user (1)`) : reject(`Error, el request ha fallado`)
          }, 3000)
   })
  
    // getUser
    // //todo salio bien
    // .then(response => console.log(response) )
    
    // //todo salio mal
    // .catch(errMessage =>  console.log(errMessage) )

  // el Promise.race es un carrera de promesas la cual ejecutara la promesa que termine primero  
    Promise.race([
      getUserAll,
      getUser
    ])
    // tenemos que manejar el then y catch de la siguiente promesa
    //todo salio bien
    .then(response => console.log(response) )
  
    //todo salio mal
    .catch(errMessage =>  console.log(errMessage) )