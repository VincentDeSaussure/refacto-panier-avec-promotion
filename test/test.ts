import { Cart } from '../app/usecases/Cart'

describe('something with cart', () => {
    it('do it', () => {
        const cart = new Cart()
        expect(cart.execute()).toEqual(false)
    })
})