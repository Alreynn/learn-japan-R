import Header from './components/Header.jsx'
import Box from './components/CourseBox.jsx'
import './App.css'
import { Link } from 'react-router-dom'

const App = () => {
    return (
        <div className="bg-[#cdcbf0] min-h-[100svh] overflow-hidden">
            <Header />
            
            <main className="flex flex-col justify-center items-center h-[100dvh]">
                <Box>
                    <h2 className="text-2xl font-bold">Learn Japanese</h2>
                    <p className="mb-2">Start with learning...</p>
                    <div className="flex flex-col gap-y-3">
                        <Link to={"/hiragana"} className="w-full rounded-lg border-[1px] border-black p-2 px-3 text-center transition-all active:bg-neutral-300">Hiragana</Link>
                        <Link to={"/katakana"} className="w-full rounded-lg border-[1px] border-black p-2 px-3 text-center transition-all active:bg-neutral-300">Katakana</Link>
                        <Link to={"/kanji"} className="w-full rounded-lg border-[1px] border-black p-2 px-3 text-center transition-all active:bg-neutral-300">Kanji</Link>
                    </div>
                </Box>
            </main>
        </div>
    )
}

export default App
