import videoItemTemplate from './videoItemTemplate'

const fetchMovies = async () => {

    try {
        const getData = async url => {
             const data = await fetch(url)
             return await data.json()
        }

         const showModal = img => {
                document.getElementById('overlay').classList.add('active') 
                document.getElementById('modal').style.animation = 'modalIn .8s forwards' 
                document.getElementById('img-modal').setAttribute('src', img)

         }   

         const hideModal = () => {
               document.getElementById('overlay').classList.remove('active') 
               document.getElementById('modal').style.animation = "modalOut .8s forwards" 
         }
         document.getElementById('hide-modal').addEventListener('click', e => hideModal() )

         let rute = 'https://yts.lt/api/v2/list_movies.json?genre=';
            
         const listMovies = (dataList, getElement) => {

            dataList.data.movies.forEach(movie => {
                     
                     const HTMLString = videoItemTemplate(movie.large_cover_image, movie.title) 
                     getElement.innerHTML += HTMLString
             });
         }

          // responseActionList.data.movies.forEach(movie => {
                    //             let HTMLString =  videoItemTemplate(movie.large_cover_image, movie.title)
                    //                 document.getElementById('action').innerHTML += HTMLString

                                // Otra forma de hacerlo
                                //primero creamos un documento de HTML para que no imprima en html solo texto como si estubieramos poniendo <h1>Hola</h1> pero como
                                //texto plano en html
                                // const html = document.implementation.createHTMLDocument() 
                                // const DOM = document.getElementById('drama')
                                // // agrego al body con innerHTML lo que estoy trayendo de mi funcion videoItemTemplate por cada iteracion
                                // html.body.innerHTML = HTMLString;
                                // // depues con append agrego lo que acabo de agregar al body por lo tanto estara en la posicion numero 0 que es la primera
                                // DOM.append(html.body.children[0])
                    // });
         
         let responseActionList = await getData(`${rute}action`)
            //console.log('Action List', responseActionList.data.movies)
           listMovies(responseActionList, document.getElementById('action') )

        let reponseDramaList = await getData(`${rute}drama`)
         //console.log('Drama List:', reponseDramaList.data.movies )
         listMovies(reponseDramaList, document.getElementById('drama'))
       

        let reponseAnimationList = await getData(`${rute}animation`)
         //console.log('Animation List:', reponseAnimationList.data.movies )
         listMovies(reponseAnimationList, document.getElementById('animation'))

            let DomList = document.getElementsByClassName('primaryPlaylistItem')
            let DomTam = DomList.length;
            
            for (let i = 0; i < DomTam; i++) {
                DomList[i].addEventListener('click', e => {
                            showModal(document.getElementsByClassName('img-list')[i].getAttribute('src') )
                 });
            }

        
    } catch (error) {
        console.log(`Ha ocurrido algun error ${error}` )
    }  
 
}

export default fetchMovies