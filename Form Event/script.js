const submitAction = document.getElementById('formDataDiri');
 
submitAction.addEventListener('submit', function (e) {
  const inputNama = document.getElementById('inputNama').value;
  const inputDomisili = document.getElementById('inputDomisili').value;
  const hiddenMessage = 'Halo ' + inputNama + ', bagaimana cuacanya di ' + inputDomisili + '?';
 
  document.getElementById('messageAfterSubmit').innerText = hiddenMessage;
  e.preventDefault();
});