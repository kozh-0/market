// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {

  // const [active, setActive] = useState(false);

/*   useEffect(() => {
    document.querySelector('header ul').addEventListener('click', (e) => {
      if (e.target.nodeName === 'A') {
        e.target.parentNode.classList.add('active');
      }
    });

  }, []) */


  return (
    <header>
      <nav>
        <div className="container nav-wrapper">
          <Link to="/market" className="left brand-logo">Market</Link>
          <ul id="nav-mobile" className="right">
            <li><Link to="/market/products">Products</Link></li>
            <li><Link to="/market/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
