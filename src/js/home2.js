import '../css/styles.css'
import fetchMovies from './modules/fetchMovies'
        
        fetchMovies()
            
        document.getElementById("form").addEventListener("submit", e => {
                        e.preventDefault()

                        //Con classList tenemos los metodos de add , remove y toggle
                        //Si yo me voy al inspecto y selecciono un elemento de html y despues me paso a la consola
                        //y pongo $0 me traera el elemento html que seleccione

               document.getElementById('home').classList.toggle('search-active');
               document.getElementById('featuring-sub-cont').classList.toggle('show-featuring')

        })

