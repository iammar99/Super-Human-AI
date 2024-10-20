import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import '../../SCSS/Components/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
export default function GradientSection() {
  // Initialize AOS for animations on scroll
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    
    <div className="section" >
        <div className='content '  >
        <h1 className="h1Text text-center text-light ">Welcome to SuperHuman AI</h1>
        <p className="pText text-center text-light">
          SuperHuman AI is an AI Agent built to automate and empower job aspirants in their journey towards professional success.
        </p>

        <div className='link'>
<Link to="/dashboard/agent" className="button-name" role="button">Try it Now </Link>
</div>
        </div>
      </div>
     
  );
}
