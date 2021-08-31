function loadbuddies() {
    fetch('https://randomuser.me/api/?results=500')
        .then(res => res.json())
        .then(data => displayUsers(data))
};
loadbuddies();
const displayUsers = data => {
    const buddies = data.results
    const buddyDiv = document.getElementById('buddies');
    for (const buddy of buddies) {
        // console.log(buddy.name.last);
        const div = document.createElement('div')
        div.style.border = '2px solid red'
        div.style.borderRadius = '10px'
        div.style.margin = '10px'
        div.style.padding = '20px'
        buddyDiv.style.display = 'grid'
        buddyDiv.style.gridTemplateColumns = 'repeat(3, 1fr)'
        buddyDiv.style.textAlign = 'center'
        div.innerHTML = `
        <img src="${buddy.picture.large}" alt="">
        <h3>${buddy.name.title}. ${buddy.name.first} ${buddy.name.last}</h3>
        <p>Street Address: ${buddy.location.street.name} ${buddy.location.street.number}</p>
        <p>latitude:${buddy.location.coordinates.latitude} longitude:${buddy.location.coordinates.longitude}</p>
        <p>Postcode: ${buddy.location.postcode}</p>
        <p>City:${buddy.location.city}</p>
        <p>State:${buddy.location.state}</p>
        <p>Country: ${buddy.location.country}</p>
        <p>Timezone: ${buddy.location.timezone.description}, ${buddy.location.timezone.offset}</p>
        `
        buddyDiv.appendChild(div)
    }

}