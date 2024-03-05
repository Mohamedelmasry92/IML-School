import React, {useEffect , useState} from 'react'
import WOW from "wowjs"
import Typed from 'typed.js';
import styles from './/Home.module.css'
import { Link } from 'react-router-dom'
import about_img from '../../assets/images/photo2.jpg'
import course5 from '../../assets/images/0_1558-master-klass-top-11-oshibok_b3e6ab31.jpg'
import FeaturedCourses from '../FeaturedCourses/FeaturedCourses';
import PopularArticles from '../PopularArticles/PopularArticles';
import ArticleTopics from '../ArticleTopics/ArticleTopics';
import CourseTopics from '../CourseTopics/CourseTopics'
import TopInstructors from '../TopInstructors/TopInstructors'




export default function Home() {

  const el = React.useRef(null);

  const [isVisible, setIsVisible] = useState({});


  

  useEffect( () => {

    window.scrollTo({ top: 0, behavior: 'auto' });


    const handleScroll = () => {
      const section = document.getElementById('animated-section');
      const top = section.getBoundingClientRect().top;

      // You can adjust this offset value based on your layout and requirements
      const offset = window.innerHeight;

      setIsVisible(top < offset);
    }

    window.addEventListener('scroll', handleScroll);

    
    const wow = new WOW.WOW();
    wow.init();

    
    const typed = new Typed(el.current, {
      strings: ['Welcome to IML SCHOOL.', 'Powered by IML Egypt.' ],
      typeSpeed: 70,
      smartBackspace: false,
      fadeOut: true,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 500,
      loop: true,
      loopCount: Infinity,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true,
      backDelay: 700,
    });
    

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
      window.removeEventListener('scroll', handleScroll);

    };



  }, [])

  return <>    


    <div className={styles.header}>
      <div className={styles.layout}>
        <div className='w-50 media-query'>
          <span className='fs-2 fw-bolder' ref={el}></span>
          <h3 className="fw-bolder text-larger" >Best Online Education Expertise in Healthcare Management</h3>
          <p className='mt-4 fs-3 fw-bold '>More than 30,000 healthcare providers have switched to IML SCHOOL for education </p>
          <button className='btn btn-success me-3 animate__animated animate__fadeInLeft animate__slow'>
            <Link to='courses' className='text-white'>Get Courses</Link>
            </button>
          <button className='btn btn-success animate__animated animate__fadeInRight animate__slow'>
            <Link to='articles' className='text-white'>View Articles</Link>
            </button>
        </div>
      </div>
    </div>




<div className='mt-5 pt-5 '>
      <h1 id="animated-section" className={`text-center ${isVisible ? 'animate__animated animate__fadeInUp animate__slow' : ''}`}>Why IML School Works</h1>
      <div className="lines">
                <span></span>
                <span className="tall"></span>
                <span></span>
        </div>

    <div className="container mt-3">
      <div className="row text-center pb-5 ">
        <div id="animated-section" className={`col-md-3 mt-5 ${isVisible ? 'animate__animated animate__bounceInUp animate__slow' : ''}`}>
          <div className='border-main box-hover'>
            <i className="fa-solid fa-graduation-cap fs-1 text-main pt-3 "></i>
            <h3 className='mt-4'>Learn From The Experts</h3>
            <p className='mt-3'>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
            <button className='btn btn-success button-special mb-3'>Read More</button>
          </div>
        </div>
        <div id="animated-section" className={`col-md-3 mt-5 ${isVisible ? 'animate__animated animate__bounceInUp animate__slow' : ''}`}>
            <div className='border-main box-hover'>
              <i className="fa-brands fa-leanpub fs-1 text-main pt-3"></i>
              <h3 className='mt-4'>The Best Online Courses</h3>
              <p className='mt-3'>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
              <button className='btn btn-success button-special mb-3'>Read More</button>
            </div>
        </div>
        <div id="animated-section" className={`col-md-3 mt-5 ${isVisible ? 'animate__animated animate__bounceInUp animate__slow' : ''}`}>
          <div className='border-main box-hover'>
            <i className="fa-solid fa-globe fs-1 text-main pt-3"></i>
            <h3 className='mt-4'>Best Industry Leaders</h3>
            <p className='mt-3'>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
            <button className='btn btn-success button-special mb-3'>Read More</button>
          
          </div>
        </div>
        <div id="animated-section" className={`col-md-3 mt-5 ${isVisible ? 'animate__animated animate__bounceInUp animate__slow' : ''}`}>
          <div className='border-main box-hover'>
            <i className="fa-solid fa-book-open-reader text-main fs-1 pt-3"></i>
            <h3 className='mt-4'>Book Library & Store</h3>
            <p className='mt-3'>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
            <button className='btn btn-success button-special mb-3'>Read More</button>
          
          </div>
        </div>
      </div>
    </div>
    </div>


    <div className='bg-main-light'>
    <div className="container mt-5 pb-2 pt-1">
      <div className="row mb-5 ">
        <div className='col-md-6 mt-5' >
          <div className=''>
           <h2 className='mt-4 fw-bold'>About IML School</h2>
            <p className='mt-4'>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour. Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour. Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
            
            <div className='d-flex  align-items-center text-center mt-4'>

              <div className='me-5'>
                <div>
                  <span className='text-main fs-1'>50<span className='fs-3'>M+</span> </span>
                  <p>STUDENTS LEARNING</p>
                </div>
                <div>
                  <span className='text-main fs-1'>30<span className='fs-3'>K+</span> </span>
                  <p>ACTIVE COURSES</p>
                </div>
              </div>
             
             <div className=''>
               <div>
                  <span className='text-main fs-1'>20<span className='fs-3'>+</span> </span>
                  <p>INSTRUCTORS ONLINE</p>
                </div>
                
                <div>
                  <span className='text-main fs-1'>10<span className='fs-3'>+</span> </span>
                  <p>COUNTRY REACHED</p>
                </div>
             </div>

            </div>

         </div>
        </div>
        <div className='col-md-6 mt-5' >
            <div className=''>
              <img src={about_img} className='w-100 rounded' alt="" />
            </div>
        </div>

      </div>
    </div>
    </div>




