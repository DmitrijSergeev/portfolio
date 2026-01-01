import {Header} from "@/ui/header/Header.tsx";
import {Routing} from "@/ui/common/routing";

function App() {

    return (
        <div className={'flex'}>
            <div className={'fixed bg-gray-800 top-0 left-0 w-full h-20 flex justify-around'}>
                <Header/>
            </div>
            <div className="pt-20"> {/* 80px = высота хедера */}
                <Routing />
            </div>
        </div>
    )
}

export default App
