class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
            <div class="header-container">

           <div class="img-logo">
            <img class="img-logo__image" src="img/favicon.png">
           </div>

            <div class="center-heading">
            <h1>Music Room</h1>
            </div>

            <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
                <span class="cart">🛒</span>  ${count}</div>
            </div>
        `
        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();



