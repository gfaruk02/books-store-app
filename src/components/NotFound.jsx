import { Link } from "react-router";

const NotFound = () => {
  return  (
    <>
      <h1>Page not found</h1>
      <div className="alert alert-warning">
        Sorry, that page does not exist.
      </div>
      <Link to="/">
        <button className="btn-primary" to="/">
          Back to the library
        </button>
      </Link>
    </>
  );
}

export default NotFound;