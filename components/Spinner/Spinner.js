class Spinner {

    // метод для видалення спінера коли сторінка загрузилась
    handleClear() {
        ROOT_SPINNER.innerHTML = '';
    }

    render() {
        const html = `
        <div class="spinner-container">
            <img class="spinner__img" src="./components/Spinner/img/spinner.svg" />
        </div>
        `;

        // вставлення розмітки на сторінку
        ROOT_SPINNER.innerHTML = html;
    }
}

// екземпляр класа
const spinnerPage = new Spinner();