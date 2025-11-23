import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="absolute bg-[#c8c8ee] w-full p-3 px-4">
            <Link to={'/'}>
                <h1 className="text-3xl font-bold">Learn Japan</h1>
            </Link>
        </header>
    )
}
export default Header