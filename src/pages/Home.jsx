import React from 'react';
// component
import TextAnimation from "../components/TextAnimation";
import SkillsCard from '../components/SkillsCard';
import Navbar from "../components/Navbar";
import Slider from "../components/Slider"
// frame motion
import { motion } from "framer-motion"
// react icons
import { FaLinkedinIn, } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
// helper
import { Card } from "../helpers/skillsCards"
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>


            <Navbar />
            {/* END NAVBAR SECTION */}

            <section className='home_wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 order-2 order-md-1">
                            <motion.div
                                initial={{ x: -200 }}
                                animate={{ x: 0 }}
                                transition={{ duration: 4 }}
                                className="portfolio_content">
                                <h2>Hello,It's me</h2>
                                <span>Heyderli Kamran</span>
                                <TextAnimation />
                                <ul>
                                    <li><Link to="https://www.linkedin.com/in/kamran-heyderli-13a1a3213/" target="_blank"><FaLinkedinIn /></Link></li>
                                    <li><Link to="https://www.facebook.com/kamran.heyderli.735/" target="_blank"><ImFacebook /></Link></li>
                                    <li><Link to="https://github.com/kamran0599" target="_blank"><AiFillGithub /></Link></li>
                                    <li><Link to="https://www.instagram.com/kamranheyderliii/" target="_blank"><AiOutlineInstagram /></Link></li>
                                </ul>
                                <button>
                                    <a href="/assets/image/Kamran_Heyderli_Resume.pdf" download="Resume">DOWNLOAD CV</a>
                                </button>

                            </motion.div>
                        </div>
                        <div className="col-md-6 order-1 order-md-2">
                            <motion.div
                                initial={{ x: 200 }}
                                animate={{ x: 0 }}
                                transition={{ duration: 4 }}
                                className="portfolio_image">
                                <img src='assets/image/IMG_8694.JPG' alt="Kamran" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section id='skills' className='skills_wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="skills_header">
                                <h2>My Skills</h2>
                            </div>
                        </div>
                    </div>
                    <motion.div
                        className="row gap-y-5">
                        {Card.map((item) => {
                            return (
                                <SkillsCard image={item.image} />
                            )
                        })

                        }
                    </motion.div>
                </div>
            </section> */}

            <section id='slider' className='slider_wrapper'>
                <div className="container">
                   <div className="row">
                   <div className="col-lg-12">
                            <div className="skills_header">
                                <h2>My Skills</h2>
                            </div>
                        </div>
                   </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <Slider />
                        </div>
                    </div>


                </div>
            </section>



            <section id='about' className='about_wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <motion.div
                                initial={{ x: -200 }}
                                animate={{ x: 0 }}
                                transition={{ duration: 3 }}
                                className="about_image">
                                <img src="/assets/image/IMG_8693.JPG" alt="" />
                            </motion.div>
                        </div>
                        <div className="col-md-6">
                            <motion.div
                                initial={{ x: 200 }}
                                animate={{ x: 0 }}
                                transition={{ duration: 4 }}
                                className="about_tittle">
                                <p>
                                    As an accounting graduate with a keen interest in technology, I am seeking a
                                    role as a Junior or Intern Front End Engineer. While my background is in
                                    accounting, I have always been interested in the creative side of technology,
                                    including web design and development. With experience in HTML, CSS, and
                                    JavaScript, as well as familiarity with front-end frameworks like React js, I am
                                    eager to apply my skills to a career in web development.
                                    In addition to my work experience, I have completed several online courses
                                    in front-end development, including a certification in Web Design from
                                    Udemy. In my free time, I enjoy working on personal projects, such as
                                    creating a website for a local non-profit organization.
                                    I am a detail-oriented and analytical individual with excellent problem-solving
                                    skills, which I believe will be valuable in front-end development. I am excited
                                    to learn from experienced developers and continue building my skills in web
                                    development.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div className="footer_text">
                    <p>This is the footer of my website.</p>
                    <p>Contact us at: kamranheyderli049@gmail.com</p>
                </div>
            </footer>
        </>
    )
}

export default Home