let data = document.querySelector('#information');
data.addEventListener('keydown', () => {
    localStorage.setItem('name',data.value);
});

if(localStorage.getItem('name')) {
    data.value = localStorage.getItem('name');
}