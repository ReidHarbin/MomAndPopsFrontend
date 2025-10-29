import textlessLogo from "../logo_textless.svg"

function NavBar(){//
    return (
        <div className="bg-slate-200 fixed top-0 left-0 right-0 flex max-h-36 justify-between text-4xl font-oswald">
            <div className="flex self-center h-16 grow border-red-800 border-2 border-l-0 border-r-0 justify-center">
                <button>Menu</button>
            </div>
            <img className="h-48 ml-10 mr-10" src={textlessLogo}></img>
            <div className="flex self-center h-16 grow border-red-800 border-2 border-l-0 border-r-0 justify-center">
                <button>Order</button>
            </div>
        </div>
    );
}

export default NavBar;