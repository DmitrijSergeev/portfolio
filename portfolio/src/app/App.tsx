import './App.css'
import {AboutMe} from "../aboutMe/AboutMe.tsx";
import {Contacts} from "../contacts/Contacts.tsx";
import {Skills} from "../skills/Skills.tsx";
import {Header} from "../header/Header.tsx";
import {Main} from "../main/Main.tsx";
import {Projects} from "../projects/Projects.tsx";
import {Footer} from "../footer/Footer.tsx";
function App() {

    return (
        <div className={'App'}>
            <Header/>
            <Main/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    )
}

export default App
