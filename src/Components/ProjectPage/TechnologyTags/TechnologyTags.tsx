import "./TechnologyTags.css"
import type { JSX } from "react"

interface TechnologyTagsProps {
  technologies: string[]
}

export default function TechnologyTags({ technologies }: TechnologyTagsProps): JSX.Element {

  return (
    <div className="technology-tags-container">
      <h3 className="tags-title">Tecnologías</h3>
      <div className="tags-wrapper">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
