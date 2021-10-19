//Copiu
window.onload = () => {
   document.addEventListener('keyboard', (event) => {
      console.log(event.key)
})
   const $containerFixed = document.querySelector('.container-fixed')
   window.innerWidth >= 1500 ?
      $containerFixed.innerHTML += `<div class='container-move'>${document.querySelectorAll('.container-move')[1].innerHTML}</div>`  
      : null
   let $itemMove0 = document.querySelectorAll('.container-move')[0]
   let $itemMove1 = document.querySelectorAll('.container-move')[1]
   let $itemMove2 = document.querySelectorAll('.container-move')[2]
   let $itemMove3 = document.querySelectorAll('.container-move')[3] || null
   let $menuButton = document.querySelector('i.menu-icon')
   let $ul = document.querySelector('menu ul')
   let moveIcon = true

   //This is the effect in the menu
   $menuButton.addEventListener('click', () => {
        var count = 14.9
        moveIcon 
        ? !function() {
              let timeLeft = setInterval(()=> {
                                 $ul.style.transform = `translate(${count}rem)`
                                 count -= .2
                                 if(count <= 0){
                                    clearInterval(timeLeft)
                                    count = 0
                                 }
                              }, 1)
               $ul.focus()
           }() 
        : !function() {
             let coun = .1
             let timeRight = setInterval(()=> {
                                 $ul.style.transform = `translate(${coun}rem)`
                                 coun += .2
                                 if(coun >= 14.9){
                                    clearInterval(timeRight)
                                    coun = 14.9
                                 }
                              }, 1) 
            }() 
      moveIcon = moveIcon ? false : true
   })
   $ul.addEventListener('blur', () => {
      alert('test')
             let coun = .1
             let timeRight = setInterval(()=> {
                                 $ul.style.transform = `translate(${coun}rem)`
                                 coun += .2
                                 if(coun >= 14.9){
                                    clearInterval(timeRight)
                                    coun = 14.9
                                 }
                              }, 1) 
            })
   const oneBound = $itemMove0.getBoundingClientRect().x

   let count = 0
   let conf = true

   $containerFixed.addEventListener('click', (event) => conf = false)
   $containerFixed.addEventListener('mouseout', () => conf = true)
   
   setInterval(()=> {
      if(conf){
         let threeBound = $itemMove2.getBoundingClientRect().x
         if(threeBound <= oneBound){
         $itemMove0.style.transform = `translate(${0}px)`
         $itemMove1.style.transform = `translate(${0}px)`
         $itemMove2.style.transform = `translate(${0}px)`
         $itemMove3 ? $itemMove3.style.transform = `translate(${0}px)` : null
         count = 0
         }
         else{
            $itemMove0.style.transform = `translate(-${count}px)`
            $itemMove1.style.transform = `translate(-${count}px)`
            $itemMove2.style.transform = `translate(-${count}px)`
            $itemMove3 != null ? $itemMove3.style.transform = `translate(-${count}px)` : null
            count += 0.1
         }
      }
   }, 3) 
}
