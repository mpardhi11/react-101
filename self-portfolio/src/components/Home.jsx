import "../styles/home.scss";
import vg from "../assets/2.webp";

function Home() {
  return (
    <>
      <div className="home">
        <main>
          <h1>Techy star</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae,
            expedita!
          </p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphic" />
        <div className="">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            impedit.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
