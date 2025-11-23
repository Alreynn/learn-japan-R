import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Hiragana from './courses/hiragana/Hiragana.jsx'
import Hiramaji from './courses/hiragana/Hiragana2Romaji.jsx'
import NotFound from './NotFound.jsx'
import NotFoundB from './NotFoundB.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    { path: '/', element: <App />, errorElement: <NotFoundB /> },
    { path: '/hiragana', element: <Hiragana />, errorElement: <NotFoundB /> },
    { path: '/hiraganaromaji', element: <Hiramaji />, errorElement: <NotFoundB /> },
    { path: '*', element: <NotFound /> },
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
