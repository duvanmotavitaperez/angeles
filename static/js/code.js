window.onload = () => {

   const $itemMove1 = document.querySelectorAll('.container-move')[0]
   const $itemMove2 = document.querySelectorAll('.container-move')[1]
   const $itemMove3 = document.querySelectorAll('.container-move')[2]
   const $containerFixed = document.querySelector('.container-fixed')

   const oneBound = $itemMove1.getBoundingClientRect().x

   let count = 0
   let conf = true

   $containerFixed.addEventListener('click', (event) => conf = false)
   $containerFixed.addEventListener('mouseout', () => conf = true)
   
   setInterval(()=> {
      if(conf){
         const threeBound = $itemMove3.getBoundingClientRect().x
         if(threeBound <= oneBound){
         $itemMove1.style.transform = `translate(${0}px)`
         $itemMove2.style.transform = `translate(${0}px)`
         $itemMove3.style.transform = `translate(${0}px)`
         count = 0
         }
         else{
            $itemMove1.style.transform = `translate(-${count}px)`
            $itemMove2.style.transform = `translate(-${count}px)`
            $itemMove3.style.transform = `translate(-${count}px)`
            count += 0.1
         }
      }
   }, 3) 
}