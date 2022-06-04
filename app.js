const add = document.querySelector(".add");
const minus = document.querySelector(".minus");
const addtocart = document.querySelector(".addtocart-button");
const deleteitem = document.querySelector(".delete");
const quantitycart = document.querySelector(".quantity");
const finalpricecart = document.querySelector(".finalprice");
const item = document.querySelector(".item");
const items = document.querySelector(".items");
const mainpic = document.querySelector(".mainpic");
const checkout = document.querySelector(".checkout");
const menuClose = document.querySelector(".menu-close");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const all = document.querySelectorAll(".lightroom");
const close = document.querySelector(".close");


let quantity = 1;

add.addEventListener("click", function() {
    quantity++;
    document.querySelector(".volumetxt").innerHTML = quantity;
});

minus.addEventListener("click", function() {
    if (quantity > 0) {
        quantity--;
        document.querySelector(".volumetxt").innerHTML = quantity;
    }
});

let price = 125;
let finalprice = 0;
let allquantity =0;

addtocart.addEventListener("click", function() {
    finalprice = finalprice + (quantity * price);
    item.style.display = "flex";
    checkout.style.display = "flex";
    allquantity = allquantity + quantity;
    document.querySelector(".quantity").innerHTML = allquantity;
    document.querySelector(".finalprice").innerHTML = finalprice;
    document.querySelector(".quantityCircle").innerHTML = allquantity;
    document.querySelector(".quantityCircle").style.opacity = 1;
    if (isthere === true) {
        const nitem = document.querySelector(".newitem");
        nitem.remove();
        isthere = false; 
    }
});

let isthere = false;
let wastherefirst = false;

if (wastherefirst == false) {
    checkout.style.display = "none";
    item.style.display = "none";
    let newitem = document.createElement("p");
    newitem.innerHTML = "Your cart is empty";
    newitem.style.margin = "-50";
    newitem.setAttribute("class", "newitem");
    items.appendChild(newitem);
    document.querySelector(".quantityCircle").style.opacity = "0";
    isthere = true;
    wastherefirst = true;
}

deleteitem.addEventListener("click", function() {
    item.style.display = "none";
    checkout.style.display = "none";
    finalprice = 0;
    allquantity = 0;
    let newitem = document.createElement("p");
    newitem.innerHTML = "Your cart is empty";
    newitem.style.margin = "-50";
    newitem.setAttribute("class", "newitem");
    items.appendChild(newitem);
    document.querySelector(".quantityCircle").innerHTML = "";
    document.querySelector(".quantityCircle").style.opacity = "0";
    isthere = true;
});

function currentpic(n) {
    document.querySelector("#active").removeAttribute("id", "active");
    mainpic.src = "./images/image-product-" + n + ".jpg";
    const active = document.querySelector(".demo"+n);
    active.setAttribute("id", "active");
}

hamburgerMenu.addEventListener("click", function() {
    document.querySelector("#menu-content").style.display = "flex";
});


menuClose.addEventListener("click", function() {
    document.querySelector("#menu-content").style.display = "none";
});

let mobileCurrent = 1;

previous.addEventListener("click", function() {
    if (mobileCurrent === 0) {
        mobileCurrent = 5;
    }
    if (mobileCurrent >= 1) {
        mobileCurrent--;
        if (mobileCurrent <5 && mobileCurrent > 0) {
            currentpic(mobileCurrent);
        }                                    
    }
});

next.addEventListener("click", function() {
    if (mobileCurrent === 5) {
        mobileCurrent = 1;
    }
    if (mobileCurrent <= 4) {
        mobileCurrent++;
        if (mobileCurrent <5 && mobileCurrent > 0) {
            currentpic(mobileCurrent);
        }     
    }
});

all.addEventListener("click", function() {
    all.style.display = "none";
});

close.addEventListener("click", function() {
    close.style.display = "none";
});

mainpic.addEventListener("dbclick", function() {
    document.querySelector(".lightroom").style.display = "flex";
});