import Header from '../../components/Header.jsx'
import Box from '../../components/CourseBox.jsx'
import { Link } from 'react-router-dom'

const Hiragana = () => {
    return (
        <div className="bg-[#cdcbf0] h-[100svh] overflow-hidden">
            <Header />
            
            <main className="flex justify-center items-center h-[100dvh]">
                <Box>
                    <p className="mb-2">Choose courses to choose from...</p>
                    <div className="flex flex-col gap-y-3 text-center">
                        <Link to={'/hiraganaromaji'} className="w-full rounded-lg border-[1px] border-black p-2 px-3 transition-all active:bg-neutral-300">Hiragana to Romaji</Link>
                        <Link to={'/romajihiragana'} className="w-full rounded-lg border-[1px] border-black p-2 px-3 transition-all active:bg-neutral-300">Romaji to Hiragana</Link>
                        <Link to={'/hiraganaletters'} className="w-full rounded-lg border-[1px] border-black p-2 px-3 transition-all active:bg-neutral-300">List of Letters</Link>
                    </div>
                </Box>
            </main>
        </div>
    )
}
export default Hiragana