import s from './Header.module.scss'
export const Header = () => {
    return (
        <nav className={s.header}>
            <a className={s.navBarBrand} href="https://roman4egs1994.github.io/portfolio-app/">
                {/*<img src={Logotype} alt="logo"/>*/}
            </a>
            <div className={s.displayNoneNavigate}>
                <Nav/>
            </div>
            <div className={s.displayActiveNavigate}>
                <BurgerMenu/>
            </div>
        </nav>
    );
};
