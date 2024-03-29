const input = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');

input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter' && input.value.trim() !== '') {
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';
        todoItem.innerHTML = `
            <input type="checkbox">
            <span>${input.value}</span>
            <button>Delete</button>
        `;
        todoList.appendChild(todoItem);
        input.value = '';
    }
});

todoList.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove();
    }
});

todoList.addEventListener('change', function (e) {
    if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
        const span = e.target.nextElementSibling;
        if (e.target.checked) {
            span.style.textDecoration = 'line-through';
        } else {
            span.style.textDecoration = 'none';
        }
    }
});