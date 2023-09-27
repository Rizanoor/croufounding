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
                    <Menu />
                </ul>
                <ul className="flex ml-auto items-center mt-2">
                    <Auth />
                </ul>
            </header>
        </>
    )
}

export default Navbar