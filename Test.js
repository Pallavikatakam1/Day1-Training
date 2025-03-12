function updateTime() {
    const now = new Date(); // getting date
    let hours = now.getHours(); //getting hours
    let minutes = String(now.getMinutes()).padStart(2, '0'); //getting minutes
    let seconds = String(now.getSeconds()).padStart(2, '0'); //getting seconnds
    const ampm = hours >= 12 ? 'PM' : 'AM'; // confirming weather AM or PM

    const date = `${now.toLocaleString('en-US', { weekday: 'long' })},${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`; //printing the date in required format

    document.getElementById('datetime').textContent = `${date} ${hours}:${minutes}:${seconds} ${ampm}`; //formatting the  date and time in required format
}

setInterval(updateTime, 1000);  // Update every second (1000ms)
