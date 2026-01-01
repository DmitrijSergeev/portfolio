import {About} from "@/ui/header/menu/about/About.tsx";
import {FeedBack} from "@/ui/header/menu/feedback/FeedBack.tsx";
import {Projects} from "@/ui/header/menu/projects";

export const Menu = () => {
    return (
        <div className={'flex gap-4'}>
            <Projects/>
            <About/>
            <FeedBack/>
        </div>
    );
};
