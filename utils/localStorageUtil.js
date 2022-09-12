class LocalStorageUtil { 
    constructor() { 
        this.keyName = 'products';
    }

    getProducts() { 
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) { 
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }

    putProducts(id) { 
        let products = this.getProducts();
        let pushProducts = false;
        const index = products.indexOf(id);

        if (index === -1) {
            products.push(id);
            pushProducts = true;
        } else { 
            products.splice(index, 1);
        }
        
        localStorage.setItem(this.keyName, JSON.stringify(products));

        return { pushProducts, products }
    }
}

const localStorageUtil = new LocalStorageUtil();
