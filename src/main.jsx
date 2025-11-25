import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Hiragana from './courses/hiragana/Hiragana.jsx'
import Hiramaji from './courses/hiragana/Hiragana2Romaji.jsx'
import Romagana from './courses/hiragana/Romaji2Hiragana.jsx'
import Katakana from './courses/katakana/Katakana.jsx'
import Katamaji from './courses/katakana/Katakana2Romaji.jsx'
import Romakana from './courses/katakana/Romaji2Katakana.jsx'
import NotFound from './NotFound.jsx'
import ErrorPage from './Error.jsx'

// This file needs an improvement
const router = createBrowserRouter([
    { path: '/', element: <App />, errorElement: <ErrorPage /> },
    { path: '/hiragana', element: <Hiragana />, errorElement: <ErrorPage /> },
    { path: '/hiraganaromaji', element: <Hiramaji />, errorElement: <ErrorPage /> },
    { path: '/romajihiragana', element: <Romagana />, errorElement: <ErrorPage /> },
    { path: '/katakana', element: <Katakana />, errorElement: <ErrorPage /> },
    { path: '/katakanaromaji', element: <Katamaji />, errorElement: <ErrorPage /> },
    { path: '/romajikatakana', element: <Romakana />, errorElement: <ErrorPage /> },
    { path: '*', element: <NotFound /> },
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
