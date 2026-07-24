import React, { useState } from 'react';
import { MdAddCircle, MdRemoveCircle } from 'react-icons/md';

function ProductQuantity() {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <MdAddCircle onClick={increaseQuantity} style={{ cursor: 'pointer', margin: '0 5px' }} />
      <MdRemoveCircle onClick={decreaseQuantity} style={{ cursor: 'pointer', margin: '0 5px' }} />
      {quantity}
    </div>
  );
}

export default ProductQuantity;