
let index=0;
const dots=document.querySelectorAll('.dot');

function toogle(){
    if(index>0){
        dots[index-1].classList.remove('active');
    }
    else{
        dots[dots.length-1].classList.remove('active');
    }
    dots[index].classList.add('active');
    index=(index +1)% dots.length;
}
setInterval(toogle,2500);


const holder=document.querySelector('#holder');

function changeImage(input){
    if(input == '1'){
        holder.src='assets/bgimg1.jpg';
    }
    else if (input == '2'){
        holder.src='assets/image.png';
    }
    else if(input =='3'){
        holder.src='assets/bgimg2.jpg';
    }
}

const contact=document.querySelector('#contact');

function contactForm(){
    contact.style.top='50%';
}

function hideForm(){
    contact.style.top='-50%'
}
