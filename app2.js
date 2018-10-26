let drumMachine = document.querySelector('.container');

let divs = document.querySelectorAll('.col-1');

let tags = [];

divs.forEach(function(div) {
    tags.push(div); 
});

console.log(tags);

drumMachine.addEventListener('click', function(e) {    
    let cur = e.target.childNodes[1];
        cur.play('src');
    
    e.target.style.backgroundColor = 'rgb(92, 188, 234, .8)'; 
     
    setTimeout(function() {
           e.target.style.backgroundColor = ''; 
    }, 100);
   
    
});




   