import {Component} from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import './index.css'
import Header from '../Header';


const TopStudentsList = [
    {
      id: 1,
      studentimage:
        'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
      name: 'Esther Howard',
      performance: 4.5/5, 
      comments:'work culture is good Team work Serving for a good purpose'
    },
    {
        id: 2,
        studentimage:
          'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
        name: 'James',
        performance: 4.5/5, 
        comments: 'Starting a journey as fresher very good experience and learn a lot of things'
      },
      {
        id: 3,
        studentimage:
          'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
        name: 'William',
        performance: 4.5/5, 
        comments:'It was a wonderful experience and a fruitful guidance for medical course guideness.'
      },
      {
        id: 4,
        studentimage:
          'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
        name: 'Arjun',
        performance: 4.5/5, 
        comments:'Very cordial, positive, responsive, suggestive .meta provide me counseling for mbbs for my education …all staff provide me good guidance..'
      },
      {
        id: 5,
        studentimage:
          'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
        name: 'David',
        performance: 4.5/5, 
        comments:'Meta career and educational consultancy helped me a lot in the consultancy for MBBS in India. Wee had contacted around 5 educational consultancy but the best service we felt was from Meta.'
      },
      {
        id: 6,
        studentimage:
          'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
        name: 'Michael',
        performance: 4.5/5, 
        comments:'Staff is very cooperative , feel very safe admission for MBBS for my daughter , chairman sir give much time to overcome all our doubt Thanks to meta education'
      },
      {
        id: 7,
        studentimage:
          'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
        name: 'Christopher',
        performance: 4.5/5, 
        comments:'The staffs are really cooperative and helpful.'
      },
      {
        id: 8,
        studentimage:
          'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
        name: 'Robert',
        performance: 4.5/5, 
        comments:'My experience was great here.I GOT GREAT ADVICE FOR MY CARRIER.for mbbs'
      },
      {
        id: 9,
        studentimage:
          'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
        name: 'John',
        performance: 4.5/5, 
        comments:'All things are very good and every staff is very nice and polite. Iam satisfied with all services and counselling for MBBS.'
      },
  ]

class HomePage extends Component{

    renderTopStudents=()=>{
        return(
            <div className='topStudents'>
                <ul type='none' className='student-list'>
                    {TopStudentsList.map(eachStudent=>(
                        <li key={eachStudent.id}>
                            <div className='items'>
                                <img src={eachStudent.studentimage} className='studentImg' alt={eachStudent.studentimage}/>
                                <div className='name-performance-container'>
                                <p className='name'>{eachStudent.name}</p>
                                <p className='performance'>Performance: {eachStudent.performance}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    renderComments=()=>{
        return(
            <ul className='comments-list' type='none'>
                {TopStudentsList.map(eachStudent=>(
                    <li key={eachStudent.id} className='items-comments'>
                        <div className='comments-items-container'>
                            <h1 className='name'>{eachStudent.name}</h1>
                            <hr className='line'/>
                            <h1 className='commentsHeading'>Comments: </h1>
                            <p className='comments'>{eachStudent.comments}</p>
                        </div>
                    </li>
                ))}
            </ul>
        )
    }

    renderFooterSection=()=>{
        return(
            <div className='footer-section-container'>
                <div>
                    <h1 className='company-name'>Edureka</h1>
                    <p className='location'>112,MindSpace</p>
                    <p className='location'>Hyderabad, India</p>
                </div>
                <div>
                    <p className='head'>Follow Us Now:</p>
                    <div className='icons-container'>
                        <FaFacebookSquare className='icons'/>
                        <FaSquareXTwitter className='icons'/>
                        <FaYoutube className='icons'/>
                        <FaInstagramSquare className='icons'/>
                    </div>
                    <p className='head'>Contact Us: </p>
                    <div className='contact-container'>
                        <FaPhoneAlt className='icons'/>
                        <p className='number'>+1-646-856-2092</p>
                    </div>
                    
                </div>
            </div>
        )
    }

    render(){
        return(
            <div>
            <Header/>
            <div className='carousel-container'>
            <Carousel >
                <Carousel.Item >
                    <img
                    className="image-slide"
                    src="https://cdn.intellemo.ai/int-stock/62f0cfe01baabfa24acf18e3/62f0cfe1a94908f9e6650d91-v129/crack_neet_in_9_months_m.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="image-slide"
                    src="https://m.media-amazon.com/images/I/71rG5DuDJEL._SL1500_.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="image-slide"
                    src="https://d3lzcn6mbbadaf.cloudfront.net/media/details/11_yMQ9aCv.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
            </div>
            <div className='top-students-container'>
                <h1 className='heading'>Top Students</h1>
                {this.renderTopStudents()}
            </div>
            <div className='comments-container'>
                <h1 className='heading'>Reviews</h1>
                {this.renderComments()}
            </div>
            <div>
                {this.renderFooterSection()}
            </div>
            </div>
        )
    }
}
export  default HomePage