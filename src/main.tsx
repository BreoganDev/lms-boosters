<<<<<<< HEAD
import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css" // <-- importar tu archivo que tiene @tailwind
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
=======
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
>>>>>>> e37e86e6ccda632c80d477b2d6de0d45860c5c1e
