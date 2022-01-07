const container = document.getElementById('container');
const sizeElement = document.querySelector('.size');
let size = sizeElement.value;
const color = document.querySelector('.color');
const generate = document.querySelector('.generate');

let draw = false;

/**
 * when the size is provided this fuction need to generate pixel boxes
 * 
 * 1. take the size as a parameter
 * 2. run a loop and use document.createElement() to create divs
 * 3. add the class pixel to it as well
 */
function populate(size){
    container.style.setProperty('--size', size);
    for(let i=0; i< size * size ;i++){
        const div = document.createElement('div');
        div.classList.add('pixel');
        
        div.addEventListener('mouseover', function(){
            if(!draw) return;
            div.style.backgroundColor = color.value;
        });
        div.addEventListener('mousedown', function(){
            div.style.backgroundColor = color.value;
        });

        container.appendChild(div);
    }
}
window.addEventListener("mousedown",function(){
    draw=true;
})
window.addEventListener("mouseup",function(){
    draw=false;
})
/** 
 * when the generate button is clicked 
 * new grid need to be generated with desired size
 * 
 * 1. listen to the generate button click
 * 2. when it is clicked call for populate button
*/
generate.addEventListener('click',function(){
    container.innerHTML = '';
    console.log(size);
    populate(size);
});
sizeElement.addEventListener('change',function(){
    size = sizeElement.value;
    populate(size);
})
populate(size);