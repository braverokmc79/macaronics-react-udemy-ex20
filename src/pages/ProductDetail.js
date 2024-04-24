import React from 'react'
import { useNavigate, useParams } from 'react-router';
import { NavLink} from 'react-router-dom';

const ProductDetailPage = () => {
    let {productId} =useParams();
    let navigate=useNavigate();

  return (
    <div>ProductDetailPage 
     아이디는 :{productId}



        <p>
            <button onClick={()=>navigate(-1)} >back</button>
        
        </p>

        <p>
            <NavLink to="..">점두개</NavLink>
        
        </p>
    </div>
  )
}

export default ProductDetailPage;