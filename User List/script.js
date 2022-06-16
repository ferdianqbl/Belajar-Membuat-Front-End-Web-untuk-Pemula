const storageKey = 'STORAGE_KEY';
const submitAction = document.getElementById('form-data-user');

function checkForStorage() {
  return typeof (Storage) !== 'undefined';
}

function putUserList(data) {
  if (checkForStorage()) {
    let userData = [];
    if (localStorage.getItem(storageKey) !== null) {
      userData = JSON.parse(localStorage.getItem(storageKey));
    }
    userData.unshift(data);
    if (userData.length > 5) {
      userData.pop();
    }
    localStorage.setItem(storageKey, JSON.stringify(userData));
  }
}

function getUserList() {
  if (checkForStorage()) {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  } else {
    return [];
  }
}

function renderUserList() {
  const userData = getUserList();
  const userList = document.querySelector('#user-list-detail');
  userList.innerHTML = '';
  userData.forEach((user) => {
    let row = document.createElement('tr');
    row.innerHTML = '<td>' + user.nama + '</td>';
    row.innerHTML += '<td>' + user.umur + '</td>';
    row.innerHTML += '<td>' + user.domisili + '</td>';
    userList.appendChild(row);
  })
}

submitAction.addEventListener('submit', function (event) {

  const nama = document.getElementById('nama').value;
  const umur = document.getElementById('umur').value;
  const domisili = document.getElementById('domisili').value;
  const newUserData = {
    nama,
    umur,
    domisili,
  };

  putUserList(newUserData);
  renderUserList();
  event.preventDefault();
  document.getElementById('nama').value = '';
  document.getElementById('umur').value = '';
  document.getElementById('domisili').value = '';
});

window.addEventListener('load', function () {
  if (checkForStorage) {
    if (localStorage.getItem(storageKey) !== null) {
      renderUserList();
    }
  } else {
    alert('Browser yang Anda gunakan tidak mendukung Web Storage');
  }
});