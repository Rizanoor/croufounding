import logo from "../../../assets/images/logo.svg";
import Auth from "./auth";
import Menu from "./menu";


function Navbar() {
    return (
        <>
            <header className="flex items-center">
                <div style={{ height: '54px' }} className="pr-5">
                    <img src={logo} alt="logo" className="h-full" />
                </div>
                <ul className="flex items-center">
                    <Menu title="Home" href="/" />
                    <Menu title="Project" href="/project" />
                    <Menu title="Features" href="/" />
                    <Menu title="Success Stories" href="/" />
                </ul>
                <ul className="flex ml-auto items-center mt-2">
                    <Auth title="Sign in" href="/sign-in" />
                    <Auth title="Sign up" href="/sign-up" />
                </ul>
            </header>
        </>
    )
}

export default Navbar