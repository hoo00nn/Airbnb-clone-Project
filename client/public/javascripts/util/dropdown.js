let dropdown = document.getElementsByClassName('dropdown');

for(let i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener('click', (e) => {
    const dropdown = e.currentTarget;
    
    if(dropdown.classList.contains('closed')) dropdown.classList.remove('closed');
    else dropdown.classList.add('closed');
  })
}