import React from 'react';
import './Login.css'

const Login = () => {
    return (

       
        <div class="form-area">
                           
             <div class="form-text-side">
                <h1><i class="fas fa-rocket animate-bounce"></i></h1> <br/>
                <h2> ACE of science </h2>
                <h3 >Feel free to learn,spread what you have learned </h3>
                <button class="shadow-2xl">  আপনার অ্যাকাউন্ট নেই ? অ্যাকাউন্ট তৈরি করুন<i class="fas fa-fighter-jet"></i></button>
             </div>  
             
           
             
         
             <div class="form-input-side">
                <form action="post">
                          <h1><l class="fas fa-globe-asia animate-spin  animate-bounce"></l></h1>
                          <i class="far fa-user"></i> <input type="text"  placeholder="আপনার নাম লিখুন "/> <br/>
                          <i class="far fa-envelope"></i> <input type="email" placeholder="আপনার ইমেইল লিখুন"/> <br/>
                          <i class="fas fa-key"></i> <input type="password" placeholder="আপনার পাসওয়ার্ড লিখুন"/><br/>
       
                <button class="shadow-2xl">লগইন</button> <br/>
              </form>
                
             </div>   
        </div>


    );
};

export default Login;