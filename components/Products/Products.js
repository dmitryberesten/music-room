class Products {
    constructor() {
        this.classNameActive = 'products-element__btn_active';
        this.labelAdd = 'Додати до кошика';
        this.labelRemove = 'Видалити з кошика';
    }

    // обробник подій
    handleSetLocationStorage(element, id) {
        const { pushProducts, products } = localStorageUtil.putProducts(id);

        if (pushProducts) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }

        // відображення кількості товарів в кошику
        headerPage.render(products.length);
    }

    // відображення данних на сторінці
    render() {

        // отримання товарів локального сховища
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        // перебираю всі товари каталогу + деструктуризація
        CATALOG.forEach(({ id, name, price, img, src }) => {
            let activeClass = '';
            let activeText = '';

            // якщо немає збігу товарів то додати запис додання в корзину
            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd; // текст додати до кошика
            } else {
                activeClass = ' ' + this.classNameActive;
                activeText = this.labelRemove; // видалити з корзини 
            }

            // додавання кожного разу нового контенту li до cписку ul
            htmlCatalog += `
            <li class="products-element">
            <a href="${src}">
                <span class="products-element__name">${name}</span>
                <img class="products-element__img" src="${img}" />
                <span class="products-element__price"><svg class="icon-cost">
                <use href="./img/symbol-defs.svg#icon-price-tag"></use>
            </svg> ${price.toLocaleString()} $</span>
            </a>
                <button class="products-element__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}');">
                ${activeText}
                </button>
            </li>
            `;
        });

        // список товарів
        const html = `
        <ul class="products-container">
            ${htmlCatalog}
        </ul>
        `;

        // вставлення списку товарів на сторінку 
        ROOT_PRODUCTS.innerHTML = html;
    }
}

// екземпляр класу
const productsPage = new Products();