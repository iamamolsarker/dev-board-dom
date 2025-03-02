const currentDate = new Date();
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const day = days[currentDate.getDay()];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const currentMonth = months[currentDate.getMonth()];
const date = currentDate.getDate();
const dateString = date.toString().padStart(2, '0');
const currentYear = currentDate.getFullYear();

const p = document.createElement('p');
p.classList.add('text-xl', 'text-[#00303C]');
p.innerHTML = `
    ${day},<br><b>${currentMonth} ${date} ${currentYear}</b>
`
const dateContainer = document.getElementById('date-container');
dateContainer.appendChild(p);


