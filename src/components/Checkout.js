import {Link} from 'react-router-dom'

import './Checkout.css'
const Checkout = () => {
    const all =  JSON.parse(localStorage.getItem('products')) || []

 
    return (
        <div>
            <div>
            <h2>Checkout page </h2>
            <Link to={'/'}>Main Page</Link>
            <ul className='checkout-list'>
                { all.map((item, index) => <li className='checkout-item'>
                    <div className='card_image'>
                <img src='https://picsum.photos/200/300' alt={item.title} />
            </div>
            <div className='card_info1'>
                <h2>{item.title}</h2>
                <h3>${item.price}</h3>
                <p>Quantity: {item.quantity}</p>
            </div>
                </li>)}
            </ul>
            </div>
        </div>
    )
}

export default Checkout;