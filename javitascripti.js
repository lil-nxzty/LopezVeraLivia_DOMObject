const fortnite = document.getElementById('myDiv');
const forty = document.createElement('h1');
const heyyy = document.createElement('p');
const haha = document.createElement('ul');
const hehe = document.createElement('li');
const hihi = document.createElement('li');
const hoho = document.createElement('li');
forty.textContent = 'Welcome to DOM homework';
heyyy.textContent = 'This is your first DOM homework assignment';
hehe.textContent = 'Never';
hihi.textContent = 'Gonna';
hoho.textContent = 'Give';
haha.appendChild(hehe);
haha.appendChild(hihi);
haha.appendChild(hoho);
fortnite.appendChild(forty);
fortnite.appendChild(heyyy);
fortnite.appendChild(haha);
forty.classList.add('highlight');
const haii = document.querySelector(".highlight");
haii.style.backgroundColor = 'red';
const gooba = document.createElement('button');
document.body.appendChild(gooba);
gooba.addEventListener('click', newlistitem);
let i = 0;
const colors = [
    'peru', 'tomato', 'mediumseagreen', 'dodgerblue', 'gold', 
    'orchid', 'crimson', 'darkorange', 'slateblue', 'turquoise'
    ];
function newlistitem() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const li = document.createElement('li');
    li.textContent = `New list item ${i}`;
    i++;
    li.style.color = randomColor;
    haha.appendChild(li);
};
fortnite.addEventListener('click',newcolor);
function newcolor() {
    const randombackground = colors[Math.floor(Math.random() * colors.length)];
    fortnite.style.backgroundColor = randombackground;
};