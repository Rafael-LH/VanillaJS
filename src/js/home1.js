

    // utilizando async y await
        const fetchAPI = async () => {

               try {

                   const data = await fetch('https://randomuser.me/api/',{method: 'GET'})
                   const dataResponse = await data.json()
                   console.log(dataResponse.results[0]);

               } catch (error) {
                   console.log(`Ha ocurrido algun problema ${error}`)
               }
        }

    // utilizando promises
        //  const fetchAPI = () => {

        //             fetch('https://randomuser.me/api/',{method: 'GET'})
        //            .then(dataResponse => dataResponse.json() )
        //            .then(response => console.log(response.results[0]) )
        //            .catch(err => console.log(`Ha ocurrido algun problema ${err}`) ); 

        // }

        fetchAPI()