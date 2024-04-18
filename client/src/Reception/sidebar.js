import React from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const navigate =useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("username");
    navigate('/');
  };
  return (
    <div>

<button onClick={handleLogOut}>
Sign Out

</button>



<button>
  
<Link to='/MasterUsert'>
MasterUsers
</Link>

</button>

    </div>
  )
}

export default Sidebar