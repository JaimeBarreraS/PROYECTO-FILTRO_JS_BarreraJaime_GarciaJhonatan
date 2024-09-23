fetch(`https://api.spacexdata.com/v4/company`)
.then(res => res.json())
.then(data => {
    let company = document.getElementById("titulo");
    company.innerHTML+=`
    
    `




})