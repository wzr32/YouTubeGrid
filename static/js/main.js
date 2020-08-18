document.querySelector('#menu-btn').addEventListener('click', () => {
    document.querySelector('#container').classList.toggle('active');
});

const checkWidth = () => {
    if(window.innerWidth <= 768){
        document.querySelector('#container').classList.remove('active');
    } else {
        document.querySelector('#container').classList.add('active');
    }
};

checkWidth();

window.addEventListener('resize', () => {
    checkWidth();
});
