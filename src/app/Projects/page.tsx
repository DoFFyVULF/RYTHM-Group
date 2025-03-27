import { Container } from "reactstrap";
import Header from "../components/Header/Header";
import Image from "next/image";
import "../Projects/Projects.scss"
import Footer from "../components/Footer/Footer";

export default function Projects() {
    return (
        <Container fluid>
            <Header />
            <main>
                <section className="Hero-Section">
                    <div className="HeroInfo">
                        <h1>Yellow label clothing</h1>
                        <p>Quisque id elit semper, vehicula tellus in, posuere lacus Nisi eros, finibus ac eleifend at, varius vel purus.</p>
                        <button>View project</button>
                    </div>
                </section>
                <Container>
                    <section className='Lore-Section'>
                        <span className='Lore-Explore'>scroll</span>
                        <div className="Lore-Cards">
                            <div className="Lore-Card">
                                <div className="Lore-Card-Image max-w-96 h-96 bord">
                                    <Image className='w-full h-full object-cover' src='/images/loremsms.jpeg' alt='' width={400} height={800} />
                                </div>
                                <div className="Lore-Card-CatNDate">
                                    <span className='Lore-Card-Category'>DESIGN</span>
                                    <span>5.10.2021</span>
                                </div>
                                <h4 className='text-4xl text-center'>Yellow label clothing</h4>
                            </div>
                            <div className="Lore-Card">
                                <div className="Lore-Card-Image max-w-96 h-96 bord">
                                    <Image className='w-full h-full object-cover' src='/images/loremsms.jpeg' alt='' width={400} height={800} />
                                </div>
                                <div className="Lore-Card-CatNDate">
                                    <span className='Lore-Card-Category'>DESIGN</span>
                                    <span>5.10.2021</span>
                                </div>
                                <h4 className='text-4xl text-center'>Yellow label clothing</h4>
                            </div>
                            <div className="Lore-Card">
                                <div className="Lore-Card-Image max-w-96 h-96 bord">
                                    <Image className='w-full h-full object-cover' src='/images/loremsms.jpeg' alt='' width={400} height={800} />
                                </div>
                                <div className="Lore-Card-CatNDate">
                                    <span className='Lore-Card-Category'>DESIGN</span>
                                    <span>5.10.2021</span>
                                </div>
                                <h4 className='text-4xl text-center'>Yellow label clothing</h4>
                            </div>
                            <div className="Lore-Card">
                                <div className="Lore-Card-Image max-w-96 h-96 bord">
                                    <Image className='w-full h-full object-cover' src='/images/loremsms.jpeg' alt='' width={400} height={800} />
                                </div>
                                <div className="Lore-Card-CatNDate">
                                    <span className='Lore-Card-Category'>DESIGN</span>
                                    <span>5.10.2021</span>
                                </div>
                                <h4 className='text-4xl text-center'>Yellow label clothing</h4>
                            </div>
                            <div className="Lore-Card">
                                <div className="Lore-Card-Image max-w-96 h-96 bord">
                                    <Image className='w-full h-full object-cover' src='/images/loremsms.jpeg' alt='' width={400} height={800} />
                                </div>
                                <div className="Lore-Card-CatNDate">
                                    <span className='Lore-Card-Category'>DESIGN</span>
                                    <span>5.10.2021</span>
                                </div>
                                <h4 className='text-4xl text-center'>Yellow label clothing</h4>
                            </div>
                            <div className="Lore-Card">
                                <div className="Lore-Card-Image max-w-96 h-96 bord">
                                    <Image className='w-full h-full object-cover' src='/images/loremsms.jpeg' alt='' width={400} height={800} />
                                </div>
                                <div className="Lore-Card-CatNDate">
                                    <span className='Lore-Card-Category'>DESIGN</span>
                                    <span>5.10.2021</span>
                                </div>
                                <h4 className='text-4xl text-center'>Yellow label clothing</h4>
                            </div>
                        </div>
                        <div className="btn-lore">
                            <button>next</button>
                        </div>
                    </section>
                </Container>
                <section className='startCov-Bg'>
                    <Container>
                        <div className='startCov'>
                            <span>start the conversation</span>
                            <h3>Let's start building binge-worthy experience for customers</h3>
                            <button>schedule a call</button>
                        </div>
                    </Container>
                </section>
                <Container>
                    <section className='insta-Section'>
                        <div className="insta-info">
                            <span>@webflow</span>
                            <h3>Let's get toknow each other</h3>
                            <a href="https://instagram.com">Follow us</a>
                        </div>
                        <div className="insta-posts">
                            <a href="#">
                                <div className="insta-card">
                                    <Image className='w-full h-full object-cover' src='/InstaSec/ff1.jpeg' alt='' width={250} height={250} quality={100}></Image>
                                </div>
                            </a>
                            <a href="#">
                                <div className="insta-card">
                                    <Image className='w-full h-full object-cover' src='/InstaSec/ff1.jpeg' alt='' width={250} height={250} quality={100}></Image>
                                </div>
                            </a>
                            <a href="#">
                                <div className="insta-card">
                                    <Image className='w-full h-full object-cover' src='/InstaSec/ff1.jpeg' alt='' width={250} height={250} quality={100} ></Image>
                                </div>
                            </a>
                            <a href="#">
                                <div className="insta-card">
                                    <Image className='w-full h-full object-cover' src='/InstaSec/ff1.jpeg' alt='' width={250} height={250} quality={100} ></Image>
                                </div>
                            </a>
                        </div>
                    </section>
                    <section className='contact-Section'>
                        <div className="contact-Info">
                            <h4>RYTHM</h4>
                            <p>Proin euismod, urna vitae auctor venenatis, mi metus consectetur est, non rutrum sapien eros non mauris. Praesent ex felis.</p>
                            <a href="#">learn more</a>
                        </div>
                        <div className="contact-Cards">
                            <div className="contact-Card">
                                <span className='font-bold text-3xl mt-5'>Email</span>
                                <span>Sarah Pratt, Creative director</span>
                                <button>email us</button>
                                <span className='contact-email'>RYTHM@RYTHMGroup.com</span>
                            </div>
                            <div className="contact-Card">
                                <span className='font-bold text-3xl mt-5'>Phone</span>
                                <span>Sarah Pratt, Creative director</span>
                                <button>phone us</button>
                                <span className='contact-phone'>7-995-555-232</span>
                            </div>
                        </div>
                    </section>
                </Container>
            </main>
            <Footer/>
        </Container>
    )
}