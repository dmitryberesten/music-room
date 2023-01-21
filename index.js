// рендер початкових данних на сторінку
function render() { 
    // отримання списку товарів
    const productsStore = localStorageUtil.getProducts();

    // отримання кількості замовлених товарів
    headerPage.render(productsStore.length);
    productsPage.render();
}

spinnerPage.render();

let CATALOG = []; // пустий масив для додавання каталогу товарів

// запит на отримання каталогу
// локально: server/catalog.json
// https://api.jsonbin.io/v3/b/63cb2f5f15ab31599e3b95ed
fetch('server/catalog.json') // шлях на який передається запит
    .then(res => res.json()) // результат
    .then(body => { // тіло файла каталога
        CATALOG = body; // закидаємо тіло каталога в змінну

        setTimeout(() => {
            spinnerPage.handleClear();
            render();
        }, 1000);

       
    })
    .catch(error => {  // в разі помилки 
        spinnerPage.handleClear();
        errorPage.render();
    })

