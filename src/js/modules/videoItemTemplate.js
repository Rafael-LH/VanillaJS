

    const videoItemTemplate = (url, title, summary) => (
            `<div class="primaryPlaylistItem">
                <div class="primaryPlaylistItem-image">
                <img class="img-list" src="${url}">
                </div>
                <h4 class="primaryPlaylistItem-title">
                ${title}
                </h4>
                <input type="text" hidden class="summary" value="${summary}" />
                <input type="text" hidden class="title-movie" value="${title}" />
            </div>`
    )

   export default videoItemTemplate     