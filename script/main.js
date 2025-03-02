const taskBox = document.querySelectorAll('.task-box');
const taskBoxLength = taskBox.length;
const totalAssignedTask = taskBoxLength.toString().padStart(2, '0');
document.getElementById('task-assigned').innerText = totalAssignedTask;
for(const task of taskBox){
    const completeButton = task.querySelector('.task-completed-btn');
    const taskTitle = task.querySelector('.task-title').innerText;
    completeButton.addEventListener('click', function(event){
        alert('Task Completed Successfully');
        event.target.setAttribute('disabled', 'true');
        let taskAssigned = convertInnerTextToNumById('task-assigned');
        let totalCompletedTask = convertInnerTextToNumById('total-completed-task');
        taskAssigned -= 1;
        totalCompletedTask += 1;
        if(taskAssigned <= 0){
            alert('Congrates!! All the task are successfully Completed!')
            document.getElementById('task-assigned').innerText = 0;
        }
        else{
            const newTaskAssigned = taskAssigned.toString().padStart(2, '0');
            document.getElementById('task-assigned').innerText = newTaskAssigned;
        }
        document.getElementById('total-completed-task').innerText = totalCompletedTask;

        const currentDate = new Date();
        const currentTime = currentDate.toLocaleTimeString();
        

        const p = document.createElement('p');
        p.classList.add('bg-[#F4F7FF]', 'p-4', 'rounded-xl', 'text-[#000000a5]')
        p.innerHTML = `
            You have Complete The Task <span class="font-medium">'${taskTitle}'</span> at ${currentTime}
        `
        const activityLogContainer = document.getElementById('activity-log-container');
        activityLogContainer.appendChild(p);
    })
}
