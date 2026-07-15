


const Navbar = ()=>{
    return(
        <div className="sticky top-0 w-full h-15 flex items-center justify-between bg-[#13242C]">
            <p className="text-[#A9ACAD] hover:text-white text-lg shadow-md ml-3">
                Vansh Chauhan
            </p>
            <nav className="mr-5 flex items-center justify-center text-[#A9ACAD] hover:text-white  text-lg ml-3">
                <ul className="flex items-center gap-8 text-[#A9ACAD] text-lg">
                    <li>
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Projects
                        </a>
                    </li>
                    <li>
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