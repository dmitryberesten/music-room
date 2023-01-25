class Header {

  // обробник подій який відкриває сторінку замовлень
  handlerOpenShoppingPage() {
    shoppingPage.render();
  }

  // розмітка для сторінки
  render(count) {
    const html = `
           <div class="header-container">

           <div class="img-logo">
             <a href="./main.html">
             <img class="img-logo__image" src="img/favicon.png">
             </a>
           </div>

            <div class="center-heading">
            
            <a href="./main.html">
            <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Music Room</h1>
            </a>
            </div>

            <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
                <span class="cart">
                <svg class="icon-basket">
                    <use href="./img/symbol-defs.svg#icon-shopping-basket"></use>
                </svg>
                </span>  ${count}</div>
            </div>
        `;

    // присвоєння шаблонної строки прямо на сторінку
    ROOT_HEADER.innerHTML = html;
  }
}

// екземпляр класа
const headerPage = new Header();
