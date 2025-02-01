function Timer() {
    setInterval(() => {
        const date = new Date();
        let seconds = date.getSeconds();
        let minutes = date.getMinutes();
        let hours = date.getHours();
        let day = date.getDay();
        let month = date.getMonth();
        const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
        const monthList = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        const dayName = daylist[day];
        const monthName = monthList[month];
        let prepand;

        if(hours <= 12){
            prepand = "AM";
        } else {
            prepand = "PM";
            hours = hours - 12;
        }

        document.getElementById('month').innerHTML = `Month: ${monthName}`;
        document.getElementById('day').innerHTML = `Day: ${dayName}`;
        document.getElementById('time').innerHTML = `Time: ${hours}:${minutes}:${seconds}  ${prepand} `;
    }, 1000)
}

Timer();