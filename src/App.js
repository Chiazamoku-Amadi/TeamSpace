import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import PurpleButton from "./Components/PurpleButton/PurpleButton";
import WhiteButton from "./Components/WhiteButton/WhiteButton";
import Man from "./assets/man.png";
import FreelancersCanvas from "./assets/freelancers-canvas.png";
import GraphChart24 from "./assets/graph-chart24m.png";
import GraphChart80 from "./assets/graph-chart80m+.png";
import ProfilePictures from "./assets/profile-pictures.png";
import JobListing from "./Components/JobListing/JobListing";
// import { HiChevronLeft } from "react-icons/hi";
// import { HiChevronRight } from "react-icons/hi";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="navbar">
          <NavBar />
        </div>
        <div className="header-text">
          <h1 className="one">HIRE TOP</h1>
          <h1 className="two">FREELANCERS</h1>
          <p>
            Work with the largest network of independent professionals and get
            things done.
          </p>
          <div className="header-buttons">
            <PurpleButton text="Find Talent" />
            <WhiteButton text="Post your Job" />
          </div>
        </div>
        <img src={Man} alt="" className="header-man" />
        <div className="header-charts">
          <img src={FreelancersCanvas} alt="" className="blank-canvas" />
          <img src={ProfilePictures} alt="" className="profile-pictures" />
          <img src={GraphChart24} alt="" className="graph-chart24" />
          <img src={GraphChart80} alt="" className="graph-chart80" />
        </div>
      </header>
      <section className="job-listing-section">
        <h2>Job Listing</h2>
        <JobListing />
        <button className="load-more-btn">Load More Jobs</button>
      </section>
    </div>
  );
}

export default App;
