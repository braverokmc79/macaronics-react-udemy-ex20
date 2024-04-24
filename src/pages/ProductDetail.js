import React from 'react'
import { useParams } from 'react-router';

const ProductDetailPage = () => {
    let {productId} =useParams();

  return (
    <div>ProductDetailPage 
     아이디는 :{productId}

    </div>
  )
}

export default ProductDetailPage;