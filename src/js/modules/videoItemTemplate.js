

    const videoItemTemplate = (url, title, summary, id) => (
            `<div class="primaryPlaylistItem" data-img="${url}"
                                              data-id="${id}"
                                              data-title="${title}"
                                              data-summary="${summary}" >
                <div class="primaryPlaylistItem-image">
                <img class="img-list" src="${url}">
                </div>
                <h4 class="primaryPlaylistItem-title">
                ${title}
                </h4>

            </div>`
    )

   export default videoItemTemplate     