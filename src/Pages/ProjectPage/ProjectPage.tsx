import { useEffect, useState } from "react"
import ProjectDescription from "../../Components/ProjectPage/ProjectDescription/ProjectDescription"
import ProjectMedia from "../../Components/ProjectPage/ProjectMedia/ProjectMedia"
import type ProjectInfo from "src/interfaces/ProjectInfo.interface"
import "./ProjectPage.css"
import type { JSX } from "react"
import { ArrowLeft } from "lucide-react"
import TechnologyTags from "../../Components/ProjectPage/TechnologyTags/TechnologyTags"

export default function ProjectPage(pageProps: ProjectInfo): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false)

  // Activar las animaciones después de que el componente se monte
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="project-container">
      <div className="back-button-container">
        <button className="back-button" onClick={() => window.history.back()}>
          <ArrowLeft size={24} />
        </button>
      </div>
      <main className="project-body">
        <div className="project-grid">
          <div className={`media-container ${isLoaded ? "animate-from-left" : ""}`}>
            <ProjectMedia projectImages={pageProps.projectImages} projectUrl={pageProps.projectUrl} />
          </div>
          <div className={`info-container ${isLoaded ? "animate-from-bottom" : ""}`}>
            <ProjectDescription projectName={pageProps.name} projectDescription={pageProps.description} />

            {/* Tags de tecnologías */}
            <TechnologyTags technologies={pageProps.technologies} />
          </div>
        </div>
      </main>
    </div>
  )
}
