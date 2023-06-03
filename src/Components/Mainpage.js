import React , {useState} from 'react'
import { auth ,db} from '../firebase-config'
import { signOut } from 'firebase/auth';
import { useNavigate,Link } from 'react-router-dom';
import { addDoc,collection } from 'firebase/firestore';

const Mainpage = (props) => {

  const [addStatus1,setAddStatus1] = useState({add:false,color:"warning"});
  const [addStatus2,setAddStatus2] = useState({add:false,color:"warning"});
  const [addStatus3,setAddStatus3] = useState({add:false,color:"warning"});
  const [addStatus4,setAddStatus4] = useState({add:false,color:"warning"});
  const [addStatus5,setAddStatus5] = useState({add:false,color:"warning"});
  const [addStatus6,setAddStatus6] = useState({add:false,color:"warning"});
  
  // const [colorStatus,setColorStatus] = useState("warning");
  const [cartValue,setCartValue] = useState(0);
  const postsCollectionRef = collection(db, "foodItems");



  const updateStatus=(x)=>{
    

    if(x===1)
    {
      if(addStatus1.add===true)
      {
        setAddStatus1({add:false,color:"warning"});
        setCartValue(cartValue-1);
      }
      else
      {
        setAddStatus1({add:true,color:"success"});
        setCartValue(cartValue+1);
        let obj = {name:"Chicken Tikka",desc:"Lorem ipsum dolor sit amet, consectetur",price:"299",image:"item1"};
            addDoc(postsCollectionRef, {
            name: obj.name,
            desc: obj.desc,
            price: obj.price,
            image: obj.image,
          });
        
      }
    }
    else if(x===2)
    {
      if(addStatus2.add===true)
      {
        setAddStatus2({add:false,color:"warning"});
        setCartValue(cartValue-1);
      }
      else
      {
        setAddStatus2({add:true,color:"success"});
        setCartValue(cartValue+1);
        let obj = {name:"Paneer Tikka",desc:"Lorem ipsum dolor sit amet, consectetur",price:"299",image:"item2"};
            addDoc(postsCollectionRef, {
            name: obj.name,
            desc: obj.desc,
            price: obj.price,
            image: obj.image,
          });
      }
    }
    else if(x===3)
    {
      if(addStatus3.add===true)
      {
        setAddStatus3({add:false,color:"warning"});
        setCartValue(cartValue-1);
      }
      else
      {
        setAddStatus3({add:true,color:"success"});
        setCartValue(cartValue+1);
        let obj = {name:"Salad",desc:"Lorem ipsum dolor sit amet, consectetur",price:"299",image:"item3"};
            addDoc(postsCollectionRef, {
            name: obj.name,
            desc: obj.desc,
            price: obj.price,
            image: obj.image,
          });
      }
    }
    else if(x===4)
    {
      if(addStatus4.add===true)
      {
        setAddStatus4({add:false,color:"warning"});
        setCartValue(cartValue-1);
      }
      else
      {
        setAddStatus4({add:true,color:"success"});
        setCartValue(cartValue+1);
        let obj = {name:"Dal Fry ipsum dolor sit amet, consectetur",price:"299",image:"item4"};
            addDoc(postsCollectionRef, {
            name: obj.name,
            desc: obj.desc,
            price: obj.price,
            image: obj.image,
          });
      }
    }
    else if(x===5)
    {
      if(addStatus5.add===true)
      {
        setAddStatus5({add:false,color:"warning"});
        setCartValue(cartValue-1);
      }
      else
      {
        setAddStatus5({add:true,color:"success"});
        setCartValue(cartValue+1);
        let obj = {name:"Biriyani",desc:"Lorem ipsum dolor sit amet, consectetur",price:"299",image:"item5"};
            addDoc(postsCollectionRef, {
            name: obj.name,
            desc: obj.desc,
            price: obj.price,
            image: obj.image,
          });
      }
    }
    else if(x===6)
    {
      if(addStatus6.add===true)
      {
        setAddStatus6({add:false,color:"warning"});
        setCartValue(cartValue-1);
      }
      else
      {
        setAddStatus6({add:true,color:"success"});
        setCartValue(cartValue+1);
        let obj = {name:"Sushi",desc:"Lorem ipsum dolor sit amet, consectetur",price:"299",image:"item6"};
            addDoc(postsCollectionRef, {
            name: obj.name,
            desc: obj.desc,
            price: obj.price,
            image: obj.image,
          });
          console.log()
      }
    }
   

  
    // if(addStatus===false)
    // {
    //   setAddStatus(true);
    //   setColorStatus("success");
    // }
       
    // else
    // {
    //   setAddStatus(false);
    //   setColorStatus("warning");
    // }
  }


  let navigate = useNavigate();

  
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      props.setAuthenticated(false);
      console.log("entered sign out");
      navigate("/");
    });
  }
  const create=(obj)=>{
    console.log(obj.name);
  }
  return (
    <>
    {/* <div>{props.authenticated ? <h1>Hello {auth.currentUser.displayName}</h1> : null}</div>
    {props.authenticated ? <button className='btn btn-warning' onClick={signUserOut}>Logout</button> : null } */}

    <nav className='d-flex align-items-center justify-content-between pt-3'>
      <img src='./EatElevate-logo.png' id='eatelevate-logo' className='mx-5'/>
      <h1 className="restaurent-head">Vellore Kitchen</h1>
      <div className='px-5 d-flex align-items-center'>
        {/* <p>Hello, {props.authenticated ? (auth.currentUser.displayName.split(" "))[0] : null}</p> */}
        {props.authenticated  && auth.currentUser && <p>Hello, {(auth.currentUser.displayName.split(" "))[0]}</p>}
      <Link to="/Cart" className='text-dark'><i className="fa fa-shopping-cart px-3" style={{fontSize:"36px"}}></i></Link>
      <span id='cart-calculate' className='text-center'>{cartValue}</span>
      {/* {props.authenticated ? <button className='btn btn-warning' onClick={signUserOut}>Logout</button> : null } */}
      {/* {props.authenticated ? <button className='btn btn-warning' onClick={signUserOut}>Logout</button> : null }  */}
      <i className="fa fa-sign-out px-3" style={{fontSize:"36px"}} onClick={signUserOut}></i>
      </div>
    </nav>

    <section className='py-4'>
      <div className='d-flex align-items-center justify-content-around px-5 py-2 border'>
        <p className='px-5 py-1 rounded-4 text-light fw-bolder' id='active-menu'>Starter</p>
        <p>Main Course</p>
        <p>Drinks</p>
        <p>Deserts</p>
        <p>Chinese</p>
        <p>Salad</p>
      </div>
    </section>

    <section className='item-cards d-flex flex-column align-items-center'>
      <div className='d-flex border p-3 align-items-center justify-content-between rounded-4 item-cards-div shadow my-2' >
        <img src='./item1.svg' className='mx-3'/>
        <div className='px-3 item-desc-div'>
        <h5>Chicken Tikka</h5>
        <p>Lorem ipsum dolor sit amet, consectetur </p>
        </div>
        <div>
          <h5 className='text-center'>$ 299</h5>
          <button className={`btn btn-${addStatus1.color} add-btn text-light my-2`} onClick={()=>{updateStatus(1);create({name:"Chicken Tikka",desc:"Lorem ipsum dolor sit amet, consectetur",price:"299",image:"item1"})}} id='btn1'>{addStatus1.add ? "Added" : "Add"}</button>
        </div>
      </div>
      
      <div className='d-flex border p-3 align-items-center justify-content-between rounded-4 item-cards-div shadow my-2' >
        <img src='./item2.svg' className='mx-3'/>
        <div className='px-3 item-desc-div'>
        <h5>Paneer Tikka</h5>
        <p>Lorem ipsum dolor sit amet, consectetur </p>
        </div>
        <div>
          <h5 className='text-center'>$ 299</h5>
          <button className={`btn btn-${addStatus2.color} add-btn text-light my-2`} onClick={()=>{updateStatus(2);create({name:"Paneer Tikka",desc:"Lorem ipsum dolor sit amet, consectetur",price:"299",image:"item2"})}} id='btn1'>{addStatus2.add ? "Added" : "Add"}</button>
        </div>
      </div>
      <div className='d-flex border p-3 align-items-center justify-content-between rounded-4 item-cards-div shadow my-2' >
        <img src='./item3.svg' className='mx-3'/>
        <div className='px-3 item-desc-div'>
        <h5>Salad</h5>
        <p>Lorem ipsum dolor sit amet, consectetur </p>
        </div>
        <div>
          <h5 className='text-center'>$ 299</h5>
          <button className={`btn btn-${addStatus3.color} add-btn text-light my-2`} onClick={()=>{updateStatus(3);create({name:"Salad",desc:"Lorem ipsum dolor sit amet, consectetur",price:"299",image:"item3"})}} id='btn1'>{addStatus3.add ? "Added" : "Add"}</button>
        </div>
      </div>
      <div className='d-flex border p-3 align-items-center justify-content-between rounded-4 item-cards-div shadow my-2' >
        <img src='./item4.svg' className='mx-3'/>
        <div className='px-3 item-desc-div'>
        <h5>Dal Fry</h5>
        <p>Lorem ipsum dolor sit amet, consectetur </p>
        </div>
        <div>
          <h5 className='text-center'>$ 299</h5>
          <button className={`btn btn-${addStatus4.color} add-btn text-light my-2`} onClick={()=>{updateStatus(4);create({name:"Dal Fry",desc:"Lorem ipsum dolor sit amet, consectetur",price:"299",image:"item4"})}} id='btn1'>{addStatus4.add ? "Added" : "Add"}</button>
        </div>
      </div>
      <div className='d-flex border p-3 align-items-center justify-content-between rounded-4 item-cards-div shadow my-2' >
        <img src='./item5.svg' className='mx-3'/>
        <div className='px-3 item-desc-div'>
        <h5>Biriyani</h5>
        <p>Lorem ipsum dolor sit amet, consectetur </p>
        </div>
        <div>
          <h5 className='text-center'>$ 299</h5>
          <button className={`btn btn-${addStatus5.color} add-btn text-light my-2`} onClick={()=>{updateStatus(5);create({name:"Biriyani",desc:"Lorem ipsum dolor sit amet, consectetur",price:"299",image:"item5"})}} id='btn1'>{addStatus5.add ? "Added" : "Add"}</button>
        </div>
      </div>
      <div className='d-flex border p-3 align-items-center justify-content-between rounded-4 item-cards-div shadow my-2' >
        <img src='./item6.svg' className='mx-3'/>
        <div className='px-3 item-desc-div'>
        <h5>Sushi</h5>
        <p>Lorem ipsum dolor sit amet, consectetur </p>
        </div>
        <div>
          <h5 className='text-center'>$ 299</h5>
          <button className={`btn btn-${addStatus6.color} add-btn text-light my-2`} onClick={()=>{updateStatus(6);create({name:"Sushi",desc:"Lorem ipsum dolor sit amet, consectetur",price:"299",image:"item6"})}} id='btn1'>{addStatus6.add ? "Added" : "Add"}</button>
        </div>
      </div>
    </section>


    </>

  )
}

export default Mainpage