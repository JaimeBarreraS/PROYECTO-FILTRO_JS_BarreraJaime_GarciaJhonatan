let url = "https://api.spacexdata.com/v4/rockets";
    fetch(url)
    .then(res => res.json())
    .then(Data => {
        let info_rocket = document.getElementById("name");
        info_rocket.innerHTML+=`
        <h1>${Data[0].name}</h1>
        `;
        
    });
        