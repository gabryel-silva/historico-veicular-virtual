import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Login } from './routes/Login';
import { Cadastro } from './routes/_cadastro/Cadastro';
import { Home } from './routes/Home';
import { Error } from './routes/ErrorPage';
import { RegistrationSuccess } from './routes/RegistrationSuccess';
import { CadastroEmpresa } from './routes/_cadastro/empresa/CadastroEmpresa';
import { CadastroVeiculo } from './routes/CadastroVeiculo';
import { Perfil } from './routes/Perfil';
import { Search } from './routes/Search';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "cadastro",
          element: <Cadastro />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "RegistrationSuccess",
          element: <RegistrationSuccess />,
        },
        {
          path: "cadastroEmpresa",
          element: <CadastroEmpresa />,
        },
        {
          path: "cadastroVeiculo",
          element: <CadastroVeiculo />
        },
        {
          path: "perfil",
          element: <Perfil />
        },
        {
          path: "/pesquisa",
          element: <Search/>
        }
      ],
    }
  ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
