import '@/style/payment-success.css'
import React,{ useState,useEffect } from 'react';
const Success=()=>{
    const [count, setCount] = useState(10);
    useEffect(() => {
        var countdown = 10;

var countdownInterval = setInterval(function() {
  countdown--;
  document.getElementById("timer").innerHTML = countdown;
  if (countdown <= 0) {
    clearInterval(countdownInterval);
    window.location.href = "http://localhost:3000";
  }
}, 1000);
      }, [])
    return (
    // <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,900&display=swap" rel="stylesheet">
  
    
      <div className="card">
      <div style={{borderRadius:"200px", height:"200px", width:"200px", backgroundColor: "#F8FAF5", margin:"0 auto"}}>
        <i class="checkmark">✓</i>
      </div>
        <h1>Success</h1> 
        <p>Thank you for your continues support<br/>Your invoice should be generated shortly
        <br/>Redirecting in <span id="timer">10</span> seconds
        </p>
      </div>
    
    )
}
export default Success;
