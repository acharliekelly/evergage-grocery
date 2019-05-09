import { Avail } from './avail'

class Cart {
    constructor() {
        if (!Cart.singleCart) {
            this._data = {
                count: 0,
                value: 0,
                items: []
            }
            Cart.singleCart = this
        }
        return Cart.singleCart
    }

    addToCart(product, quantity) {
      // create promise
      return new Promise((resolve, reject) => {

        // check for valid params
        if (product && quantity) {

          // log product
          console.log('Product: ' + product.id)
          // check if product is in stock
          Avail.inStock(product)
            .then(isInStock => {
              if (isInStock) {
                // update cart
                console.log('Product is in stock, adding to cart')
                resolve(this.updateCart(product, quantity))
              } else {
                console.log('Product out of stock.')
                return false
              }
            })
            .catch(e => {
              // if call produces error, log and return false
              console.error(e)
              return false
            })
        } else {

          // if product or quantity params missing, just return cart text
          console.log('incomplete parameters')
          return this.getCartText()
        }
      })
    }

    // add product to cart, return current count/value
    updateCart(product, quantity) {
        if (typeof product === 'undefined' || typeof quantity === 'undefined') {
          return this.getCartText()
        } else {
          // new item to store in cart
          const item = {
            id: product.id,
            qty: parseInt(quantity)
          }
          // add item to cart
          this._data.items.push(item)
          // update card quantity
          this._data.count += item.qty
          // update cart value
          this._data.value += (item.qty * product.price)
          // log all items to console
          this.logCartContents()
          // return cart text
          return this.getCartText()
        }
    }

    // Log each product in current cart
    logCartContents() {
      console.log('CART CONTENTS ')
      this._data.items.forEach(function(item) {
        console.log(`${item.id}: ${item.qty}`)
      })
    }

    // text value of cart
    getCartText() {
      return this._data.count + ' | $' + Number.parseFloat(this._data.value).toFixed(2)
    }
}

const singleCart = new Cart();

export default singleCart;
