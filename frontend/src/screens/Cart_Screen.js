import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
 Col,
 Row,
 ListGroup,
 Image,
 Form,
 Button,
 Card,
} from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart } from '../actions/cart_Actions';

const CartScreen = ({ match, location, history }) => {
 const productId = match.params.id;

 const qty = location.search ? Number(location.search.split('=')[1]) : 1;

 const dispatch = useDispatch();

 const cart = useSelector((state) => state.cart);
 const { cartItems } = cart;

 useEffect(() => {
  if (productId) {
   dispatch(addToCart(productId, qty));
  }
 }, [dispatch, productId, qty]);

 return (
  <div>
   <h1>Cart</h1>
  </div>
 );
};

export default CartScreen;