// import React from 'react';
import './Dashboard.css';
import { Link} from 'react-router-dom';

const DashBoard = ( { regDash }) => {
  return (
    <div className="container">
      <div className="nav">
      <div className="header">Welcome to the Webpage! {regDash.name} </div>
      <div><Link to={"/logout"} className='logout'>Logout</Link></div>
      </div>
      <br /><br />
      <div className="body">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloremque architecto vel nihil? Quo distinctio, labore, amet accusantium dolorem vero optio, quod ad libero nesciunt reiciendis repudiandae rem iste. Porro?
        Consectetur delectus voluptatem dolorem dignissimos ullam nam aspernatur necessitatibus quo quam possimus sint labore quis nobis veritatis temporibus reiciendis voluptate, officiis consequuntur quas. Eius aliquid odit ratione consequatur minus optio.</p>
      </div>
    </div>
  )
}

export default DashBoard;

