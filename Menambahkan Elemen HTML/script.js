const newText = document.createElement('li');
newText.innerText = 'Selamat Menikmati';

const lists = document.getElementById('daftar');
lists.appendChild(newText);

const newText2 = document.createElement('li');
newText2.innerText = 'Hidupkan Kompor';

lists.insertBefore(newText2, lists.firstChild);