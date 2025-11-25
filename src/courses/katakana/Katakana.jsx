import Header from '../../components/Header.jsx'
import Box from '../../components/CourseBox.jsx'
import { Link } from 'react-router-dom'

const Katakana = () => {
    return (
        <div className="bg-[#cdcbf0] h-[100svh] overflow-hidden">
            <Header />
            
            <main className="flex justify-center items-center h-[100dvh]">
                <Box>
                    <p className="mb-2">Choose courses to choose from...</p>
                    <div className="flex flex-col gap-y-3 text-center">
                        <Link to={'/katakanaromaji'} className="w-full rounded-lg border-[1px] border-black p-2 px-3 transition-all active:bg-neutral-300">Katakana to Romaji</Link>
                        <Link to={'/romajikatakana'} className="w-full rounded-lg border-[1px] border-black p-2 px-3 transition-all active:bg-neutral-300">Romaji to Katakana</Link>
                        <Link to={'/katakanaletters'} className="w-full rounded-lg border-[1px] border-black p-2 px-3 transition-all active:bg-neutral-300">List of Letters</Link>
                    </div>
                </Box>
            </main>
        </div>
    )
}
export default Katakana