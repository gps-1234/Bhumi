import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Content from "./Content";
import Work from "./Work";
import Footer from "./Footer";
import Countup from "./countup";
import Login from "./Login";
import Donations from "./Donations/Donations";
import Volunteers from "./Volunteers/Volunteers";
import Internship from "./Internship/Internship";
import Admin_Portal_Home from "./Admin_Portal_Home";
import Popup from "./popup";
import User_Region from "./User_Region";
import Market_Reach from "./Market_Reach";
import User_Age from "./User_Age";

// function loadScript(src){
//   return new Promise(resolve =>{
//     const script = document.createElement('script')
//     script.src='https://checkout.razorpay.com/v1/checkout.js'
//     document.body.appendChild(script)
//     script.onload = () =>{
//       resolve(true)
//     }
//     script.onerror=()=>{
//       resolve(false)
//     }
//   })

function App() {
  // async function displayRazorpay(){
  // const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
  //   if(!res){
  //     alert('Razorpay Sdk failed to load.Are you online?')
  //     return
  //   }
  //   var options = {
  //     "key": "rzp_test_IcjAGVMaRsu0Uv", // Enter the Key ID generated from the Dashboard
  //     "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  //     "currency": "INR",
  //     "name": "Donations", //your business name
  //     "description": "Test Transaction",
  //     "image": "https://example.com/your_logo",
  //     "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  //     "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
  //     "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
  //         "name": "Gaurav Kumar", //your customer's name
  //         "email": "gaurav.kumar@example.com",
  //         "contact": "9000090000" //Provide the customer's phone number for better conversion rates
  //     }
  // };
  // var rzp1 = new Razorpay(options);
  // document.getElementById('rzp-button1').onclick = function(e){
  //     rzp1.open();
  //     e.preventDefault();
  // }
  //  }

  // }
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Popup />
              <Navbar />
              <Carousel />
              <Content />
              <Work />
              <Countup />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/Login"
          element={
            <>
              <Navbar />
              <Login />
            </>
          }
        ></Route>
        <Route
          path="/Donations"
          element={
            <>
              <Navbar />
              <Donations />
            </>
          }
        ></Route>
        <Route
          path="/Volunteers"
          element={
            <>
              <Navbar />
              <Volunteers />
            </>
          }
        ></Route>
        <Route
          path="/Internship"
          element={
            <>
              <Navbar />
              <Internship />
            </>
          }
        ></Route>
        <Route path="/Admin_Portal" element={<Admin_Portal_Home />}></Route>
        <Route path="/User_Region" element={<User_Region />}></Route>
        <Route path="/Market_Reach" element={<Market_Reach />}></Route>
        <Route path="/User_Age" element={<User_Age />}></Route>
      </Routes>
    </div>
    // <Router>
    //   <Switch>
    //     <Route path="/Login" component={Login} />
    //     <Redirect to="/" />
    //   </Switch>
    // </Router>
  );
}
export default App;
