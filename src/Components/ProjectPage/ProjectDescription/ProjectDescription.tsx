import "./ProjectDescription.css"
import type { JSX } from "react"

interface ProjectDescriptionProps {
  projectName: string
  projectDescription: string
}

export default function ProjectDescription({ projectName, projectDescription }: ProjectDescriptionProps): JSX.Element {
  return (
    <div className="project-description">
      <h1 className="project-title">{projectName}</h1>
      <div className="project-text">{projectDescription}</div>
    </div>
  )
}
