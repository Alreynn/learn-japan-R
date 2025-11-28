import Header from './components/Header.jsx'
import Box from './components/CourseBox.jsx'
import { useRouteError, Link } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="bg-[#cdcbf0] h-[100svh] overflow-hidden">
            <Header />
            
            <main className="flex flex-col justify-center items-center h-[100dvh]">
                <h2 className="text-6xl font-bold">Error!</h2>
                <p>Developer Error</p>
                <p>Something went wrong!</p>
                <div className="bg-[#e9e8ef] rounded-md w-2/3 overflow-scroll mt-2 p-2 px-4">
                    {error || error?.statusText || error?.message}
                </div>
            </main>
        </div>
    )
}

export default ErrorPage