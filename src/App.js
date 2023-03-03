import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PublicRouter } from '-/routes';
import { DefaultLayout } from './Layout';
import '-/component/DarkTheme/DarkTheme.scss';

function App() {
  const handleTheme = (theme) => {

  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {PublicRouter.map((ele, index) => {
            const Com = ele.component;
            let Layout = DefaultLayout;

            if (ele.layout !== null) {
              Layout = ele.layout;
            }

            return (
              <Route
                key={index}
                path={ele.path}
                element={
                  <Layout handleTheme={handleTheme} >
                    <Com />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
