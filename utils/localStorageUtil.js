class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';
    }

    // отримання товарів з локального сховища
    getProducts() {
        // виклик елементу сховища
        const productsLocalStorage = localStorage.getItem(this.keyName);

        // якщо щось є то ми працюємо з цим
        if (productsLocalStorage !== null) {
            // розпарсити строку і перевести її в масив
            return JSON.parse(productsLocalStorage);
        }
        return []; // інакше повернути пустий масив
    }

    // додавання товарів до локального сховища
    putProducts(id) {
        let products = this.getProducts(); // дивимось, що є в локальному сховищі
        let pushProducts = false; // продукт видалено
        const index = products.indexOf(id); // узнаємо індекс елемента id

        // якщо співпадіння id не знайденно то повернеться -1
        if (index === -1) {
            products.push(id); // додавання id до масиву
            pushProducts = true; // продукт додано
        } else {
            products.splice(index, 1); // інакше видаляємо id продукта
        }

        // трансформую данні з масива в стрічку
        localStorage.setItem(this.keyName, JSON.stringify(products));

        // повернення значення pushProducts true/false, та масиву товарів
        return { pushProducts, products }
    }
}

// екземпляр класа
const localStorageUtil = new LocalStorageUtil();
