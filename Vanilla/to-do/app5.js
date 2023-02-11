const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');

const inputTask = document.getElementById('input-task');

addTask.addEventListener('click', function(){
	let task = document.createElement('div');
	task.classList.add('task');

	let li = document.createElement('li');
	li.innerText = `${inputTask.value}`;
	task.appendChild(li);

	let checkButton = document.createElement('button');
	checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
	checkButton.classList.add('checkTask');
	task.appendChild(checkButton);

	let deleteButton = document.createElement('button');
	deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
	deleteButton.classList.add('deleteTask');
	task.appendChild(deleteButton);

	if(inputTask.value == ""){
		window.alert("Please enter a task");
	} else{
		taskContainer.appendChild(task);
	}

	inputTask.value = "";
	let checkButtonState = 0;
	checkButton.addEventListener('click', function(){
		if(checkButtonState == 0){
			checkButton.parentElement.style.textDecoration = 'line-through';
			checkButton.parentElement.style.fontStyle = 'italic';
			checkButtonState = 1;
		} else{
			checkButton.parentElement.removeAttribute('style');
			checkButtonState = 0;
		}
	});

	deleteButton.addEventListener('click', (e) => {
		taskContainer.removeChild(task);
	});
	
});