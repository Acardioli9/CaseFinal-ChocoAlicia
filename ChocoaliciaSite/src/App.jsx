import React from 'react'
import './App.css'

import {  Routes, Route, Link, Navigate, Outlet } from 'react-router-dom'

import Index from './components/pages/Index/Index'
import QuemSomos from './components/pages/QuemSomos'
import NossoTime from './components/pages/NossoTime'
import Presentes from './components/pages/Presentes/Presentes'
import Contato from './components/pages/Contato'

import LoginAdmin from './components/Admin/LoginAdmin'
import Admin from './components/Admin/Admin'
import Produtos from './components/Admin/Produtos'
import LinhasComerciais from './components/Admin/LinhasComerciais'
import AdcProduto from './components/Admin/AdcProduto'
import AdcLinha from './components/Admin/AdcLinha'
import EditarProduto from './components/Admin/EditarProduto'
import EditarLinha from './components/Admin/EditarLinha'

import ImpulseCompany from './components/ImpulseCompany/ImpulseCompany'

const ProtectedRoute = ({
  redirectPath = '/',
  children,
}) => {
  let isAllowed = localStorage.getItem('user_loggin');

  if (isAllowed == 'false') {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/QuemSomos' element={<QuemSomos />} />
        <Route path='/NossoTime' element={<NossoTime />} />
        <Route path='/Presentes' element={<Presentes />} />
        <Route path='/Contato' element={<Contato />} />
        <Route path='/ImpulseCompany' element={<ImpulseCompany />} />

        {/* <Route path='/LoginAdmin' element={<LoginAdmin />} /> */}
        <Route path='/LoginAdmin' element={(localStorage.getItem('user_loggin') == 'false') ? <LoginAdmin /> : <Navigate to="/Admin" replace={true} />} />
        {/* <Route path='/Admin' element={<Admin />} /> */}

        {/* isAllowed={false} */}
        <Route element={<ProtectedRoute  />}>
          <Route path='/Admin' element={<Admin />} />
          <Route path='/LinhasComerciais' element={<LinhasComerciais />} />
          <Route path='/Produtos' element={<Produtos />} />
          <Route path='/AdicionarProduto' element={<AdcProduto />} />
          <Route path='/AdicionarLinha' element={<AdcLinha/>} />
          <Route path='/EditarProduto' element={<EditarProduto />} />
          <Route path='/EditarLinha' element={<EditarLinha />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace={true} />}/>
      </Routes>
    </>
  )
}


export default App
