const body=document.querySelector('body');
const button=document.querySelector('button');
const colors=['red','blue','green','orange','pink','yellow','black','purple']

body.style.backgroundColor='brown';
button.addEventListener('click',changebackground);

function changebackground(){
    const colorindex= parseInt(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorindex];

}





