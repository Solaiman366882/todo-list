document.getElementById('add-btn').addEventListener('click',function(){
    const inputValue = document.getElementById('task-input').value;
    const elementCount = document.getElementById('task-list').childElementCount;
    const li = document.createElement('li');
    li.setAttribute('class','single-task');
    li.innerHTML = `
        <h2 class="task-number">${elementCount}</h2>
        <p class="task-description"></p>
        <div class="action-btn-area">
            <button class="btn" onclick="doneCurrentTask()">done</button>
            <button class="btn task-delete" onclick="deleteCurrentTask()" >delete</button>
        </div>
    `;
    const listContainer = document.getElementById('task-list');
    listContainer.appendChild(li);
    document.querySelector('.single-task:last-child > p').innerText = inputValue; 
    document.getElementById('task-input').value = '';
});
function doneCurrentTask(){
    event.target.parentNode.previousElementSibling.style.textDecoration='line-through';
}
function deleteCurrentTask(){
    event.target.parentNode.parentNode.remove();
};
