import React , {useState,useEffect} from 'react'
import { auth ,db} from '../firebase-config'
import { signOut } from 'firebase/auth';
import { useNavigate,Link } from 'react-router-dom';
import { addDoc,collection,getDocs } from 'firebase/firestore';


const Cart = (props) => {

    const navigate=useNavigate();

    const postsCollectionRef = collection(db,"foodItems");
    const a1=getDocs(postsCollectionRef);
    const a2=a1.docs;
    const [data,setData]=useState([]);
    const [temp,setTemp]=useState([]);

    // useEffect(()=>{
    //       getFoodItems();
    // },[]);
    // const getFoodItems=async()=>{
    //     console.log("inside");
    //     const a=await getDocs(postsCollectionRef);
    //     setData(a);
    //     setTemp(data.docs);
    //     console.log(temp);
    //  }

    const signUserOut = () => {
        signOut(auth).then(() => {
          localStorage.clear();
          props.setAuthenticated(false);
          console.log("entered sign out");
          navigate("/");
        });
      }

  return (
    <>
    
     {/* {info.map((element)=>{
        return <div>
            element.name
        </div>

     })} */}

<nav className='d-flex align-items-center justify-content-between pt-3'>
      <img src='./EatElevate-logo.png' id='eatelevate-logo' className='mx-5'/>
      <h1 className="restaurent-head">Vellore Kitchen</h1>
      <div className='px-5 d-flex align-items-center'>
        {/* <p>Hello, {props.authenticated ? (auth.currentUser.displayName.split(" "))[0] : null}</p> */}
        {props.authenticated  && auth.currentUser && <p>Hello, {(auth.currentUser.displayName.split(" "))[0]}</p>}
      {/* {props.authenticated ? <button className='btn btn-warning' onClick={signUserOut}>Logout</button> : null } */}
      {/* {props.authenticated ? <button className='btn btn-warning' onClick={signUserOut}>Logout</button> : null }  */}
      <i className="fa fa-sign-out px-3" style={{fontSize:"36px"}} onClick={signUserOut}></i>
      </div>
    </nav>

    <section>
        <h3 className='my-4 mx-5'>&#x3c; Cart</h3>
    </section>

    <section  className='item-cards d-flex flex-column align-items-center'>
    <div className='d-flex border p-3 align-items-center justify-content-between rounded-4 item-cards-div shadow my-2' >
        <img src='./item1.svg' className='mx-3'/>
        <div className='px-3 item-desc-div'>
        <h5>Chicken Tikka</h5>
        <p>Lorem ipsum dolor sit amet, consectetur </p>
        <a href='#'>Customize</a>
        </div>
        <div>
          <h5 className='text-center'>$ 299</h5>
        </div>
      </div>
      
      <div className='d-flex border p-3 align-items-center justify-content-between rounded-4 item-cards-div shadow my-2' >
        <img src='./item2.svg' className='mx-3'/>
        <div className='px-3 item-desc-div'>
        <h5>Paneer Tikka</h5>
        <p>Lorem ipsum dolor sit amet, consectetur </p>
        <a href='#'>Customize</a>
        </div>
        <div>
          <h5 className='text-center'>$ 299</h5>
        </div>
      </div>
      <div className='d-flex border p-3 align-items-center justify-content-between rounded-4 item-cards-div shadow my-2' >
        <img src='./item3.svg' className='mx-3'/>
        <div className='px-3 item-desc-div'>
        <h5>Salad</h5>
        <p>Lorem ipsum dolor sit amet, consectetur </p>
        <a href='#'>Customize</a>
        </div>
        <div>
          <h5 className='text-center'>$ 299</h5>
        </div>
      </div>
    </section>

    <section>
        
    </section>


    
    {/* //     return <section>
    //         <div className='d-flex border p-3 align-items-center justify-content-between rounded-4 item-cards-div shadow my-2' >
    //     <img src={`./${ele.data().image.svg}`} className='mx-3'/>
    //     <div className='px-3 item-desc-div'>
    //     <h5>{ele.data().name}</h5>
    //     <p>{ele.data().desc}</p>
    //     </div>
    //     <div>
    //       <h5 className='text-center'>$ {ele.data().price}</h5>
    //     </div>
    //   </div>
    //     </section> */}

    </>
  )
}

export default Cart;