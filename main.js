let score = 0;
let max = 0;
let name = '';
const btn = document.querySelector('.btn');
const ul = document.querySelector('.items');

const myform = document.querySelector('#my-form'); 
const inputName = document.querySelector('#name'); 


function myTimeout(){
    if(score > max){
        max = score;
        ul.children[3].innerText = `max score : ${score} by ${name}`;

    }
    ul.children[0].innerText = `last score : ${score} by ${name}`;
    score = 0;
    ul.children[2].innerText = `${score}`;
    ul.children[1].innerText = 'Game Ended';
    document.querySelector('#my-form').style.background = null;
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    btn.addEventListener('mouseover', (e) => {
        e.preventDefault();
        name = inputName.value;
        if(name === ''){
            alert('Enter a name to play');
        }else{
    
            console.log(e.target.className);
            document.querySelector('#my-form').style.background = 'brown';
            score += 1;
            // console.log(score);
            ul.children[2].innerText = `${score}`;
            if(score === 1){
                ul.children[1].innerText = 'Game started';
                timeout = setTimeout(myTimeout, 5000);
            }
           
        }
    });
});


