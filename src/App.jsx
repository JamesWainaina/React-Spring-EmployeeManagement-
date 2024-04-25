
import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponenet from './components/HeaderComponenet'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import {BrowserRouter,Route,Routes} from 'react-router-dom'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <HeaderComponenet />
          <Routes>
            {/* // http://localhost:3000 */}
            <Route path='/' element= {<ListEmployeeComponent />} ></Route>
            {/* //http://localhost:3000/employees */}
            <Route path='/employees' element= {<ListEmployeeComponent />} ></Route>
            <Route path='/addEmployee' element= {< EmployeeComponent />}  ></Route>
            {/* //http://localhost:3000/edit/employees */}
            <Route path='/edit/employee/:id' element={<EmployeeComponent/>}></Route>
          </Routes>
        
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
