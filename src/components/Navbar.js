import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {Modal} from  'antd';
import 'antd/dist/antd.css';
import SigninForm from './login';


function Navbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  
  const closeMobileMenu = () => setClick(false);
 
      const[current, setCurrent]=useState ("home");
        
         const handleClick = e => {
            console.log('click ', e);
            setCurrent(e.key);
          };
          useEffect(() => {
            setToken( localStorage.getItem("freeMentor_token"));
           
           })
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  //const SigninForm = () => {
    //const onFinish = (values) => {
    //  console.log('Received values of form: ', values);
   // };
   //const App = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [token, setToken]=useState(null);
  const [dataFromToken,setDataFromToken]=useState({});
  
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

  return (
    <>
    
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <SigninForm/>
      </Modal>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            FreeMentor
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='mentors'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                All Mentors
              </Link>
            </li>
            {!token?
           ( <li className='nav-item'>

              <Link
                to='#'
                className='nav-links'
                onClick={showModal}
              >
              Login
              </Link>
            </li>):
             ( <li className='nav-item'>

             <Link
               to='/home'
               className='nav-links'
               onClick={()=>{localStorage.removeItem('freeMentor_token')}}
             >
             Logout
             </Link>
           </li>)
}
            <li>
              
              {/* <Link to="/SignUp"
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link> */}
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>  <Link to="/SignUp"
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}



export default Navbar;
