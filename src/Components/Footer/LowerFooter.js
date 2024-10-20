import React from 'react';
import'../../SCSS/Components/footer.css';
export default function LowerFooter() {
  return (
    <div className='footer'>
      <p > &copy; {new Date().getFullYear()} | All Rights Reserved by Infinity Wave AI</p>
    </div>
  );
}



