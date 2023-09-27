function Auth() {
    return (
        <>
            <li>
                <a
                    href="/register.html"
                    className="inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full mr-4"
                >
                    Sign Up
                </a>
            </li>
            <li>
                <a
                    href="/login.html"
                    className="inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full"
                >
                    My Account
                </a>
            </li>
        </>
    )
}

export default Auth;