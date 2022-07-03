import React, { useState } from "react"
import { createRoot } from "react-dom/client"

export const App:React.FC = () => {
    return <div>
        <p>Wow</p>
    </div>
}


createRoot(document.getElementById("app")!).render(<App />)
