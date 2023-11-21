import './Product.scss'
import Single from '../../Components/single/single'
import { singleProduct } from '../../data'



const Product = () => {
  return (
    <Single {...singleProduct}/>
  )
}

export default Product