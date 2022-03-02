const searchProducts = () =>{
    const searchField = document.getElementById('search-field');
    const searchRaw = searchField.value;
    const searchText = searchRaw.toLowerCase();

    searchField.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    // console.log(url);
    fetch (url)
    .then (res => res.json())
    .then (data => displaySearchResults(data))
}

const displaySearchResults =(products) => {
const searchResult = document.getElementById('search-result');
searchResult.innerHTML = '';
const infoContainer = document.getElementById('info-container');
infoContainer.textContent = '';

                     // error handle 

if (products.status == false){
    searchResult.textContent = '';
    alert('No product found!');
}
else {
products.data.slice(0, 20).forEach(product => {
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card">
        <img src="${product.image}" class="my-3 card-img-top w-50 mx-auto" alt="...">
            <div class="card-body custom-bg">
                <h5 class="card-title">${product.phone_name}</h5>
                <p class="card-text">Brand: ${product.brand}</p>
                <a onclick="loadPhoneDetails('${product.slug}')" class="btn btn-success" href="#">Details</a>
            </div>
    </div>
    `;
    searchResult.appendChild(div);

})}
}
                // Phone details show 

function loadPhoneDetails(phoneId) {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data));

    const displayPhoneDetails = (phone) => {
        const infoContainer = document.getElementById('info-container');
        infoContainer.textContent = '';
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
<div class="card p-3 shadow-lg">
    <img src="${phone.image}"class="card-img-top img-fluid w-50 mx-auto" alt="...">
    <div class="card-body">
        <p class="card-text"> <span class="fw-bold">Brand</span> : ${phone.brand}</p>
        <p class="card-text"> <span class="fw-bold">Name</span> : ${phone.name}</p>
        <p class="card-text"> <span class="fw-bold">Chipset</span> : ${phone.mainFeatures.chipSet}</p>
        <p class="card-text"> <span class="fw-bold">Display size</span> : ${phone.mainFeatures.displaySize}</p>
        <p class="card-text"> <span class="fw-bold">Storage</span> : ${phone.mainFeatures.memory}</p>
        <p class="card-text"> <span class="fw-bold">Sensors</span> : ${phone.mainFeatures.sensors}</p>
        <p class="card-text"> <span class="fw-bold">Release Date</span> : ${phone.releaseDate}</p>
        Others Features
        <br>
        <p class="card-text"> <span class="fw-bold">NFC</span> : ${phone?.others?.NFC}</p>
        <p class="card-text"> <span class="fw-bold">GPS</span> : ${phone.GPS}</p>
        <p class="card-text"> <span class="fw-bold">Bluetooth</span> : ${phone?.others?.Bluetooth}</p>
        <p class="card-text"> <span class="fw-bold">Radio</span> : ${phone?.others?.Radio}</p>
    </div>
</div>
`;
        infoContainer.appendChild(div);
    };
}