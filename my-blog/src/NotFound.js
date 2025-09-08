import {Link} from "react-router-dom";

const NotFound = () => {
    return (
      <div>
          <h2>Sorry</h2>
          <p>That page is not exists</p>
          <Link to='/'>Back to homepage...</Link>
      </div>
    );
}

export default NotFound;