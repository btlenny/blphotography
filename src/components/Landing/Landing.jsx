import  './Landing.css';

export default function Landing(){
    return (
        <div className="landing-page">
          <div className="content-container">
            <div className="image-container">
              <img src="your_image_url.jpg" alt="Landing Page Image" />
            </div>
            <div className="text-container">
              <h1>Your Title</h1>
              <p>Your description goes here.</p>
              <a href="/work">Explore More</a>
            </div>
          </div>
        </div>
      );
    }