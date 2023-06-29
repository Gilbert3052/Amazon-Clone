import React, { useEffect } from "react";
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import "./App.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { auth } from "./components/Firebase"
import { useStateValue } from "./components/StateProvider";


function App() {

  const [{}, dispatch] = useStateValue()

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {

      if(authUser) { 
        dispatch({
          type: 'SET_USER',
          user: authUser
      })
      }else {
        dispatch({
          type: 'SET_USER',
          user: null
      })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Header />
          <Routes>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/checkout" element={<Checkout />}>
            </Route>
            
            <Route path="/" element={<Home />}>
            </Route>
          </Routes>
      </div>
    </Router>
  )
}

export default App
