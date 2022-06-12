const gambar = document.getElementById('gambar');
gambar.setAttribute('width', 300);
gambar.setAttribute('height', 150);

const playBtn = document.querySelectorAll('.button')[3];
const playBtnElement = playBtn.children[0];
playBtnElement.setAttribute('disabled', 'true');

const dicodingLink = document.querySelector("#links ul li:nth-child(1) a");
// console.log(dicodingLink);
dicodingLink.innerText = 'Belajar Programming di Dicoding';
dicodingLink.setAttribute('target', '_blank');