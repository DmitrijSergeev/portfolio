import {Logo} from "@/ui/header/logo/Logo.tsx";
import {Title} from "@/ui/header/title/Title.tsx";
import {Menu} from "@/ui/header/menu/Menu.tsx";

export const Header = () => {
    return (
        <div className={'flex'}>
            <Logo/>
            <Title/>
            <Menu/>
        </div>
    );
};
