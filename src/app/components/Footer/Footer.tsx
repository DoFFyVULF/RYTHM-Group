import { Container } from "reactstrap";
import style from './Footer.module.scss'

export default function Footer(){
    return(
        <Container>
            <footer className={style.footer}>
                <h5>© 2020 RYTHM Template</h5>
                <ul>
                    <li>
                        <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                </ul>
            </footer>
        </Container>
    )
}