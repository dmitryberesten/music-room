class Shopping {

    // очистка вікна замовлень
    handleClear() {
        ROOT_SHOPPING.innerHTML = '';
    }

    // відображення шаблонної строки прямо на сторінку
    render() {
        // отримання товарів з локального сховища
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = ''; // для нових данних
        let sumCatalog = 0; // сумма всіх товарів замовлення

        CATALOG.forEach(({ id, name, price }) => {
            // якщо співпадіння не знайдено то додавати нову розмітку (товар)
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name"><svg class="icon-pin">
                        <use href="./img/symbol-defs.svg#icon-thumb-tack"></use>
                    </svg> ${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()}$</td>
                    </tr>
                `;

                // кожен раз додавати нову ціну товарів до існуючої
                sumCatalog += price;
            }
        });

        const html = `
        <div class="backdrop">
            <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.handleClear()"></div>
                <h2>Ваші замовлення:</h2>
                <table class="table-container">
                    ${htmlCatalog}
                     <tr>
                        <td class="shopping-element__name"><svg class="icon-price">
                        <use href="./img/symbol-defs.svg#icon-credit-card"></use>
                    </svg> Сума: </td>
                        <td class="shopping-element__price"><b>${sumCatalog.toLocaleString()}$</b></td>
                    </tr> 
                </table>
                <div><p class="btn-order" onclick="shoppingPage.handleClear()">ЗАМОВИТИ</p></div>
            </div>
        </div>
        `;

        // вставлення розмітки на сторінку
        ROOT_SHOPPING.innerHTML = html;
    }
}

// екземпляр класа
const shoppingPage = new Shopping();