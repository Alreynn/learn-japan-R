import { useState, useEffect } from 'react'

const Loading = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 200)
    }, [])
    
    return (
        <>
            {isLoading && (
                <div className="fixed flex justify-center items-center bg-[#cad3f5] inset-0">
                    <div className="bg-[#4563d7] aspect-square h-12 animate-spin"></div>
                </div>
            )}
        </>
    )
}
export default Loading