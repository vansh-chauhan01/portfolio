


const Navbar = ()=>{
    return(
        <div className="sticky z-50 top-0 w-full h-18 flex items-center justify-between bg-[#13242C]">
            <p className="text-[#A9ACAD] hover:text-white text-lg shadow-md ml-3">
                <a href="#hero">
                    Vansh Chauhan
                </a>
                
            </p>
            <nav className="mr-5 flex items-center justify-center text-[#A9ACAD] hover:text-white  text-lg ml-3">
                <ul className="flex items-center gap-8 text-[#A9ACAD] text-lg">
                    <li className="hover:text-white">
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li className="hover:text-white">
                        <a href="#Skills">
                            Skills
                        </a>
                    </li>
                    <li className="hover:text-white">
                        <a href="#projects">
                            Projects
                        </a>
                    </li>
                    <li className="hover:text-white">
                        <a href="">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            
        </div>
    )
}

export default Navbar;