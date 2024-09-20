let url = "https://api.spacexdata.com/v4/rockets";
    fetch(url)
    .then(res => res.json())
    .then(Data => {
        Data.forEach(info => {
            let info_rocket = document.getElementById("name");

            info_rocket.innerHTML+=`
            <h1>${info.name}</h1>
            `
        });
        
    })