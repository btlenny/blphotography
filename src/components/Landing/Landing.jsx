import './Landing.css';

export default function Landing() {
  return (
    <div className="landing-page">
      <div className="content-container">
        <div className="image-container">
          <img src="/images/PhotoLanding.jpg" alt="Landing Page Image" />
        </div>
        <div className="text-container text-center">
        <img src="/logo.svg" id="logo" className=" mx-auto" />
          <h1>RAW MOMENTS CAPTURED</h1>
         
          <a href="/work" className="border p-2 inline-block mt-4">
            SEE WORK
          </a>
        </div>
      </div>
    </div>
  );
}