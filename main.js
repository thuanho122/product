class Product {
    constructor(id, name, type, price, img,) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.img = img;
    }
}
let products = [];
products = [
    new Product(1, "Bánh bèo", true, 10000, "img/banhbeo.jpeg"),
    new Product(2, "Bánh tiêu", true, 2000, "img/banhtieu.jpeg"),
    new Product(3, "Bánh gai", true, 2000, "img/banhgai.jpeg"),
    new Product(4, "Bánh nậm", true, 3000, "img/banhnam.jpeg"),
    new Product(5, "Bánh lọc", true, 3000, "img/banhloc.jpeg"),
    new Product(6, "Bún bò", false, 25000, "img/bunbo.jpeg"),
    new Product(7, "Bún hến", false, 20000, "img/bunhen.jpeg"),
    new Product(8, "Bún thịt nướng", false, 15000, "img/bunthitnuong.jpeg"),
    new Product(9, "Bún chả cá", false, 20000, "img/bunchaca.jpeg"),
];
function getAll() {
    document.getElementById('content').innerHTML = '';
    let html = '';
        for (let i = 0; i < products.length; i++) {
            html += `
            <div class="item">
            <img src="${products[i].img}">
            <p# class="type">${products[i].type ? `Bánh` : `Bún`}</p#>
            <h2 class="name">${products[i].name}</h2>
            <b class="price">${products[i].price} VNĐ</b>
            </div>
         `;
        }
    document.getElementById('content').innerHTML = html;
}
getAll();
function getAllBun() {
    document.getElementById('content').innerHTML = '';
    let html = '';
        for (let i = 0; i < products.length; i++) {
            if(!products[i].type) {
                html += `
                <div class="item">
                <img src="${products[i].img}">
                <p class="type">${products[i].type ? `Bánh` : `Bún`}</p>
                <h2 class="name">${products[i].name}</h2>
                <b class="price">${products[i].price} VNĐ</b>
                </div>
             `;
            }
        }
    document.getElementById('content').innerHTML = html;
}
function getAllBanh () {
    document.getElementById('content').innerHTML = '';
    let html = '';
        for (let i = 0; i < products.length; i++) {
            if(products[i].type) {
                html += `
                <div class="item">
                <img src="${products[i].img}">
                <p class="type">${products[i].type ? `Bánh` : `Bún`}</p>
                <h2 class="name">${products[i].name}</h2>
                <b class="price">${products[i].price} VNĐ</b>
                </div>
             `;
            }  
        }
    document.getElementById('content').innerHTML = html;
}
function getLocalStorage(key) {
    return window.localStorage.getItem(key);
}
function setLocalStorage(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data));
}






