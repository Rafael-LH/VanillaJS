

        const fetchAPI = async () => {

               try {

                   const getData = async url => {

                        const data = await fetch(url)
                        return await data.json()

                   }
                   let rute = 'https://yts.lt/api/v2/list_movies.json?genre=';

                   let responseActionList = await getData(`${rute}action`)
                   console.log('Action List', responseActionList.data.movies)

                   let reponseDramaList = await getData(`${rute}drama`)
                   console.log('Terror List:', reponseDramaList.data.movies )

                   let reponseAnimationList = await getData(`${rute}animation`)
                   console.log('Animation List:', reponseAnimationList.data.movies )

                   
               } catch (error) {
                   console.log(`Ha ocurrido algun error ${error}` )
               }  
            
        }

        fetchAPI()
