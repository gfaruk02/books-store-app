import {Link} from 'react-router'

const Header = () => {
  return (
    <>
    <nav className="border-6 fixed split-nav"
style={{ width: "auto" }}>
     <div className="nav-brand">
    {/* <h3><a href="#"></a></h3> */}
    <h3>
        <Link to={'/'}>Books Store</Link> 
    </h3>
  </div>

<ul className='inline'>
    <li><Link to={'/'}> Home</Link> </li>
    <li><Link to={'/about'}> About</Link> </li>
</ul>

    </nav>

    </>
  );
};

export default Header;