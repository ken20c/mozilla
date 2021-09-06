const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

select.onchange = function() {
  const choice = select.value;

  // 条件式をここに書く
    switch (choice) {
        case 1, 3, 5, 7, 8, 10, 12:
            createCalendar(31, choice + ' 月');
            break;
        case 2:
            createCalendar(28, choice+' 月');
            break;
        default:
            createCalendar(30, choice+' 月');
    }
}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}