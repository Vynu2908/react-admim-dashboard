import './user.scss';
import Single from '../../Components/single/single';
import { singleUser } from '../../data';
const User = () => {
  return (
    <Single {...singleUser}/>
  )
}

export default User