import pizza from "./resources/pizza_hp.jpg"

function Home(){
    return (
        <div className="flex h-full overflow-hidden">
        <div className="overscroll-none font-notable text-9xl h-full content-center ml-2 w-1/2">
            <div className="text-right pr-2">
                <div className="">Mom and Pop's</div>
                <div className="w-full font-oswald text-4xl text-right">
                    <div>Kennesaw Ga.</div>
                    <div>Est. 2025</div>
                </div>
            </div>
        </div>
        <div className="h-1/2 w-1/2 content-center place-self-center">
            <img className="rounded-2xl" src={pizza}>
            </img>
        </div>

        </div>
    );
}

export default Home;