import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PublicRouter } from '-/routes';

function App() {
  return (
    <Router>
      <div className="App">
        <p>dd</p>
        <Routes>
          {PublicRouter.map((ele, index) => {
            const Com = ele.component;
            const aa = ele.path;

           

            return <Route key={index} path={ele.path} component={<Com />} />;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
