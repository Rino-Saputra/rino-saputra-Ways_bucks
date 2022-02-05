import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

import PrivateRoute from '../route/PrivateRoute';

import { BrowserRouter as Router, Route, Routes, Link }from 'react-router-dom';
import { Header, Landing, DetailProduct,UserChart, AdminData, AddProductAdmin, UserProfile } from '../containerExport/forApp'

function App() {
  return (
      <Router>
        <Header />
        <Routes>
            <Route path="/" element={ <Landing /> }></Route>
            <Route path="/" element={ <PrivateRoute /> } >
              <Route path="/user" element={ <UserProfile /> }></Route>
              <Route path="/userchart" element={ <UserChart /> }></Route>
              <Route path="/admindata" element={ <AdminData /> }></Route>
              <Route path="/addproduct" element={ <AddProductAdmin /> }></Route>
              <Route path="/detailproduct/:id" element={ <DetailProduct /> }></Route>
            </Route>
        </Routes>
      </Router>
  );
}

export default App;
