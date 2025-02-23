let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
menu.onclick = () => {
    navbar.classList.toggle('active');
}
 
window.onscroll = () => {
    navbar.classList.remove('active');
}

const dFurniture = [{
    id: 'frntrchc1',
    type: 'couch',
    name: 'Single Couch',
    description: 'Sofa kecil untuk satu orang yang sangat cocok untuk santai serambi membaca buku atau menyeduh teh hangat',
    currency: 'Rs',
    price: 20000,
    img_link: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80',
},
{
    id: 'frntrchc2',
    type: 'couch',
    name: 'Big Size Sofa',
    description: 'Sofa dengan ukuran besar yang cocok untuk berkumpul dengan keluarga, menggunakan busa super-soft yang dilapisi dengan bahan yang halus dan lembut sehingga nyaman di kulit',
    currency: 'Rs',
    price: 25000,
    img_link: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=661&q=80',
},
{
    id: 'frntrchc3',
    type: 'couch',
    name: 'Big Size Leather Sofa',
    description: 'Sofa dengan ukuran besar yang cocok untuk berkumpul dengan keluarga, menggunakan busa super-soft yang dilapisi dengan bahan kulit berkualitas sehingga nyaman di kulit dan tidak mudah retak',
    currency: 'Rs',
    price: 45000,
    img_link: 'https://images.unsplash.com/photo-1628512743826-2c28a508ad5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
},
{
    id: 'frntrchr1',
    type: 'chair',
    name: 'Single Black Chair',
    description: 'Bangku dengan bahan kayu sebagai kaki-kaki dan plastik berkualitas tinggi sebagai sandaran yang dilapisi dengan busa super-soft sehingga nyaman digunakan untuk waktu yang lama',
    currency: 'Rp',
    price: 59999,
    img_link: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
},
{
    id: 'frntrchr2',
    type: 'chair',
    name: 'Simple Cafe Chair',
    description: 'Bangku kayu tinggi yang cocok untuk dapur dengan gaya cafe, menggunakan kayu kualitas tinggi sehingga awet dan tidak mudah lapuk',
    currency: 'Rs',
    price: 100000,
    img_link: 'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
},
{
    id: 'frntrchr3',
    type: 'chair',
    name: 'Simple Metal Chair',
    description: 'Bangku yang terbuat dari material metal yang tidak mudah berkarat dan juga kuat',
    currency: 'Rs',
    price: 29000,
    img_link: 'https://images.unsplash.com/photo-1551298370-9d3d53740c72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
},
{
    id: 'frntrshlf1',
    type: 'shelf',
    name: 'Long Hanging Shelf',
    description: 'Rak dinding minimalis berbahan kayu kualitas tinggi dengan ukuran yang panjang, cocok untuk menghias ruang tamu untuk terlihat lebih elegan',
    currency: 'Rs',
    price: 30000,
    img_link: 'https://images.unsplash.com/photo-1597072689227-8882273e8f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
},
{
    id: 'frntrshlf2',
    type: 'shelf',
    name: 'Trigonometri Hanging Shelf',
    description: 'Rak dinding berbahan kayu kualitas tinggi dengan penyangga berbahan metal yang berbentuk trigonometri menjadikannya terlihat minimalis dan elegan untuk diletakkan di sisi ruangan manapun',
    currency: 'Rs',
    price: 35000,
    img_link: 'https://images.unsplash.com/photo-1593085260707-5377ba37f868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=923&q=80',
},
{
    id: 'frntrshlf3',
    type: 'shelf',
    name: 'Bed-Side Shelf',
    description: 'Rak kecil yang sekaligus adalah meja yang cocok diletakkan di sisi ranjang anda untuk menyimpan buku yang sedang anda baca sekaligus minuman dan makanan pendampingnya',
    currency: 'Rs',
    price: 80000,
    img_link: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
},
{
    id: 'frntrlmp1',
    type: 'lamp',
    name: 'Architec Lamp',
    description: 'Lampu arsitek elegan dengan desain minimalis yang cocok untuk memberikan efek ambience di sudut ruangan ataupun pada meja kerja anda',
    currency: 'Rs',
    price: 28000,
    img_link: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
},
{
    id: 'frntrlmp2',
    type: 'lamp',
    name: 'Wooden Hanging Lamp',
    description: 'Lampu gantung dengan gaya geometris dan menggunakan tekstur kayu sehingga menghasilkan desain yang elegan dan tentu saja minimalis',
    currency: 'Rs',
    price: 31000,
    img_link: 'https://images.unsplash.com/photo-1530603907829-659ab5ec057b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
},
{
    id: 'frntrlmp3',
    type: 'lamp',
    name: 'Mini Arrchitec Lamp',
    description: 'Lampu arsitek ukuran kecil dengan desain yang elegandan minimalis, cocok untuk diletakkan pada meja kerja atau belajar anda',
    currency: 'Rs',
    price: 15000,
    img_link: 'https://images.unsplash.com/photo-1534105615256-13940a56ff44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
},
{
    id: 'frntrvs1',
    type: 'vase',
    name: 'Clear Minimalist Vase',
    description: 'Vas bunga kaca bening dengan desain elegan, cocok untuk diletakkan di ruang tamu',
    currency: 'Rs',
    price: 40000,
    img_link: 'https://images.unsplash.com/photo-1581912492723-688317ba2162?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=679&q=80',
},
{
    id: 'frntrvs2',
    type: 'vase',
    name: 'Petal Vase',
    description: 'Vas bunga kaca putih dengan desain unik yang melambangkan ketenangan dan kehangatan, dapat diletakkan pada meja keluarga',
    currency: 'Rs',
    price: 50000,
    img_link: 'https://images.unsplash.com/photo-1612620535624-f6695d4864bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
},
{
    id: 'frntrvs3',
    type: 'vase',
    name: 'Hanano Vase',
    description: 'Vas bunga kaca bening dengan aksen smoke-brown dan desain tabung mengerucut yang menghasilkan efek full tetapi dengan gaya yang minimalis',
    currency: 'Rs',
    price: 269000,
    img_link: 'https://images.unsplash.com/photo-1578500351865-d6c3706f46bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
},
{
    id: 'frntrdrwr1',
    type: 'drawer',
    name: 'Single Drawer Set',
    description: 'Laci single yang memiliki 3 tingkat dengan bagian bawah adalah laci yang terbesar, mengusung desain yang minimalis sehingga laci ini cocok untuk diletakkan di ruang keluarga maupun ruang tamu',
    currency: 'Rs',
    price: 300001,
    img_link: 'https://images.unsplash.com/photo-1591129841117-3adfd313e34f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
},
{
    id: 'frntrtbl1',
    type: 'table',
    name: 'Round Simple Table',
    description: 'Meja dengan desain bulat yang minimalis, menggunakan kayu sebagai kaki-kakinya dan plastik berkualitas tinggi untuk daun mejanya menjadikan meja ini cocok untuk digunakan indoor maupun outdoor',
    currency: 'Rs',
    price: 400002,
    img_link: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
},
{
    id: 'frntrdcr1',
    type: 'decoration',
    name: 'Artificial Succulen Plant Set',
    description: 'Tumbuhan sukulen imitasi berbahan plastik dengan tingkat kemiripan 99% dengan yang asli, cocok untuk menghias meja kerja anda dan memberikan nuansa hijau untuk menyegarkan mata',
    currency: 'Rs',
    price: 32000,
    img_link: 'https://images.unsplash.com/photo-1595351475754-8a520e0bc3a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
},
{
    id: 'frntrdcr2',
    type: 'decoration',
    name: 'Artificial Cactus Set',
    description: 'Tumbuhan kaktus imitasi berbahan plastik dengan tingkat kemiripan 99% dengan yang asli, cocok untuk menghias ruang keluarga dan memberikan nuansa kesegaran ditengah gurun',
    currency: 'Rs',
    price: 459000,
    img_link: 'https://images.unsplash.com/photo-1603204077779-bed963ea7d0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
},
{
    id: 'frntrdcr3',
    type: 'decoration',
    name: `Poster "GET SHIT DONE"`,
    description: `Poster bertuliskan "GET SHIT DONE" dengan desain minimalis dan frame kayu berkualitas, cocok untuk dipajang di ruangan kerja anda`,
    currency: 'Rs',
    price: 50000,
    img_link: 'https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
},
];

