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
import Kanji from './courses/kanji/Kanji.jsx'
import N5 from './courses/kanji/N5.jsx'
import NotFound from './NotFound.jsx'
import ErrorPage from './Error.jsx'

// This file needs an improvement
const router1 = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/hiragana', element: <Hiragana /> },
            { path: '/hiragana/hiraganaromaji', element: <Hiramaji /> },
            { path: '/hiragana/romajihiragana', element: <Romagana /> },
            { path: '/katakana', element: <Katakana /> },
            { path: '/katakana/katakanaromaji', element: <Katamaji /> },
            { path: '/katakana/romajikatakana', element: <Romakana /> },
            { path: '/kanji', element: <Kanji /> },
            { path: '/kanji/N5', element: <N5 /> },
            { path: '*', element: <NotFound /> },
        ]
    }
])

const router = createBrowserRouter([
    { path: '/', element: <App />, errorElement: <ErrorPage /> },
    { path: '/hiragana', element: <Hiragana />, errorElement: <ErrorPage /> },
    { path: '/hiragana/hiraganaromaji', element: <Hiramaji />, errorElement: <ErrorPage /> },
    { path: '/hiragana/romajihiragana', element: <Romagana />, errorElement: <ErrorPage /> },
    { path: '/katakana', element: <Katakana />, errorElement: <ErrorPage /> },
    { path: '/katakana/katakanaromaji', element: <Katamaji />, errorElement: <ErrorPage /> },
    { path: '/katakana/romajikatakana', element: <Romakana />, errorElement: <ErrorPage /> },
    { path: '/kanji', element: <Kanji />, errorElement: <ErrorPage /> },
    { path: '/kanji/N5', element: <N5 />, errorElement: <ErrorPage /> },
    { path: '*', element: <NotFound /> },
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
