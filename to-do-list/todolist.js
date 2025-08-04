const input = document.getElementById('taskInput');
const button = document.getElementById('ekle');
const ul = document.getElementById('taskList');

button.addEventListener('click', () => {
  const task = input.value.trim();

  if (task === '') {
    alert('Lütfen bir görev girin.');
    return;
  }

  // <li> oluştur
  const li = document.createElement('li');
  li.textContent = task;
  li.style.marginLeft='680px';

  // Sil butonu oluştur
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Sil';
  deleteBtn.style.marginLeft = '50px';
  deleteBtn.style.backgroundColor = 'crimson';
  deleteBtn.style.color = 'white';
  deleteBtn.style.border = 'none';
  deleteBtn.style.padding = '4px 8px';
  deleteBtn.style.cursor = 'pointer';

  // Silme işlevi
  deleteBtn.addEventListener('click', () => {
    li.remove(); // bu <li>’yi sil
  });

  // <li> içine sil butonunu ekle
  li.appendChild(deleteBtn);

  // <li>’yi listeye ekle
  ul.appendChild(li);

  // input'u temizle
  input.value = '';
});
