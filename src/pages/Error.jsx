import Wrappsers from '../assets/Wrappers/ErrorPage'
import { Link,useRouteError } from 'react-router-dom'
console.log(Link);


const Error=()=>{
 const error = useRouteError()
 console.log(error);
 if (error.status === 404) {
 return <Wrappsers>
  
  
 </Wrappsers>
 }
 return <h1>Error</h1>

}
export default Error