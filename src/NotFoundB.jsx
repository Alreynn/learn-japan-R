import Header from './components/Header.jsx'
import Box from './components/CourseBox.jsx'
import { useRouteError } from 'react-router-dom'
import { Link } from 'react-router-dom'

const NotFoundB = () => {
    const error = useRouteError()
    return (
        <div className="bg-[#cdcbf0] h-[100svh] overflow-hidden">
            <Header />
            
            <main className="flex flex-col justify-center items-center h-[100dvh]">
                <h2 className="text-8xl font-bold">Error!</h2>
                <p>Developer Error</p>
                <p>Something went wrong!</p>
                <div className="bg-[#e9e8ef] rounded-md w-fit mt-2 p-2 px-4">
                    {error?.statusText || error?.message}
                </div>
            </main>
        </div>
    )
}

export default NotFoundB