import React from "react";
function Content() {
  return (
    <div className="content">
      <div>
        <iframe
          className="video_homepage"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/NJQAim63QBs?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <p className="para">
          <h2>
            <b>We are on a Journey!!</b>
          </h2>
          <p className="para_2">
            At Bhumi, we strive for meaningful change. Through volunteering, we
            aim to build a society that empowers every individual to reshape the
            conversation with their voices and stories. Among grassroots NGOs in
            India, Bhumi has a strong reputation for success. We are a leading
            NGO in India focusing on two areas: Education & Volunteer. The
            cornerstones of our work Volunteer. Lead. Inspire
          </p>
        </p>
      </div>
      <br></br>
      <div className="centered_content">
        <h2>We are India's largest NGO Volunteer organizations</h2>
        <p>Our work revolves around</p>
      </div>
    </div>
  );
}
export default Content;
