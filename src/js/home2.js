import '../css/styles.css'
import fetchMovies from './modules/fetchMovies'
        
        //modulo fetch
        fetchMovies()
        
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

        
        document.getElementById("form").addEventListener("submit", e => {
                        e.preventDefault()

                        //Con classList tenemos los metodos de add , remove y toggle
                        //Si yo me voy al inspecto y selecciono un elemento de html y despues me paso a la consola
                        //y pongo $0 me traera el elemento html que seleccione

               document.getElementById('home').classList.toggle('search-active');
               document.getElementById('featuring-sub-cont').classList.toggle('show-featuring')

               const loader = document.createElement('img')
               setAttributes(loader, {
                       src: 'src/images/loader.gif',
                       height: 50,
                       width: 50,        
               })
               const featuring =  document.getElementById('featuring')

               featuring.append(loader) 
        })

