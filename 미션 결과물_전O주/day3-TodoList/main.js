document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addButton'); // 할 일 추가 버튼
    const todoInput = document.getElementById('todo'); // 할 일 입력 필드
    const prioritySelect = document.getElementById('priority'); // 우선순위 선택 필드
    const taskList = document.querySelector('.memopad'); // 할 일 목록을 표시할 요소
    const filterButtons = document.querySelectorAll('.filter'); // 필터 버튼

    // 할 일 추가
    addButton.addEventListener('click', () => {
        const task = todoInput.value;
        const priority = prioritySelect.value;
        addTask(task, priority);
        todoInput.value = '';
    });

    // 우선순위 변경에 따른 클래스 변경
    prioritySelect.addEventListener('change', () => {
        switch(prioritySelect.value) {
            case 'low':
                prioritySelect.style.backgroundColor = '#F2F2FF'; // 낮음에 대한 색상
                break;
            case 'medium':
                prioritySelect.style.backgroundColor = '#CED0FF'; // 보통에 대한 색상
                break;
            case 'high':
                prioritySelect.style.backgroundColor = '#B4B7FF'; // 높음에 대한 색상
                break;
            case 'very-high':
                prioritySelect.style.backgroundColor = '#8489F9'; // 아주 높음에 대한 색상
                break;
            default:
                prioritySelect.style.backgroundColor = 'white'; // 기본 색상
        }
    });


    // 할 일 추가 함수
    function addTask(task, priority) {
        const taskItem = document.createElement('div');
        taskItem.className = `task priority-${priority}`;
        taskItem.innerHTML = `
            <input type="checkbox" class="task-checkbox">
            <span class="task-text">${task}</span>
            <button class="edit">수정</button>
            <button class="delete">삭제</button>
        `;

        taskItem.querySelector('.delete').addEventListener('click', () => {
            taskItem.remove();
        });
        taskItem.querySelector('.edit').addEventListener('click', () => {
            const newText = prompt('할 일 수정:', taskItem.querySelector('.task-text').textContent);
            if (newText) {
                taskItem.querySelector('.task-text').textContent = newText;
            }
        });

        taskList.appendChild(taskItem);
    }

    // 필터링 함수
    function filterTasks(filter) {
        const tasks = document.querySelectorAll('.task');

        tasks.forEach(task => {
            const isChecked = task.querySelector('.task-checkbox').checked;
            switch(filter) {
                case 'all':
                    task.style.display = 'flex';
                    break;
                case 'completed':
                    if (isChecked) {
                        task.style.display = 'flex';
                    } else {
                        task.style.display = 'none';
                    }
                    break;
                case 'pending':
                    if (!isChecked) {
                        task.style.display = 'flex';
                    } else {
                        task.style.display = 'none';
                    }
                    break;
            }
        });
    }

    // 필터 버튼 이벤트 리스너
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('filter-selected'));
            button.classList.add('filter-selected');
            filterTasks(button.id);
        });
    });
});
