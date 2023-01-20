import './header.scss'
import logo from '../../assets/images/logo/logo.PNG'

export const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo"></img>
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </header>
    );
}
