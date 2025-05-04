// Local imports
import Home from './Pages/HomePage/HomePage';
import ProjectPage from './Pages/ProjectPage/ProjectPage';
import Layout from './Layout';
import { PROJECTS } from './consts/projects.const';
// Libraries imports
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
        </Route>
        {
            PROJECTS.map(project => <Route 
              key={`${project.name}-page`}
              path={`/projects/${project.pagePath}`}
              element={<ProjectPage 
                name={project.name}
                description={project.description}
                projectImages={project.projectImages}
                projectUrl={project.projectUrl}
                technologies={project.technologies} />
              } />)
          }
      </Routes>
    </Router>
  )
}

export default App
