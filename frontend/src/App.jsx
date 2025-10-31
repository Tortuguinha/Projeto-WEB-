import router from "./routes"
import { RouterProvider } from "react-router-dom"
import { AlertProvider } from "./context/AlertContext"

function App() {

  return (
    <AlertProvider>
      <RouterProvider router={router} />
    </AlertProvider>
  )
}

export default App
