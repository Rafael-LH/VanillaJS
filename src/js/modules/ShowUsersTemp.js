
const ShowUsersTemp = (userName, img) => (
    `<li class="playlistFriends-item">
         <a href="#">
         <img src="${img}" alt="${userName}" />
         <span>
             ${userName}
         </span>
         </a>
     </li>`
)

export default ShowUsersTemp