const gambar = document.getElementById('gambar');
gambar.setAttribute('width', 300);
gambar.setAttribute('height', 150);

const playBtn = document.querySelectorAll('.button')[3];
const playBtnElement = playBtn.children[0];
playBtnElement.setAttribute('disabled', 'true');

const dicodingLink = document.querySelector("#links ul li:nth-child(1) a");
// console.log(dicodingLink);
dicodingLink.innerHTML = '<i>Belajar Programming di Dicoding<i>';
dicodingLink.setAttribute('target', '_blank');

const BtnAll = document.querySelectorAll('.button');

BtnAll.forEach(btn => {
  btn.childNodes[1].style.borderRadius = '10px';
})