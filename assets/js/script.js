document.getElementById('add-btn').addEventListener('click',function(event){
    const inputValue = document.getElementById('task-input').value;
    // const elementCount = document.getElementById('task-list').childElementCount;
    const li = document.createElement('li');
    li.setAttribute('class','single-task');
    // ${elementCount}
    li.innerHTML = `
        <h2 class="task-number"></h2>
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





    const lists = document.querySelectorAll('#task-list li.single-task h2');
    let count = 1;
     for( list of lists) {
        list.innerText = count;
        count++

     }
});
function doneCurrentTask(){
    event.target.parentNode.previousElementSibling.style.textDecoration='line-through';
    event.target.parentNode.previousElementSibling.style.textDecorationColor='lime';
    event.target.parentNode.previousElementSibling.style.textDecorationThickness='25%';
    event.target.parentNode.previousElementSibling.style.textDecorationStyle='dashed';
    event.target.parentNode.previousElementSibling.setAttribute('title','completed');
}
function deleteCurrentTask(){
    event.target.parentNode.parentNode.remove();

    const lists = document.querySelectorAll('#task-list li.single-task h2');
    let count = 1;
     for( list of lists) {
        list.innerText = count;
        count++

     }
};
// document.getElementById('add-btn').addEventListener('click',function(){

// });
