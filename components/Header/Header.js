class Header { 
    handlerOpenShoppingPage() { 
        shoppingPage.render();
    }

    render(count) { 
        const html = `
            <div class="header-container">


            <!-- Додав -->
            <div class="lp-guitars">
            <a class="lp-guitars__link" href="index.html">Les Paul</a>
            </div>

            

            <div class="sg-guitars">
            <a class="sg-guitars__link" href="sg-guitars.html">SG</a>
            </div>
            <!-- Додав -->

            <div>Music Room</div>


                <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
                🗑️ ${count}</div>
            </div>
        `
        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();



