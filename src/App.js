import './css/base.css'
import {Outlet} from 'react-router-dom'
function App() {
  return (
    <div >
      
    <h1>你好</h1>
    <Outlet />
    </div>
  );
}

export default App;
