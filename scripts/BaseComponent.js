class BaseComponent {
    constructor() {
        if (this.constructor === BaseComponent) {
            throw new Error('Невозможно создать экземпляр абстрактного класса BaseComponent.');
        }
    }

    getProxyState(initialState) {
        return new Proxy(initialState, {
            get: (target, prop) => {
                return target[prop];
            },
            set: (target, prop, newValue) => {
                const oldValue = target[prop];

                target[prop] = newValue;

                if (newValue !== oldValue) {
                    this.updateUI();
                }


                return true;
            },
        });
    }

    // обновление интерфейса после обновления state'а
    updateUI() {
        throw new Error('Метод updateUI() не реализован.');
    }
}

export default BaseComponent;