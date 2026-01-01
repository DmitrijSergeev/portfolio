import {Main} from "@/ui/components/main/Main.tsx";
import {Route, Routes} from "react-router-dom";
import {Projects} from "@/ui/header/menu/projects";
import {About} from "@/ui/header/menu/about";

export const Routing = () => (
    <div>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/about"
                   element={<section className='pt-24 px-4 pb-10 max-w-6xl mx-auto'>
                       <p>
                           <About/>
                       </p>
                   </section>}/>
            <Route path="/contacts" element={<section className='pt-24 px-4 pb-10 max-w-6xl mx-auto'>
                <p>
                    <Projects/>
                </p>
            </section>}/>
        </Routes>
    </div>
)