import React, {useEffect} from 'react'
import styles from './/About.module.css'
import about_img from '../../assets/images/photo2.jpg'
import about_img2 from '../../assets/images/learn_business_english.jpg'
import about_img3 from '../../assets/images/wygodne-szkolenia-BHP-odbywajace-sie-online.jpg'
import about_img4 from '../../assets/images/angga-krishna-mentoring-scaled-e1597491793526.jpg'

export default function About() {

  useEffect( () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [])

  return <>    
    
    <div className='img-bg-about '>
  <div className="container p-5  bg-img-about">
    <div className="row justify-content-between mt-5 align-items-center">
      <div className="col-md-6">
        <h1 className='text-white fw-bolder py-5'>About Us</h1>
      </div>
    </div>
  </div>
</div>


  <div className="container text-center">
    <div className="row mt-5">
      <div className="col-md-12">
        <h1 className='fw-bolder mt-4  '><span className='text-main'>IML</span> SCHOOL </h1>
        <p className=' mt-2 fw-bold text-main-light fs-4'>More than just online courses and articles, it is a community. We are an IML community</p>
        <p className='mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nisi ut culpa molestiae accusamus aspernatur, tempora doloremque laborum corrupti, ipsa, repellendus possimus maiores consequatur quisquam nihil necessitatibus facilis! Velit, nobis!</p>
        <p className='mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nisi ut culpa molestiae accusamus aspernatur, tempora doloremque laborum corrupti, ipsa, repellendus possimus maiores consequatur quisquam nihil necessitatibus facilis! Velit, nobis!</p>
      </div>
    </div>
  </div>


  <div className="container">
    <div className="row mt-5">
      <div className="col-md-6">
        <img src={about_img2} alt="" className='w-100 mt-4' />
      </div>
      <div className="col-md-6 mt-4">
        <h2 className='border-main-bottom d-inline'>Why Academy Works</h2>
        <p className='mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, vero quod ut, iure iusto veniam debitis dolor libero non necessitatibus repellat delectus incidunt, dolorum vitae dolorem deserunt eos! Dicta, animi!</p>
        <p className='mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, vero quod ut, iure iusto veniam debitis dolor libero non necessitatibus repellat delectus incidunt, dolorum vitae dolorem deserunt eos! Dicta, animi!</p>
        <p className='mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, vero quod ut, iure iusto veniam debitis dolor libero non necessitatibus repellat delectus incidunt, dolorum vitae dolorem deserunt eos! Dicta, animi!</p>
      </div>
    </div>
  </div>


  <div className="container">
    <div className="row mt-5">
      <div className="col-md-6 mt-4">
        <h2 className='border-main-bottom d-inline'>IML History</h2>
        <p className='mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, vero quod ut, iure iusto veniam debitis dolor libero non necessitatibus repellat delectus incidunt, dolorum vitae dolorem deserunt eos! Dicta, animi!</p>
        <p className='mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, vero quod ut, iure iusto veniam debitis dolor libero non necessitatibus repellat delectus incidunt, dolorum vitae dolorem deserunt eos! Dicta, animi!</p>
        <p className='mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, vero quod ut, iure iusto veniam debitis dolor libero non necessitatibus repellat delectus incidunt, dolorum vitae dolorem deserunt eos! Dicta, animi!</p>
      </div>
      <div className="col-md-6">
        <img src={about_img3} alt="" className='w-100 mt-4' />
      </div>

    </div>
  </div>


  <div className="container ">
    <div className="row mt-5">
      <div className="col-md-6 ">
        <img src={about_img4} alt="" className='w-100 mt-4' />
      </div>
      <div className="col-md-6  mt-4">
        <h2 className='border-main-bottom d-inline mt-3'>The IML School mission</h2>
        <p className='mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, vero quod ut, iure iusto veniam debitis dolor libero non necessitatibus repellat delectus incidunt, dolorum vitae dolorem deserunt eos! Dicta, animi!</p>
        <p className='mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, vero quod ut, iure iusto veniam debitis dolor libero non necessitatibus repellat delectus incidunt, dolorum vitae dolorem deserunt eos! Dicta, animi!</p>
        <p className='mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, vero quod ut, iure iusto veniam debitis dolor libero non necessitatibus repellat delectus incidunt, dolorum vitae dolorem deserunt eos! Dicta, animi!</p>
      </div>
    </div>
  </div>



<div className='mt-5 pt-5'>
  <h1 className='text-center'>Our Team</h1>
      <div className="lines">
                <span></span>
                <span className="tall"></span>
                <span></span>
        </div>


    <div className="container">
      <div className="row text-center mt-5 ">
        <div className="col-md-3">
          <img src={about_img} alt="" className=' rounded rounded-circle' width='220' height='220' />
          <h5 className='mt-3'>Mohamed Elmasry</h5>
          <p>Web Developer</p>
        </div>
        <div className="col-md-3">
          <img src={about_img} alt="" className=' rounded rounded-circle' width='220' height='220' />
          <h5 className='mt-3'>Mohamed Elmasry</h5>
          <p>Web Developer</p>

        </div>
        <div className="col-md-3">
          <img src={about_img} alt="" className=' rounded rounded-circle' width='220' height='220' />
          <h5 className='mt-3'>Mohamed Elmasry</h5>
          <p>Web Developer</p>

        </div>
        <div className="col-md-3">
          <img src={about_img} alt="" className=' rounded rounded-circle' width='220' height='220' />
          <h5 className='mt-3'>Mohamed Elmasry</h5>
          <p>Web Developer</p>

        </div>

      </div>
    </div>




    </div>


  </>
}
