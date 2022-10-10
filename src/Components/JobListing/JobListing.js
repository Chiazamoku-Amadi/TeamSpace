import React from "react";
import "./JobListing.css";

function JobListing() {
  const cardData = [
    {
      title: "Job Title",
      tag: "New",
      postTime: "Hourly - posted 4 minutes ago",
      hoursNeeded: "< 30hrs/week",
      duration: "1 to 3 months",
      experienceLevel: "intermediate",
      jobDescription:
        "Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor.",
      button: "See More",
    },
    {
      title: "Job Title",
      tag: "New",
      postTime: "Hourly - posted 4 minutes ago",
      fixedPrice: "$350",
      duration: "5 months",
      experienceLevel: "intermediate",
      jobDescription:
        "Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor.",
      button: "See More",
    },
    {
      title: "Job Title",
      tag: "New",
      postTime: "Hourly - posted 4 minutes ago",
      hoursNeeded: "< 30hrs/week",
      duration: "1 to 3 months",
      experienceLevel: "intermediate",
      jobDescription:
        "Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor.",
      button: "See More",
    },
    {
      title: "Job Title",
      tag: "New",
      postTime: "Hourly - posted 4 minutes ago",
      fixedPrice: "$350",
      duration: "5 months",
      experienceLevel: "intermediate",
      jobDescription:
        "Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor.",
      button: "See More",
    },
    {
      title: "Job Title",
      tag: "New",
      postTime: "Hourly - posted 4 minutes ago",
      hoursNeeded: "< 30hrs/week",
      duration: "1 to 3 months",
      experienceLevel: "intermediate",
      jobDescription:
        "Lorem ipsum dolor. Lorem ipsum dolor. Lorem ipsum dolor.",
      button: "See More",
    },
  ];

  const cards = cardData.map((card) => {
    return (
      <>
        <div className="card">
          <h3 className="job-title">{card.title}</h3>
          <div className="row2">
            <p className="card-tag">{card.tag}</p>
            <p className="post-time">{card.postTime}</p>
          </div>
          <div className="row3">
            <div className="hrs-needed fixed-price">
              <h4>{card.hoursNeeded ? card.hoursNeeded : card.fixedPrice}</h4>
              <p>{card.hoursNeeded ? "Hours Needed" : "Fixed Price"}</p>
            </div>
            <div className="job-duration">
              <h4>{card.duration}</h4>
              <p>Duration</p>
            </div>
            <div className="experience">
              <h4>{card.experienceLevel}</h4>
              <p>Experience Level</p>
            </div>
          </div>
          <div className="job-description">
            <h4>Job Description</h4>
            <p>{card.jobDescription}</p>
          </div>
          <button className="see-more-btn">See More</button>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="card-container">{cards}</div>
    </>
  );
}

export default JobListing;