<div className='mt-5'>

<div className='container bg-third rounded rounded-5 '>
  <div className='row mt-5 d-flex justify-content-center align-items-center'>
    <div className='col-md-3'>
      <div className="col-md-12 py-4 ">
        <img  src={course5}  className='ms-2 rounded-circle' width='220' height='220'  alt='' />
      </div>
    </div>
    <div className='col-md-6'>
        <h3 className='text-white'>IML SCHOOL Site. Purpose-built for hybrid work.</h3>
        <p className='text-white'>Get calling, meetings, messaging, webinars, event management, polling, and more—in one unified platform, at one low cost.</p>
    </div>
    <div className='col-md-2'>
        <button className='btn btn-dark ms-3 '>
            <Link to='about' className='text-white'>Learn More</Link>
        </button>
    </div>

  </div>
</div>
</div>


<div className=' pt-5 pb-3 mt-5 bg-main-light'>
      <h1 className='text-center'>Course Topics</h1>
      <div className="lines">
                <span></span>
                <span className="tall"></span>
                <span></span>
      </div>
    <CourseTopics />
    <div className='col-md-12 text-center mt-1 mb-2'>
            <Link to='coursetopics' className='btn btn-success me-3 w-25'>View All Course Topics</Link>
        </div>

      </div>


      <div className='mt-4 pt-4'>
      <h1 className='text-center'>Featured Courses</h1>
      <div className="lines">
                <span></span>
                <span className="tall"></span>
                <span></span>
        </div>
    <FeaturedCourses />
    <div className='col-md-12 text-center mt-1 mb-2'>
            <Link to='courses' className='btn btn-success me-3 w-25'>View All Courses</Link>
        </div>
        </div>




    <div className=' pt-5 pb-3 mt-5 bg-main-light'>
      <h1 className='text-center'>Article Topics</h1>
      <div className="lines">
                <span></span>
                <span className="tall"></span>
                <span></span>
      </div>
    <ArticleTopics />

    <div className='col-md-12 text-center mt-1 mb-2'>
            <Link to='articletopics' className='btn btn-success me-3 w-25'>View All Article Topics</Link>
        </div>

      </div>





    <div className=' mt-5 pt-4 '>
    <h1 className='text-center'>Popular Articles</h1>
      <div className="lines">
                <span></span>
                <span className="tall"></span>
                <span></span>
      </div>
    <PopularArticles />
    <div className='col-md-12 text-center mt-1'>
            <Link to='articles' className='btn btn-success me-3 w-25'>View All Articles</Link>
        </div>
    </div>






    <div className=' mt-5 pt-4 '>
    <h1 className='text-center'>Top Instructors</h1>
      <div className="lines">
                <span></span>
                <span className="tall"></span>
                <span></span>
      </div>
    <TopInstructors />
    <div className='col-md-12 text-center mt-1'>
            <Link to='instructors' className='btn btn-success me-3 w-25'>View All Instructors</Link>
        </div>
    </div>




  </>
}
