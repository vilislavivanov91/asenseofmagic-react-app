[1mdiff --git a/src/components/cart/Cart.jsx b/src/components/cart/Cart.jsx[m
[1mindex ff0d9df4..533cb613 100644[m
[1m--- a/src/components/cart/Cart.jsx[m
[1m+++ b/src/components/cart/Cart.jsx[m
[36m@@ -2,12 +2,35 @@[m [mimport React, { Component } from 'react'[m
 import { Container, Row, Col } from 'reactstrap'[m
 import CartProducts from './CartProducts'[m
 import './Cart.css'[m
[31m-[m
[31m-const img = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg'[m
[32m+[m[32mimport store from '../../reduxStore'[m
 [m
 class Cart extends Component {[m
[32m+[m[32m  constructor (props) {[m
[32m+[m[32m    super(props)[m
[32m+[m
[32m+[m[32m    this.state = {[m
[32m+[m[32m      products: [][m
[32m+[m[32m    }[m
[32m+[m[32m  }[m
[32m+[m
   componentDidMount () {[m
     window.scrollTo(0, 0)[m
[32m+[m
[32m+[m[32m    this.unsubscribe = store.subscribe(() => {[m
[32m+[m[32m      let currentState = store.getState()[m
[32m+[m[32m      this.setState({[m
[32m+[m[32m        products: currentState.products[m
[32m+[m[32m      })[m
[32m+[m[32m    })[m
[32m+[m
[32m+[m[32m    let currentState = store.getState()[m
[32m+[m[32m    this.setState({[m
[32m+[m[32m      products: currentState.products[m
[32m+[m[32m    })[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  componentWillUnmount () {[m
[32m+[m[32m    this.unsubscribe()[m
   }[m
 [m
   render () {[m
[36m@@ -16,7 +39,7 @@[m [mclass Cart extends Component {[m
         <div className='cart-wrapper'>[m
           <Row >[m
             <Col className='cart-col' sm={8}>[m
[31m-              <CartProducts name='First Product' price={49.99} src={img} className='my-5' />[m
[32m+[m[32m              <CartProducts products={this.state.products} className='my-5' />[m
             </Col>[m
           </Row>[m
         </div>[m
[1mdiff --git a/src/components/cart/CartPopoverMenu.jsx b/src/components/cart/CartPopoverMenu.jsx[m
[1mindex cd099634..f1ed2757 100644[m
[1m--- a/src/components/cart/CartPopoverMenu.jsx[m
[1m+++ b/src/components/cart/CartPopoverMenu.jsx[m
[36m@@ -12,7 +12,8 @@[m [mclass CartPopoverMenu extends Component {[m
     this.state = {[m
       popoverOpen: false,[m
       numberOfProducts: 0,[m
[31m-      totalPrice: 0[m
[32m+[m[32m      totalPrice: 0,[m
[32m+[m[32m      products: [][m
     }[m
 [m
     // Bind Handlers[m
[36m@@ -26,8 +27,6 @@[m [mclass CartPopoverMenu extends Component {[m
         popoverOpen: !prevState.popoverOpen[m
       }[m
     })[m
[31m-    this.setPrice()[m
[31m-    this.setNumbersOfProducts()[m
   }[m
 [m
   onButtonClickHandler () {[m
[36m@@ -36,29 +35,18 @@[m [mclass CartPopoverMenu extends Component {[m
   }[m
 [m
   componentDidMount () {[m
[31m-    this.setPrice()[m
[31m-    this.setNumbersOfProducts()[m
[31m-[m
[31m-    store.subscribe(() => {[m
[32m+[m[32m    this.unsubscribe = store.subscribe(() => {[m
       let currentState = store.getState()[m
       this.setState({[m
         numberOfProducts: currentState.products.length,[m
[31m-        totalPrice: currentState.totalPrice[m
[32m+[m[32m        totalPrice: currentState.totalPrice,[m
[32m+[m[32m        products: currentState.products[m
       })[m
     })[m
   }[m
 [m
[31m-  setPrice () {[m
[31m-    store.subscribe(() => {[m
[31m-      const currentState = store.getState()[m
[31m-      this.setState({[m
[31m-        totalPrice: currentState.totalPrice[m
[31m-      })[m
[31m-    })[m
[31m-  }[m
[31m-[m
[31m-  setNumbersOfProducts () {[m
[31m-[m
[32m+[m[32m  componentWillUnmount () {[m
[32m+[m[32m    this.unsubscribe()[m
   }[m
 [m
   render () {[m
[36m@@ -86,7 +74,7 @@[m [mclass CartPopoverMenu extends Component {[m
           </PopoverHeader>[m
           <PopoverBody>[m
             <Container fluid>[m
[31m-              <CartProducts />[m
[32m+[m[32m              <CartProducts products={this.state.products} />[m
               <Button onClick={this.onButtonClickHandler} className='my-2' block outline color='info'>Преглед на количката</Button>[m
             </Container>[m
           </PopoverBody>[m
[1mdiff --git a/src/components/cart/CartProducts.jsx b/src/components/cart/CartProducts.jsx[m
[1mindex 24fa2db1..f165a79d 100644[m
[1m--- a/src/components/cart/CartProducts.jsx[m
[1m+++ b/src/components/cart/CartProducts.jsx[m
[36m@@ -1,26 +1,10 @@[m
 import React, { Component } from 'react'[m
[31m-import productsInCartData from '../../data/productsInCart'[m
 import CartProduct from './CartProduct'[m
[31m-[m
 class CartProducts extends Component {[m
[31m-  constructor (props) {[m
[31m-    super(props)[m
[31m-[m
[31m-    this.state = {[m
[31m-      productsInCart: [][m
[31m-    }[m
[31m-  }[m
[31m-[m
[31m-  componentDidMount () {[m
[31m-    const productsInCart = productsInCartData.getAllProducts()[m
[31m-    this.setState({[m
[31m-      productsInCart[m
[31m-    })[m
[31m-  }[m
[31m-[m
   render () {[m
[31m-    const allProductsInCart = this.state.productsInCart.length > 0 ? ([m
[31m-      this.state.productsInCart.map(p => {[m
[32m+[m[32m    const products = this.props.products || [][m
[32m+[m[32m    const allProductsInCart = products.length > 0 ? ([m
[32m+[m[32m      this.props.products.map(p => {[m
         return ([m
           <CartProduct key={p.id} src={p.src} name={p.name} price={p.price} />[m
         )[m
[1mdiff --git a/src/data/initialCartData.js b/src/data/initialCartData.js[m
[1mindex 71a5502b..d8c5838b 100644[m
[1m--- a/src/data/initialCartData.js[m
[1m+++ b/src/data/initialCartData.js[m
[36m@@ -1,4 +1,6 @@[m
[31m-export default {[m
[32m+[m[32mconst initialState = {[m
   products: [],[m
   totalPrice: 0[m
 }[m
[32m+[m
[32m+[m[32mexport default initialState[m
[1mdiff --git a/src/reducers/cart.js b/src/reducers/cart.js[m
[1mindex d1182f89..1165145d 100644[m
[1m--- a/src/reducers/cart.js[m
[1m+++ b/src/reducers/cart.js[m
[36m@@ -6,8 +6,11 @@[m [mexport default function (state = initialState, action) {[m
 [m
   switch (action.type) {[m
     case actionCartTypes.ADD_PRODUCT:[m
[31m-      currentState.products.push(action.product)[m
[31m-      console.log(currentState)[m
[32m+[m[32m      if (currentState.products.indexOf(action.product) === -1) {[m
[32m+[m[32m        currentState.products.push(action.product)[m
[32m+[m[32m      } else {[m
[32m+[m[32m        console.log('Product is already added in your cart!')[m
[32m+[m[32m      }[m
       return currentState[m
 [m
     case actionCartTypes.GET_PRODUCTS_PRICE:[m
[36m@@ -16,7 +19,6 @@[m [mexport default function (state = initialState, action) {[m
         totalPrice += p.price[m
       })[m
       currentState.totalPrice = totalPrice[m
[31m-      console.log(currentState)[m
       return currentState[m
 [m
     case actionCartTypes.REMOVE_PRODUCT:[m
[36m@@ -25,7 +27,6 @@[m [mexport default function (state = initialState, action) {[m
         const productIndex = currentState.products.indexOf(product)[m
         currentState.products.splice(productIndex, 1)[m
       }[m
[31m-      console.log(currentState)[m
       return currentState[m
     default: return state[m
   }[m
