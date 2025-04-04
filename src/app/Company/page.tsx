import { Container } from 'reactstrap'
import Header from '../components/Header/Header';
import '../Company/Company.scss';
import Image from 'next/image';
import Footer from '../components/Footer/Footer';

export default function Company() {
    return (
        <Container fluid>
            <Header />
            <main>
                <section className="Hero-Section">
                    <div className="HeroInfo">
                        <h1>We are the team behind the creative</h1>
                        <button>Our Team</button>
                    </div>
                </section>
                <Container>
                    <section className='team-preview-sec'>
                        <div className="team-cards">
                            <div className="team-card">
                                <Image className='w-full h-full object-cover' src="/images/Card/card1.jpeg" alt='' width={800} height={500} quality={100} />
                            </div>
                            <div className="team-card">
                                <Image className='w-full h-full object-cover' src="/images/Card/card1.jpeg" alt='' width={800} height={500} quality={100} />
                            </div>
                            <div className="team-card">
                                <Image className='w-full h-full object-cover' src="/images/Card/card1.jpeg" alt='' width={800} height={500} quality={100} />
                            </div>
                            <div className="team-card">
                                <Image className='w-full h-full object-cover' src="/images/Card/card1.jpeg" alt='' width={800} height={500} quality={100} />
                            </div>
                        </div>
                    </section>
                    <section className='Inspiration-Section'>
                        <div className="Insporation-Info">
                            <h5>We're changing the way brands and influencers connect with customers online and offline.</h5>
                            <button>Sheesh</button>
                        </div>
                        <div className="Insporation-Card">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id elit semper, vehicula tellus in, posuere lacus. Curabitur nisi eros, finibus ac eleifend at, varius vel purus. Maecenas venenatis, nisl vitae efficitur tincidunt, turpis sem vestibulum nibh, eget feugiat felis quam et turpis. Pellentesque scelerisque massa nec.</p>
                            <div className="cores mb-6">
                                <div className="core">
                                    <div className="core-item">
                                        <div className="core-item-title flex gap-3.5 mb-6">
                                            <span>01</span>
                                            <span>Core value</span>
                                        </div>
                                        <p>Quisque id elit semper, vehicula tellus in, posuere lacus curabitur.</p>
                                    </div>
                                </div>
                                <div className="core">
                                    <div className="core-item">
                                        <div className="core-item-title flex gap-3.5 mb-6">
                                            <span>02</span>
                                            <span>Core value</span>
                                        </div>
                                        <p>Quisque id elit semper, vehicula tellus in, posuere lacus curabitur.</p>
                                    </div>
                                </div>
                                <div className="core">
                                    <div className="core-item">
                                        <div className="core-item-title flex gap-3.5 mb-6">
                                            <span>03</span>
                                            <span>Core value</span>
                                        </div>
                                        <p>Quisque id elit semper, vehicula tellus in, posuere lacus curabitur.</p>
                                    </div>
                                </div>
                                <div className="core">
                                    <div className="core-item">
                                        <div className="core-item-title flex gap-3.5 mb-6">
                                            <span>04</span>
                                            <span>Core value</span>
                                        </div>
                                        <p>Quisque id elit semper, vehicula tellus in, posuere lacus curabitur.</p>
                                    </div>
                                </div>
                            </div>
                            <p>Quisque id elit semper, vehicula tellus in, posuere lacus. Curabitur nisi eros, finibus ac eleifend at, varius vel purus. Maecenas venenatis, nisl vitae efficitur tincidunt, turpis sem nibh, eget feugiat felis quam et turpis. Pellentesque scelerisque massa nec.</p>
                        </div>
                    </section>
                    <section className='team-section'>
                        <div className="team-persons">
                            <div className="team-person">
                                <Image src='/images/person1.jpeg' alt='' width={300} height={300} quality={100} />
                                <span>Creative director</span>
                                <strong>Wilson Tomales</strong>
                                <a href="#">learn more</a>
                            </div>
                            <div className="team-person">
                                <Image src='/images/person2.jpeg' alt='' width={300} height={300} quality={100} />
                                <span>Senior designer</span>
                                <strong>Emily Camphon</strong>
                                <a href="#">learn more</a>
                            </div>
                            <div className="team-person">
                                <Image src='/images/person3.jpg' alt='' width={300} height={300} quality={100} />
                                <span>Junior designer</span>
                                <strong>Jason Maller</strong>
                                <a href="#">learn more</a>
                            </div>
                        </div>
                    </section>
                </Container>
                <section className='Quote-Section mt-40'>
                    <div className="quote">
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellendus commodi expedita incidunt.</p>
                        <div className="quote-author flex items-center gap-3">
                            <Image className='qoute-author-Image' src='/images/lore-profile.jpeg' alt='' width={140} height={140} />
                            <div className="qoute-author-info flex flex-col">
                                <span className=''>Ryan Baser</span>
                                <span className='uppercase'>delta airlines</span>
                            </div>
                        </div>
                    </div>
                </section>
                <Container>
                    <section className='Lore-Section'>
                        <span className='Lore-Explore'>explore</span>
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
                        </div>
                    </section>
                </Container>
                <Container fluid className='startCov-Bg'>
                    <Container>
                        <section className='startCov'>
                            <span>start the conversation</span>
                            <h3>Let's start building binge-worthy experience for customers</h3>
                            <button>schedule a call</button>
                        </section>
                    </Container>
                </Container>
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