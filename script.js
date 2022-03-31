'use strict'

const slider = [...document.getElementsByClassName('slider')] 
const left_arrow = document.getElementsByClassName('left_arrow')[0]
const right_arrow = document.getElementsByClassName('right_arrow')[0]
const ul = document.getElementsByTagName('ul')[0]
let slide = 0

function goBack(params) {
    
    for (let i = 0; i < slider.length; i++) {
        // const element = array[i];
        if (i!= slide) {
            let childrens = [...slider[i].children]
            childrens.forEach((e)=>{
                let direction = e.getAttribute('direction')
                e.style.transform = `translateX(${direction=='left'?'-':''}100%)`
            })
        }
        
    }
    
    
}

let remove = 0 
function removeZindex (){
    slider.forEach((e,i,array)=>{
        e.style.zIndex = 0
        remove++
        if (remove >= slider.length) {
            
            right_arrow.disabled =false
            left_arrow.disabled = false
        }
    })
        


}
goBack()




let childrens;
const change = (work) => {
    if (work == 'next') {

        right_arrow.disabled=true
        // slider[slide].style.zIndex = '300'
        
        childrens = [...slider[slide].children]
        childrens.forEach((e)=>{
            let direction = e.getAttribute('direction')
            e.style.transform = `translateX(${direction=='left'?'-':''}100%)`

            })
            
            slide++
            if (slide >= slider.length ) {
                slide = 0
            }
            // console.log(slide);

            slider[slide].style.zIndex = '300'

            childrens = [...slider[slide].children]

                childrens.forEach((e)=>{
                let direction = e.getAttribute('direction')
                e.style.transform = `translateX(0)`

            })
            setTimeout(() => {
                removeZindex()

            }, 1000);
            

    }
    else{

        left_arrow.disabled = true
        if (slide <= 0) {
            slide = slider.length 
        }
        slide--

        goBack()
        childrens = [...slider[slide].children]
        slider[slide].style.zIndex = '300'
        childrens.forEach((e)=>{
            e.style.transform = `translateX(0)`
            
        })
        setTimeout(() => {
            
            removeZindex()
        }, 1000);



    }
}



const show_nav = () =>{
    
    ul.classList.toggle('hide_nav')
}