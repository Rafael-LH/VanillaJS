import ShowUsersTemp from './ShowUsersTemp'

    const FetchUsers = async () =>{

            try {
                const $data = await fetch(`https://randomuser.me/api/?results=15`);
                const $responseData = await $data.json();
                const $insertHTML = document.querySelector("#playlistFriends");
                
                $responseData.results.map(getData => {
                    $insertHTML.innerHTML += ShowUsersTemp(getData.login.username, getData.picture.medium)
                })

            } catch (error) {
                   console.error(`Ha ocurrido algun error ${error}`) 
            }

    }

    export default FetchUsers