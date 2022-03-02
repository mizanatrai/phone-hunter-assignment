// const loadApi = () => {
// const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
// fetch (url)
// .then (res => res.json())
// .then (data => console.log(data.data))
// }

// loadApi();

const searchProducts = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    searchField.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    // console.log(url);
    fetch (url)
    .then (res => res.json())
    .then (data => displaySearchResults(data.data.slice(0, 20)))
}

const displaySearchResults =(products) => {
const searchResult = document.getElementById('search-result');
products.forEach(product => {
    // console.log(product)
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card">
        <img src="${product.image}" class="card-img-top w-50 mx-auto" alt="...">
            <div class="card-body custom-bg">
                <h5 class="card-title">${product.phone_name}</h5>
                <p class="card-text">Brand: ${product.brand}</p>
                <a onclick="loadPhoneDetails('${product.slug}')" class="btn btn-success" href="#">Details</a>
            </div>
    </div>
    `;
    searchResult.appendChild(div);
})
}
const loadPhoneDetails = (phoneId) => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch (url)
    .then (res => res.json())
    .then (data => displayPhoneDetails(data.data))
const displayPhoneDetails = (phone) => {
    console.log(phone.image);
const infoContainer = document.getElementById('info-container');
infoContainer.innerHTML = '';
const div = document.createElement('div');
div.classList.add('col');
div.innerHTML =`
<div class="card p-3 shadow-lg">
    <img src="${phone.image}" class="card-img-top img-fluid w-50 mx-auto" alt="...">
    <div class="card-body">
        <p class="card-title"> <span class="fw-bold">Brand</span> : ${phone.brand}</p>
        <p class="card-title"> <span class="fw-bold">Brand</span> : ${phone.name}</p>
        <p class="card-title"> <span class="fw-bold">Brand</span> : ${phone.mainFeatures.chipSet}</p>
        <p class="card-title"> <span class="fw-bold">Brand</span> : ${phone.mainFeatures.displaySize}</p>
        <p class="card-title"> <span class="fw-bold">Brand</span> : ${phone.mainFeatures.memory}</p>
        <p class="card-title"> <span class="fw-bold">Brand</span> : ${phone.mainFeatures.sensors}</p>
        <p class="card-title"> <span class="fw-bold">Brand</span> : ${phone.releaseDate}</p>
    </div>
</div>
`;
infoContainer.appendChild(div);
}
}