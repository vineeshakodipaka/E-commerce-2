import Cookies from 'js-cookie';
import React from 'react'

const Dashboard  = () => {
      const userId = Cookies.get("userId");

  return (
    <div>
     
      <div>
        <p className='text-start mx-5 mt-5'>User ID: {userId}</p>
      </div>
    </div>
  );
}

export default Dashboard 
