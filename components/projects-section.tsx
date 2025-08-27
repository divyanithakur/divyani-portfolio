export default function ProjectsSection() {
  return (
    <div className="projects-section">
      <div className="project">
        <h3>Project 1 (Portfolio)</h3>
        <iframe
          style={{ border: "1px solid rgba(0,0,0,0.1)", width: "100%", height: "500px" }}
          src="https://your-project-link.com"
        ></iframe>
      </div>

      <div className="project">
        <h3>Project 2 (UI/UX)</h3>
        <iframe
          style={{ border: "1px solid rgba(0,0,0,0.1)", width: "100%", height: "500px" }}
          src="https://your-uiux-link.com"
        ></iframe>
      </div>
    </div>
  );
}
