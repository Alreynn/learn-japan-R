import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export const HeaderHome = () => {
    return (
        <header className="absolute bg-[#c8c8ee] w-full p-3 px-4">
            <Link to={'/'}>
                <h1 className="text-3xl font-bold">Learn Japan</h1>
            </Link>
        </header>
    )
}
const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="absolute flex gap-3 items-center bg-[#c8c8ee] w-full p-3 px-4">
            <ArrowLeft onClick={() => navigate(-1)} />
            <h1 className="text-3xl font-bold">Learn Japan</h1>
        </header>
    )
}
export default Header