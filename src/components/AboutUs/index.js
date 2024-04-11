import {Component} from 'react'
import './index.css'
import Header from '../Header'

const aboutDetails = [
    {
      id: 1,
      imgUrl:
        'https://m.media-amazon.com/images/I/41XZxIdHR8L._SY445_SX342_.jpg',
      description:'Certification Programs: Edureka offers certification programs upon completion of courses, which can add value to a student resume and demonstrate proficiency in a particular technology or skill.Industry-Relevant Curriculum: Courses are designed by industry experts to cover the latest technologies and trends, ensuring that students receive up-to-date and relevant content.',
      
    },
    {
        id: 2,
        imgUrl:
          'https://m.media-amazon.com/images/I/512V6RFrY+L._SY445_SX342_.jpg',
        description:'Edureka is an online learning platform that offers courses and certifications in various fields of technology, including programming, data science, cloud computing, cybersecurity, artificial intelligence, machine learning, DevOps, and more. The company provides instructor-led live online classes, self-paced courses, and corporate training programs.',
        
      },
      
]

class AboutUs extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div className='about-container'>
                    <ul type='none'>
                        {aboutDetails.map(eachdata=>(
                            <li key={eachdata.id}>
                                <div className='about-items-container'>
                                <img src={eachdata.imgUrl} className='imgURL' alt='imgURL'/>    
                                <div className='topic-description'>
                                    <p>{eachdata.description}</p>
                                </div>
                                </div>
                                
                                <hr className='line'/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
export default AboutUs