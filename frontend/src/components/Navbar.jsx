import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
    <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-primary">Udyara</h1>
        <div className="space-x-6 text-sm">
            <Link to="/" className="hover:text-primary">Home</Link>
            <Link to="/features" className="hover:text-primary">Features</Link>
            <Link to="/how-it-works" className="hover:text-primary">How It Works</Link>
            <Link to="/policies" className="hover:text-primary">Policies</Link>
            <Link to="/roadmap" className="hover:text-primary">Roadmap</Link>
        </div>
    </nav>
    );
}