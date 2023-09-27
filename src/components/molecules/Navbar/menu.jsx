function Menu() {
    return (
        <>
            <li>
                <a
                    className="text-white hover:text-teal-500 text-lg px-4 py-3"
                    href="/"
                >
                    Home
                </a>
            </li>
            <li>
                <a
                    className="text-white hover:text-teal-500 text-lg px-4 py-3"
                    href="/projects.html"
                >
                    Project
                </a>
            </li>
            <li>
                <a
                    className="text-white hover:text-teal-500 text-lg px-4 py-3"
                    href="/features.html"
                >
                    Features
                </a>
            </li>
            <li>
                <a
                    className="text-white hover:text-teal-500 text-lg px-4 py-3"
                    href="/story.html"
                >
                    Success Stories
                </a>
            </li>
        </>
    )

}

export default Menu