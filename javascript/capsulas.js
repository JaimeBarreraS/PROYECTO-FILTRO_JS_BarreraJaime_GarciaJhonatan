document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("capsules-container");
    const searchInput = document.getElementById("search");

    fetch("https://api.spacexdata.com/v4/capsules")
        .then(response => response.json())
        .then(data => {
            container.innerHTML = '';

            const displayCapsules = (capsules) => {
                container.innerHTML = '';

                if (capsules.length === 0) {
                    container.innerHTML = '<p>No results found</p>';
                }

                capsules.forEach(capsule => {
                    const capsuleElement = document.createElement("div");
                    capsuleElement.classList.add("capsule");

                    if (capsule.status === 'active') {
                        capsuleElement.classList.add("active");
                    }

                    capsuleElement.innerHTML = `
                        <h2>${capsule.type}</h2>
                        <p><strong>Serial:</strong> ${capsule.serial}</p>
                        <p><strong>Status:</strong> ${capsule.status}</p>
                        <p><strong>Original Launch:</strong> ${capsule.original_launch || "No data"}</p>
                        <p><strong>Landings:</strong> ${capsule.land_landings}</p>
                        <p id="id"><strong id="id">ID:</strong> ${capsule.id}</p>
                    `;

                    container.appendChild(capsuleElement);
                });
            };

            displayCapsules(data);

            searchInput.addEventListener("input", (e) => {
                const searchTerm = e.target.value.toLowerCase();
                const filteredCapsules = data.filter(capsule =>
                    capsule.serial.toLowerCase().includes(searchTerm)
                );
                displayCapsules(filteredCapsules);
            });
        })

});


