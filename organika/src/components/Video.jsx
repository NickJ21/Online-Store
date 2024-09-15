import "./Video.css";

function Video() {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source
          src="../images/85897-591840755_small.mp4"
          type="video/mp4"
        ></source>
      </video>
    </div>
  );
}

export default Video;
