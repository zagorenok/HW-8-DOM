const wrapper = document.querySelector('.wrapper');
const input = document.querySelector('input');
const list = document.querySelector('.list');

wrapper.addEventListener('click', (event) => {
   let action = event.target.dataset.action;
   let elem = event.target;

   switch (action) {
       case 'add-item':
           addItem();
           break;
       case 'remove-item':
           removeItem(elem);
           break;
       case 'change-toggle':
           changeToggle(elem);
           break;
   }
});

function addItem() {
    const li = document.createElement('li');
    li.dataset.action = 'change-toggle';
    li.innerHTML = `${input.value} <button data-action="remove-item">Remove item</button>`;
    list.append(li);
}

function removeItem(el) {
  el.closest('li').remove();
}

function changeToggle(el) {
    el.classList.toggle('done');
}