import './Home.css';

const Home = () => {
  return (
    <div className="home-section">
       <section className="intro-section">
                  <h1>Hello, I'm Mashhood</h1>
                  <p>Welcome to my portfolio. I'm an aspiring industrial engineer with a focus on data analysis, supply chain management, and operations research.</p>
                </section>

                <section className="projects-section">
                  <h2>Projects & Achievements</h2>
                  <ul>
                    <li>Led an internship and took initiatives in that duration.</li>
                    <li>Developed a basic React calculator and built a Resume Builder.</li>
                    <li>Active in roles within university organizations, enhancing team collaboration and project outcomes.</li>
                  </ul>
                </section>
    </div>
  )
}

export default Home
