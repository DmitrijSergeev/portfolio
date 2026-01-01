import {Logo} from "@/ui/header/logo/Logo.tsx";
import {Menu} from "@/ui/header/menu/Menu.tsx";

export const Header = () => {
    return (
        <div className={'flex justify-around items-start w-full mt-5'}>
            <Logo/>
            <Menu/>
        </div>
    );
};
