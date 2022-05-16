let foco =document.querySelector('img')

    foco.onclick = function (){
         let mySrc = foco.getAttribute('src')

        if (mySrc === 'images/focoOff.png') {
                foco.setAttribute('src', 'images/focoOn.png')
         }else {
             foco.setAttribute('src', 'images/focoOff.png')
         }
    }
   