import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="homepage page">
      <h2>
        Welcome to <span className="bold-name"> Organika</span>
      </h2>
      <p>Your one stop shop for all grocery needs</p>
      <div className="video-background">
        <video autoPlay loop muted>
          <source
            src="../images/85897-591840755_small.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
      <Link className="btn btn-large btn-primary" to="/catalog">
        Check our fresh catalog <i class="fa-solid fa-circle-chevron-right"></i>
      </Link>
    </div>
  );
}

export default Home;
