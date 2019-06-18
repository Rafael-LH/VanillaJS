

    const videoItemTemplate = (url, title) => (
            `<div class="primaryPlaylistItem">
                <div class="primaryPlaylistItem-image">
                <img class="img-list" src="${url}">
                </div>
                <h4 class="primaryPlaylistItem-title">
                ${title}
                </h4>
            </div>`
    )

   export default videoItemTemplate     