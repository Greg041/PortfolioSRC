// Local imports
import './MyWork.css';
import themePattern from 'src/assets/theme_pattern.svg';
// Libraries imports
import { Link } from 'react-router-dom';
import { PROJECTS } from 'src/consts/projects.const';

const MyWork = (): JSX.Element => {
  return (
    <div id="portfolio" className='my-work'>
      <div className="my-work-title">
        <h2>Mis últimos trabajos</h2>
        <img src={themePattern} alt="" />
      </div>
      <div className="my-work-container">
        {
          PROJECTS.map(
            project => <Link to={`projects/${project.pagePath}`} key={project.name}>
                <img src={project.projectImages[0]} alt={`${project.name} project link`} />
              </Link>
          )
        }
      </div>
    </div>
  )
}

export default MyWork;