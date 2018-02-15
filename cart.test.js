const cart = require('./cart');
const data = require('./data/cars');

describe('Cart Properties', () => {
    afterEach(() => {
        cart.total = 0;
        cart.cart = [];
    })
    test('cart should be an array', () => {
        expect(typeof cart.cart).toBe('object')
        afterEach(() => {
            cart.total = 0;
            cart.cart = [];
        })
    })
    test('cart should be an empty array', () => {
        expect(cart.cart.length).toBe(0)
        afterEach(()=> {
            cart.total = 0;
            cart.cart = [];
        })
    })
    test('that the data from total is a number', () => {
        expect(typeof cart.total).toBe('number')
        afterEach(() => {
            cart.total = 0;
            cart.cart = [];
        })
    })
    test('check the total to equal 0', () => {
        expect(cart.total).toBe(0)
        afterEach(() => {
            cart.total = 0;
            cart.cart = [];
        })
    })
})

describe('Cart Methods', () => {
    afterEach(() => {
        cart.total = 0;
        cart.cart = []
    })
    test('addtoCart method should add one to the cart everytime', () => {
        cart.addToCart(data[0])
        cart.addToCart(data[1])
        expect(cart.cart.length).toBe(2)
        afterEach(() => {
            cart.total = 0;
            cart.cart = []
        })
    })
    test('that the car object should be at the end of the cart array', () => {
        cart.addToCart(data[4])
        cart.addToCart(data[2])
        expect(typeof cart.cart[cart.cart.length-1]).toBe('object')
        afterEach(() => {
            cart.total = 0;
            cart.cart = [];
        })
    })
    test('the total prop should increse on the car price being added', () => {
        cart.addToCart(data[0])
        cart.addToCart(data[1])
        cart.addToCart(data[2])

        expect(cart.total).toEqual(data[0].price + data[1].price + data[2].price)
        afterEach(() => {
            cart.total = 0;
            cart.cart = [];
        })
    })
    test('the carts length should decrement with the delete of an item', () => {
        cart.addToCart(data[1])
        cart.addToCart(data[2])

        cart.removeFromCart(1, data[2].price)
        expect(cart.cart.length).toBe(1)
        afterEach(() => {
            cart.total = 0;
            cart.cart = [];
        })
    })
    test('the cart array should maintain order after an item had been taken away', () => {
        cart.addToCart(data[0])
        cart.addToCart(data[1])
        cart.addToCart(data[3])
        cart.addToCart(data[4])

        cart.removeFromCart(0, data[0].price)
        cart.removeFromCart(2, data[3].price)
        expect(cart.cart[0]).toBe(data[1])
        expect(cart.cart[1]).toBe(data[3])
        afterEach(() => {
            cart.total = 0;
            cart.cart = [];
        })
    })
    test('expect total to dececrese the price of the item that was deleted', () => {
        cart.addToCart(data[0])
        cart.addToCart(data[1])
        cart.addToCart(data[2])

        cart.removeFromCart(1, data[1].price)
        afterEach(() => {
            cart.total = 0;
            cart.cart = [];
        })
    })
    test('on checkout the cart length should equal 0', () => {
        expect(cart.cart.length).toBe(0)
        afterEach(() => {
            cart.total = 0;
            cart.cart = [];
        })
    })
    test('the total property should equal 0 on checkout', () => {
        expect(cart.total).toBe(0)
        afterEach(() => {
            cart.total = 0;
            cart.cart = [];
        })
    })
})