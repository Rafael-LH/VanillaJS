

 const CloseFooter = () => (
     document.getElementById('close-footer').addEventListener('click', () => {

         document.getElementById('home').classList.remove('search-active');
         document.getElementById('featuring-sub-cont').classList.remove('show-featuring')   

    })
 )

    export default CloseFooter;