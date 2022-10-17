class Shopping {
    handleClear() { 
        ROOT_SHOPPING.innerHTML = '';
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({ id, name, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name"><svg class="icon-pin">
                        <use href="./img/symbol-defs.svg#icon-thumb-tack"></use>
                    </svg> ${name}</td>
                        <td class="shopping-element__price"> ${price.toLocaleString()} $</td>
                    </tr>
                `;
                sumCatalog += price;
            }
        });

        const html = `
            <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.handleClear()"></div>
                <h2>Ваші замовлення:</h2>
                <table class="table-container">
                    ${htmlCatalog}
                     <tr>
                        <td class="shopping-element__name"><svg class="icon-price">
                        <use href="./img/symbol-defs.svg#icon-credit-card"></use>
                    </svg> Сума: </td>
                        <td class="shopping-element__price"> <b>${sumCatalog.toLocaleString()} $</b></td>
                    </tr> 
                </table>
            </div>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();