import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";

const Book = ({book}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const [showMore, setShowMore] = useState(false);
    return(
        <div>
            <img src={`${book.img}.jpg`} alt="book"/>
            <h2>{book.name}</h2>
            <p className="desc">{showMore? book.description : book.description.substring(0,70) + "..."}
            <button className="btn" onClick={() => setShowMore(!showMore)}>{showMore? "Свернуть": "Развернуть"}</button> 
            </p>
            <p>$ {book.price}</p>
            <ChangeQuantity quantity = {quantity} setQuantity = {setQuantity}/>
            <button className="addtocart" onClick={() => {dispatch(addItemToCart({book, quantity}))}}>
            Add to cart</button>
        </div>
    )
}

export default Book;