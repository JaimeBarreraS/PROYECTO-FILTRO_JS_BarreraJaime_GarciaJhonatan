document.addEventListener('DOMContentLoaded', () => {
    const eventsContainer = document.getElementById('events-container');

    async function fetchSpaceXHistory() {
        const response = await fetch('https://api.spacexdata.com/v4/history');
        const data = await response.json();
        displayEvents(data);
    }

    function displayEvents(events) {
        eventsContainer.innerHTML = ''; 
        events.forEach(event => {
            const eventDiv = document.createElement('div');
            eventDiv.classList.add('event');

            const title = document.createElement('h3');
            title.textContent = event.title;

            const details = document.createElement('p');
            details.textContent = event.details ? event.details : 'Detalles no disponibles';

            const date = document.createElement('p');
            date.classList.add('date');
            const formattedDate = new Date(event.event_date_utc).toLocaleDateString();
            date.innerHTML = `<span> Fecha: ${formattedDate} </span>` ;

            eventDiv.appendChild(title);
            eventDiv.appendChild(details);
            eventDiv.appendChild(date);

            eventsContainer.appendChild(eventDiv);
        });
    }

    fetchSpaceXHistory();
});
