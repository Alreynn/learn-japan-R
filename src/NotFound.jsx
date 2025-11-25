import Header from './components/Header.jsx'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="bg-[#cdcbf0] h-[100svh] overflow-hidden">
            <Header />
            
            <main className="flex flex-col justify-center items-center px-5 text-center h-[100dvh]">
                <h2 className="text-3xl font-bold">404 Not Found</h2>
                <p>Some features may have not ready yet. Please wait for it's development.</p>
                <Link to={"/"}>
                    <p className="w-fit rounded-lg border-[1px] border-black p-1 px-3 mt-2 text-center transition-all active:bg-neutral-300">Back to home</p>
                </Link>
            </main>
        </div>
    )
}

export default NotFound