import React from 'react';
import { BrowserRouter , Routes , Route} from 'react-router-dom';


const App = ()=> {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/login' element= {<Login/>} />
          <Route path='/register' element= {<Register/>} />
        </Route>
        <Route path='/dashboard' element={<DashBoard/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App


