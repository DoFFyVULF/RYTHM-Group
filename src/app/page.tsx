import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "reactstrap";
import Header from "./components/Header/Header";
import './HomePage.scss';
import Image from 'next/image';
import Footer from './components/Footer/Footer';

export default function Home() {
    return (
        <Container fluid className='HomeContainer'>
            <Header />
            <main>
                <section className="Hero-Section">
                    <div className="HeroInfo">
                        <h1>We create extra groovy brand experiences</h1>
                        <button>View our projects</button>
                    </div>
                </section>
                <Container>
                    <section className='Courses-Section bg-white'>
                        <div className="Courses-Wrapper flex flex-wrap justify-between items-center">
                            <div className="Course-Card">

                                <h3>Design</h3>
                                <Image src='/icons/design.svg' alt='' width={50} height={50}></Image>
                                <p>Proin euismod, urna vitae auctor venenatis, mi metus consectetur est, rutrum eros pretium ac ligula.</p>
                                <a href="#">Learn more</a>
                            </div>
                            <div className="Course-Card">

                                <h3>Strategy</h3>
                                <Image src='/icons/strategy.svg' alt='' width={50} height={50}></Image>
                                <p>Proin euismod, urna vitae auctor venenatis, mi metus consectetur est, rutrum eros pretium ac ligula.</p>
                                <a href="#">Learn more</a>
                            </div>
                            <div className="Course-Card">

                                <h3>Writing</h3>
                                <Image src='/icons/writing.svg' alt='' width={50} height={50}></Image>
                                <p>Proin euismod, urna vitae auctor venenatis, mi metus consectetur est, rutrum eros pretium ac ligula.</p>
                                <a href="#">Learn more</a>
                            </div>
                            <div className="Course-Card">

                                <h3>Marketing</h3>
                                <Image src='/icons/marketing.svg' alt='' width={50} height={50}></Image>
                                <p>Proin euismod, urna vitae auctor venenatis, mi metus consectetur est, rutrum eros pretium ac ligula.</p>
                                <a href="#">Learn more</a>
                            </div>
                        </div>
                    </section>
                    <section className='AboutUs-Section'>
                        <div className="AboutUs-preview">
                            <div className="AboutUs-text">
                                <h2>We apply storytelling and design to create groovy experiences</h2>
                                <p>Proin euismod, urna vitae auctor venenatis, mi metus consectetur est, non rutrum sapien eros non mauris.  Praesent ex felis, bibendum vel a, aliquet iaculis nunc. Pellentesque neque dolor, pretium ac ligula in.</p>
                                <button className=''>About Us</button>
                            </div>
                            <div className="AboutUs-img">
                                <Image className='w-full h-full object-cover' src='/images/aboutus.jpeg' alt='' width={500} height={500} />
                            </div>
                        </div>
                        <div className="AboutUs-Cards">
                            <div className="AboutUs-Card">
                                <div className="numberCard">
                                    <span>01</span>
                                </div>
                                <div className="cardInfo">
                                    <span className='text-4xl font-bold'>150+</span>
                                    <span className='max-w-20'>Project completed</span>
                                </div>
                            </div>
                            <div className="AboutUs-Card">
                                <div className="numberCard">
                                    <span>02</span>
                                </div>
                                <div className="cardInfo">
                                    <span className='text-4xl font-bold'>150+</span>
                                    <span className='max-w-20'>Projects completed</span>
                                </div>
                            </div>
                            <div className="AboutUs-Card">
                                <div className="numberCard">
                                    <span>03</span>
                                </div>
                                <div className="cardInfo">
                                    <span className='text-4xl font-bold'>150+</span>
                                    <span className='max-w-20'>Projects completed</span>
                                </div>
                            </div>
                            <div className="AboutUs-Card">
                                <div className="numberCard">
                                    <span>04</span>
                                </div>
                                <div className="cardInfo">
                                    <span className='text-4xl font-bold'>150+</span>
                                    <span className='max-w-20'>Project completed</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>
                <section className='Quote-Section mt-40'>
                    <div className="quote">
                        <p className='text-5xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellendus commodi expedita incidunt.</p>
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
                    <section className='Inspiration-Section'>
                        <div className="Insporation-Info">
                            <h5>Find inspiration for your next project</h5>
                            <p>Proin euismod, urna vitae auctor venenatis, mi metus consectetur est, non rutrum sapien eros non mauris. Praesent ex felis, bibendum vel a, aliquet iaculis nunc. Pellentesque neque dolor, pretium ac ligula in.</p>
                            <button>View all posts</button>
                        </div>
                        <div className="Insporation-Cards">
                            <div className="Insporation-Card p-9">
                                <span>5.17.2017</span>
                                <div className="Insporation-Card-Info flex">
                                    <span className='font-bold text-4xl'>15 Best Blogs To Follow About Web Design</span>
                                    <span className='text-2xl text-gray-600'>Proin euismod, urna vitae auctor venenatis, mi metus consectetur est, non rutrum sapien eros.</span>
                                </div>
                            </div>
                            <div className="Insporation-Card p-9">
                                <span>5.17.2017</span>
                                <div className="Insporation-Card-Info flex">
                                    <span className='font-bold text-4xl'>15 Best Blogs To Follow About Web Design</span>
                                    <span className='text-2xl text-gray-600'>Proin euismod, urna vitae auctor venenatis, mi metus consectetur est, non rutrum sapien eros.</span>
                                </div>
                            </div>
                            <div className="Insporation-Card p-9">
                                <span>5.17.2017</span>
                                <div className="Insporation-Card-Info flex">
                                    <span className='font-bold text-4xl'>15 Best Blogs To Follow About Web Design</span>
                                    <span className='text-2xl text-gray-600'>Proin euismod, urna vitae auctor venenatis, mi metus consectetur est, non rutrum sapien eros.</span>
                                </div>
                            </div>
                            <div className="Insporation-Card p-9">
                                <span>5.17.2017</span>
                                <div className="Insporation-Card-Info flex">
                                    <span className='font-bold text-4xl'>15 Best Blogs To Follow About Web Design</span>
                                    <span className='text-2xl text-gray-600'>Proin euismod, urna vitae auctor venenatis, mi metus consectetur est, non rutrum sapien eros.</span>
                                </div>
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
                                    <Image className='w-full h-full object-cover' src='/InstaSec/ff1.jpeg' alt='' width={120} height={120}></Image>
                                </div>
                            </a>
                            <a href="#">
                                <div className="insta-card">
                                    <Image className='w-full h-full object-cover' src='/InstaSec/ff1.jpeg' alt='' width={120} height={120}></Image>
                                </div>
                            </a>
                            <a href="#">
                                <div className="insta-card">
                                    <Image className='w-full h-full object-cover' src='/InstaSec/ff1.jpeg' alt='' width={120} height={120}></Image>
                                </div>
                            </a>
                            <a href="#">
                                <div className="insta-card">
                                    <Image className='w-full h-full object-cover' src='/InstaSec/ff1.jpeg' alt='' width={120} height={120}></Image>
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
    );
}
