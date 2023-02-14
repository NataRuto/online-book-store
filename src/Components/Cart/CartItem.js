import dataBooks from "../../Data/dataBooks";
import { removeItemFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({cartItem}) => {
    const books = dataBooks.find(
        item => item.id === cartItem.bookId
    )
    const dispatch = useDispatch();
    return(
        <div>
            <p>{books.name}</p>
            <p>{cartItem.quantity} шт</p>
            <p>Цена: $ {books.price * cartItem.quantity}</p>
            <span onClick={() => dispatch(
                removeItemFromCart({cartItemId: cartItem.id}))}>
                <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="removeIcon"/> 
            </span>
        </div>
    )
}

export default CartItem;