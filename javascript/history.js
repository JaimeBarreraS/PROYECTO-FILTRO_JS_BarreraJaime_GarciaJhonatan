fetch(`https://api.spacexdata.com/v4/history`)
.then(res => res.json())
.then(data => {
    let history = document.getElementById("titulo");
    history.innerHTML+=`
    <h1>${data[4].title}</h1>
    `

    let details = document.getElementById("detalles");
    details.innerHTML+=`
    <h1>${data[4].details}</h1>
    
    `
    let event_date_utc = document.getElementById("event_date_utc");
    event_date_utc.innerHTML+=`
    <h1>${data[4].event_date_utc}</h1>
    
    `

    let article = document.getElementById("article");
    article.innerHTML+=`
    <h1>${data[4].links.article}</h1>
    
    `

    

})


