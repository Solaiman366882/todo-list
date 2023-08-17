document.getElementById('add-btn').addEventListener('click',function(){
    const inputValue = document.getElementById('task-input').value;
    const prevLiCountElement = parseFloat(document.querySelector('.single-task:last-child > h2').innerText);
    const li = document.createElement('li');
    li.setAttribute('class','single-task');
    li.innerHTML = `
        <h2 class="task-number"></h2>
        <p class="task-description">new task</p>
        <div class="action-btn-area">
            <button class="btn" id="task-done">done</button>
            <button class="btn task-delete">delete</button>
        </div>
    `;
    const listContainer = document.getElementById('task-list');
    listContainer.appendChild(li);
    document.querySelector('.single-task:last-child > h2').innerText = prevLiCountElement + 1; 
    document.querySelector('.single-task:last-child > p').innerText = inputValue; 
    document.getElementById('task-input').value = '';
});
document.querySelector('#task-done').addEventListener('click',function(){
    this.parentNode.previousElementSibling.style.textDecoration='line-through';
    console.log('clicked');
});
document.querySelectorAll('.task-delete').addEventListener('click',function(event){
    this.parentNode.parentNode.style.display='none';
    console.log(this.parentNode.parentNode);
    // console.log('clicked');
    console.log(event.target);

});
