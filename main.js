const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    
    if (!isAsideClosed) {
        aside.classList.add('inactive');
       }
  
  
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    
    if (!isAsideClosed) {
        aside.classList.add('inactive');
       }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
   }

   aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike', 
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
}) 

productList.push({
    name: 'Pelota de Basketball', 
    price: 120,
    image: 'https://http2.mlstatic.com/D_NQ_NP_786479-MLA48643304793_122021-O.webp',
}) 
productList.push({
    name: 'Pantalla', 
    price: 330,
    image: 'https://www.lg.com/mx/images/televisores/md07538142/gallery/D-2.jpg',
}) 

productList.push({
    name: 'Iphone 13', 
    price: 150,
    image: 'https://www.macstation.com.ar/img/productos/2595-2.jpg',
}) 

productList.push({
    name: 'Reloj digital', 
    price: 120,
    image: 'https://www.eleventech.com.ar/9184-medium_default/pulsera-reloj-digital-tactil-led-blanco-para-ninos-varios-motivos.jpg',
}) 

for ( product of productList) {
   const productCard = document.createElement('div')
   productCard.classList.add('product-card')
   
   

   const productImg = document.createElement('img');
   productImg.setAttribute('src', product.image)
   
   const productInfo = document.createElement('div')
   productInfo.classList.add('product-info')

   const productInfoDiv = document.createElement('div')
   
   const productPrice = document.createElement('p');
   productPrice.innerText = '$' + product.price;
   const productName = document.createElement('p');
   productName.innerText = product.name;

   productInfoDiv.appendChild(productPrice);
   productInfoDiv.appendChild(productName);

   const productInfoFigure = document.createElement('figure');
   const productImgCart = document.createElement('img')
   productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
   
   productInfoFigure.appendChild(productImgCart);


   productInfo.appendChild(productInfoDiv);
   productInfo.appendChild(productInfoFigure);

   productCard.appendChild(productImg)
   productCard.appendChild(productInfo)

   cardsContainer.appendChild(productCard);

}