let cartItems = [];

function add_to_cart(id, name, imgLink, price) {

var newItem = {
    id: id,
    name: name,
    price: price,
    image: imgLink,
    quantity: 1
};
let exists = false;
cartItems.forEach((item) => {
    if (item.id === newItem.id) {
        exists = true;
        alert("This Item is already in the cart");
    }
})
if (!exists) {
    cartItems.push(newItem);

}

localStorage.setItem('cartItems', JSON.stringify(cartItems));

displayCartItems();
}

function deleteItem(itemToDelete) {

const indexToDelete = cartItems.findIndex(item => item.id === itemToDelete.id);


if (indexToDelete !== -1) {
    cartItems.splice(indexToDelete, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    displayCartItems();
}
}

function displayCartItems() {
var cartTableBody = document.getElementById("cart_table_body");
var totalPaySpan = document.getElementById("total_pay");
var totalCost = 0;


cartTableBody.innerHTML = "";


cartItems.forEach(function(item) {
    var row = document.createElement("tr");
    var productName = document.createElement("td");
    productName.textContent = item.name;

    var productImage = document.createElement("td");
    var img = document.createElement("img");
    img.src = item.image;
    img.style.width = "50px";
    productImage.appendChild(img);

    var quantityCell = document.createElement("td");
    var quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.value = item.quantity;
    quantityInput.min = "1";
    quantityInput.addEventListener("change", function() {

        item.quantity = parseInt(this.value);
        item.total = item.price * item.quantity;
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateTotal();
    });
    quantityCell.appendChild(quantityInput);

    var priceCell = document.createElement("td");
    priceCell.textContent = item.price.toLocaleString();


    console.log(item.total);
    var itemTotal = item.price * item.quantity;
    totalCost += itemTotal;
    console.log(item.quantity);
    var totalCell = document.createElement("td");


    var deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {

        deleteItem(item);
    });

    totalCell.appendChild(deleteButton);

    row.appendChild(productName);
    row.appendChild(productImage);
    row.appendChild(quantityCell);
    row.appendChild(priceCell);
    row.appendChild(totalCell);

    cartTableBody.appendChild(row);
});

totalPaySpan.textContent = totalCost.toLocaleString();
}


