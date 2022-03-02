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
    console.log(product)
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card">
        <img src="${product.image}" class="card-img-top w-50 mx-auto" alt="...">
            <div class="card-body">
                <h5 class="card-title">${product.phone_name}</h5>
                <p class="card-text">Brand: ${product.brand}</p>
                <a class="btn btn-success" href="#">Details</a>
            </div>
    </div>
    `;
    searchResult.appendChild(div);
})
}