window.addEventListener('load', () => {
    const form = document.querySelector("#task-form");
    const input = document.querySelector("#task-input");
    const list_element = document.querySelector("#tasks");
    const completedList = document.querySelector("#completed-tasks");
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const task = input.value;
  
      const task_element = document.createElement('div');
      task_element.classList.add('task');
  
      const task_content_element = document.createElement('div');
      task_content_element.classList.add('content');
      task_element.appendChild(task_content_element);
  
      const task_input_element = document.createElement('input');
      task_input_element.classList.add('text');
      task_input_element.type = 'text';
      task_input_element.value = task;
      task_input_element.setAttribute('readonly', 'readonly');
  
      task_content_element.appendChild(task_input_element);
  
      const task_actions_element = document.createElement('div');
      task_actions_element.classList.add('actions');
  
      const task_update_element = document.createElement('button');
      task_update_element.classList.add('update');
      task_update_element.innerText = 'update';
  
      const task_delete_element = document.createElement('button');
      task_delete_element.classList.add('delete');
      task_delete_element.innerText = 'delete';
  
      task_actions_element.appendChild(task_update_element);
      task_actions_element.appendChild(task_delete_element);
  
      task_element.appendChild(task_actions_element);
  
      list_element.appendChild(task_element);
  
      input.value = '';
  
      task_update_element.addEventListener('click', (e) => {
        if (task_update_element.innerText.toLowerCase() == "update") {
          task_update_element.innerText = "Save";
          task_input_element.removeAttribute("readonly");
          task_input_element.focus();
        } else {
          task_update_element.innerText = "update";
          task_input_element.setAttribute("readonly", "readonly");
        }
      });
  
      task_delete_element.addEventListener('click', (e) => {
        list_element.removeChild(task_element);
        const completedTaskElement = createCompletedTaskElement(task_input_element.value);
        completedList.appendChild(completedTaskElement);
      });
    });
  
    function createCompletedTaskElement(task) {
        const completedTaskElement = document.createElement('div');
        completedTaskElement.classList.add('completed-task');
      
        const completedTaskTextElement = document.createElement('div');
        completedTaskTextElement.classList.add('completed-task-text');
        completedTaskTextElement.textContent = task;
      
        const completedIconElement = document.createElement('span');
        completedIconElement.classList.add('completed-icon');
        completedIconElement.innerHTML = '&#10004;'; // Tick symbol
      
        completedTaskElement.appendChild(completedTaskTextElement);
        completedTaskElement.appendChild(completedIconElement);
      
        return completedTaskElement;
      }
      
  });
  