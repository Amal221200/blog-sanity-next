import Link from "next/link";
import ThemeButton from "./ThemeButton";

const Header = () => {
    return (
        <header className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex justify-between h-16">
                <div className="flex justify-between items-center w-full">
                    <Link href="/">
                        <h1 className="text-2xl font-medium">
                            Jan <span className="text-teal-500">Blog</span>
                        </h1>
                    </Link>
                    <ThemeButton />
                </div>
            </nav>
        </header>
    );
}

export default Header;