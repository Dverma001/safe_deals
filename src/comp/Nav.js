
import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <>
         <div className="x">
        <nav className="navbar bg-transparent  ">
          <div className="container-fluid">
            <a className="navbar-brand"><div className="teaser">TEASER</div></a>
            <form className="d-flex" role="search">
              <div className="logsign">
                <ul class="navlinks text-light">
                   {/* <li><a href="/login">Login</a></li>
                  <li><a href="#">Sign up</a></li>  */}
                   <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                  <li><Link to="/signUp">Sign up</Link></li>
                  <li><Link to="/section">Contact Us</Link></li>
                  {/* <li><button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button></li> */}
                </ul>
              </div>
            </form>
          </div>
        </nav>

      </div>

        </>
    );
}