import videoItemTemplate from './videoItemTemplate'
import templateFeaturing from './templateFeaturing'
import CloseFooter from './CloseFooter'

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

            const setAttributes = (element, attributes) => {

                // con el for in recorremos nuestro objeto, el primer parametro que le pasamos a nuestro objeto elemento
                // es el key que en este caso nuestro primer key es src y para acceder al valor de ese key 
                // lo hacemos con attributes que es el objeto y entre corchetes le pasamos el atribute que es el key
                // entonces en cada vuelta accedera a attributes['src'] despues attributes['height'] y por ultimo attributes['width']
                for (const attribute in attributes) {
                                                         //attributes['src'] primera vuelta
                                                         //attributes['height'] segunda vuelta
                                                         //attributes['width'] tercera vuelta
                        element.setAttribute(attribute, attributes[attribute])
                        
                }
        }

        // url para buscar una pelicula
        const BASE_API = 'https://yts.lt/api/v2/list_movies.json?limit=1&query_term=';

         
        const form = document.getElementById("form")

              form.addEventListener("submit", async e => {
                        e.preventDefault()

                        //Con classList tenemos los metodos de add , remove y toggle
                        //Si yo me voy al inspecto y selecciono un elemento de html y despues me paso a la consola
                        //y pongo $0 me traera el elemento html que seleccione
               
                const featuring =  document.getElementById('featuring')
                const loader = document.createElement('img')
                setAttributes(loader, {
                        src: 'src/images/loader.gif',
                        height: 50,
                        width: 50,        
                })
    
                featuring.append(loader) 

                const data = new FormData(form);

                //para obtener estos datos en la consola lo hacemos con el nombre del objeto seguido del metodo get
                //y el name de mi input el cual quiero jalar sus valores
               console.log(data.get('name')  )

               const dataSearch = await getData(`${BASE_API}${data.get('name')}`)
               
               //modulo
                const dataPeli = dataSearch.data.movies === undefined ? null : dataSearch.data.movies
              
                featuring.innerHTML = templateFeaturing(dataPeli)

               document.getElementById('home').classList.add('search-active');
               document.getElementById('featuring-sub-cont').classList.add('show-featuring')   
               
               CloseFooter()

        })
        
    } catch (error) {
        console.log(`Ha ocurrido algun error ${error}` )
    }  
 
}

export default fetchMovies