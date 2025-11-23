import { useState } from 'react'
import Header from '../../components/Header.jsx'
import Box from '../../components/CourseBox.jsx'
import Loading from '../../components/Loading.jsx'
import { hiraganas, romajiLetters } from '../../components/hiragana.jsx'

const Hiramaji = () => {
    const [isTrue, setBool] = useState(null);
    const [options, setOptions] = useState([]);
    const checkAnswer = (condition) => {
        if (condition === true) {
            setBool(true);
            setTimeout(() => {
                window.location.reload();
            }, 750)
        } else {;
            setBool(false);
            setTimeout(() => {
                window.location.reload();
            }, 750)
        }
    }
    
    return (
        <div className="bg-[#cdcbf0] h-[100svh] overflow-hidden">
            <Header />
            <Loading />
            
            <main className="flex flex-col justify-center items-center h-[100dvh]">
                <Box>
                    <h2 className="text-3xl font-bold text-center">私は、父と母は赤車が好きですよ。あなたは？</h2>
                    <p className="mb-2">The letter above resembles...</p>
                    <div className="flex flex-col gap-y-3">
                        <button onClick={() => checkAnswer(true)} className={`
                        w-full rounded-lg border-[1px] border-black p-2 px-3 text-center active:bg-neutral-300
                        transition-all duration-[.5s]
                        ${isTrue === null ? "bg-transparent" : "bg-green-600 text-white"}
                        `}>Jim</button>
                        <button onClick={() => checkAnswer(false)} className="w-full rounded-lg border-[1px] border-black p-2 px-3 text-center transition-all active:bg-neutral-300">kei</button>
                    </div>
                </Box>
            </main>
        </div>
    )
}
export default Hiramaji