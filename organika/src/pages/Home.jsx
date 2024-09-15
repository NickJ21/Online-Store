import "./Home.css";

function Home() {
  return (
    <div className="homepage">
      <h2>Welcome to Organika Store!</h2>
      <p>Your one stop shop for all grocery needs</p>
      <div className="video-background">
        <video autoPlay loop muted>
          <source
            src="../images/85897-591840755_small.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
    </div>
  );
}

export default Home;
