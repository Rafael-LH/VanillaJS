
      const templateFeaturing = dataSearch => (
              ` <div class="featuring" id="featuring-sub-cont">
                    <span class="cerrar-footer-search" id="close-footer">x</span>
                    <div class="featuring-image">
                      <img src="${(dataSearch) ? dataSearch[0].medium_cover_image : ''}" width="70" height="100" alt="Not Found">
                    </div>
                    <div class="featuring-content">
                      <p class="featuring-title">${(dataSearch) ? 'Titulo de la Pelicula' : 'Pelicula No encontrada' }</p>
                      <p class="featuring-album">${(dataSearch) ? dataSearch[0].title : ''}</p>
                    </div>
                </div>`
      )


export default templateFeaturing      