import { useState, useEffect } from 'react'
import Header from '../../components/Header.jsx'
import Box from '../../components/CourseBox.jsx'
import Loading from '../../components/Loading.jsx'
import { katakanas, romajiLetters } from '../../components/katakana.jsx'
import { rand, getOptions, shuffle } from '../randomizer.jsx'


const Romakana = () => {
    const [questions, setQuestions] = useState(null);
    const [selected, setSelected] = useState(null);
    const [locked, setLocked] = useState(false);
    
    const newQuestion = () => {
        const index = rand(romajiLetters.length);
        const chosenRomaji = romajiLetters[index];
        const katakana = katakanas[index];
        
        const fetchOption = getOptions(katakanas, katakana);
        const options = shuffle([katakana, ...fetchOption]);
        
        setQuestions({ chosenRomaji, katakana, options });
        setSelected(null);
        setLocked(false);
    }
    
    useEffect(() => {
        setTimeout(() => {
            newQuestion();
        }, 200);
    }, [])
    
    const checkAnswer = (choice) => {
        if (locked) return;
        setSelected(choice);
        setLocked(true);
        
        setTimeout(() => {
            newQuestion();
        }, 800);
    };
    
    if (!questions) return <Loading />;
    
    return (
        <div className="bg-[#cdcbf0] h-[100svh] overflow-hidden">
            <Header />
            
            <main className="flex flex-col justify-center items-center h-[100dvh]">
                <Box>
                    <h2 className="text-3xl font-bold text-center">{questions.chosenRomaji}</h2>
                    <p className="mb-2">The letter above resembles...</p>
                    <div className="flex flex-col gap-y-3">
                        {questions.options.map((item) => {
                            const isCorrect = item === questions.katakana;
                            const isSelected = item === selected;
                            let color = "bg-transparent";
                        
                            if (locked) {
                                if (isCorrect) color = "bg-green-500 text-neutral-200 active:bg-green-400";
                                else if (isSelected) color = "bg-red-600 text-white active:bg-red-500";
                            }
                            
                            return (
                                <button key={item} onClick={() => checkAnswer(item)} className={`
                                w-full rounded-lg border-[1px] border-black p-2 px-3 text-center active:bg-neutral-300
                                transition-all duration-[.5s]
                                ${color}
                                `}>{item}</button>
                            )
                        })}
                    </div>
                </Box>
            </main>
        </div>
    )
}
export default Romakana