function updateTotal() {
var totalPaySpan = document.getElementById("total_pay");
var totalCost = 0;

cartItems.forEach(function(item) {
    var itemTotal = item.price * item.quantity;
    totalCost += itemTotal;
});

totalPaySpan.textContent = totalCost.toLocaleString();
}




function createProductCard(product) {
var colDiv = document.createElement("div");
colDiv.classList.add("col-12", "col-md-6", "col-lg-4", "mb-5");

var containerDiv = document.createElement("div");
containerDiv.classList.add("container2", "shadow");

var img = document.createElement("img");
img.src = product.img_link;
img.classList.add("w-100", "img2");

var textCenterDiv = document.createElement("div");
textCenterDiv.classList.add("text-center");

var heading = document.createElement("h1");
heading.classList.add("heading2");
heading.textContent = product.name;

var para = document.createElement("p");
para.classList.add("para3");
para.textContent = product.description;

var priceBtn = document.createElement("button");
priceBtn.classList.add("btn", "btn-danger");
priceBtn.textContent = product.currency + ' ' + product.price.toLocaleString();

var bookBtn = document.createElement("button");
bookBtn.classList.add("btn", "btn-primary");
bookBtn.textContent = "Book Now";
bookBtn.onclick = () => {
    console.log(product.img_link);
    add_to_cart(product.id, product.name, product.img_link, product.price);
}

textCenterDiv.appendChild(heading);
textCenterDiv.appendChild(para);
textCenterDiv.appendChild(priceBtn);
textCenterDiv.appendChild(bookBtn);

containerDiv.appendChild(img);
containerDiv.appendChild(textCenterDiv);

colDiv.appendChild(containerDiv);

colDiv.setAttribute("id", "product_" + product.id);

return colDiv;
}


var productContainer = document.getElementById("cont");
dFurniture.forEach((product) => {
var newProductCard = createProductCard(product);
productContainer.appendChild(newProductCard);
})