import {Component} from 'react'
import './index.css'
import Header from '../Header'

const classesList = [
    {
      id: 1,
      videoUrl:
        'https://www.youtube.com/watch?v=lel-YdfSuNg',
      TopicName: 'Neet Preparation',
      description:'The NEET Biology Syllabus 2024 comprises two sections: Botany (45% Weightage) and Zoology (55% Weightage). The syllabus covers a broad range of topics from both Class 11 and Class 12, encompassing fundamental concepts in cell biology, genetics, human physiology, plant physiology, reproduction, ecology, and more.'
      
    },
    {
        id: 2,
        videoUrl:
          'https://www.youtube.com/watch?v=lel-YdfSuNg',
        TopicName: 'Neet Preparation',
        description:'The NEET Biology Syllabus 2024 comprises two sections: Botany (45% Weightage) and Zoology (55% Weightage). The syllabus covers a broad range of topics from both Class 11 and Class 12, encompassing fundamental concepts in cell biology, genetics, human physiology, plant physiology, reproduction, ecology, and more.'
        
      },
      {
        id: 3,
        videoUrl:
          'https://www.youtube.com/watch?v=lel-YdfSuNg',
        TopicName: 'Neet Preparation',
        description:'The NEET Biology Syllabus 2024 comprises two sections: Botany (45% Weightage) and Zoology (55% Weightage). The syllabus covers a broad range of topics from both Class 11 and Class 12, encompassing fundamental concepts in cell biology, genetics, human physiology, plant physiology, reproduction, ecology, and more.'
        
      },
      {
        id: 4,
        videoUrl:
          'https://www.youtube.com/watch?v=lel-YdfSuNg',
        TopicName: 'Neet Preparation',
        description:'The NEET Biology Syllabus 2024 comprises two sections: Botany (45% Weightage) and Zoology (55% Weightage). The syllabus covers a broad range of topics from both Class 11 and Class 12, encompassing fundamental concepts in cell biology, genetics, human physiology, plant physiology, reproduction, ecology, and more.'
        
      },
      {
        id: 5,
        videoUrl:
          'https://www.youtube.com/watch?v=lel-YdfSuNg',
        TopicName: 'Neet Preparation',
        description:'The NEET Biology Syllabus 2024 comprises two sections: Botany (45% Weightage) and Zoology (55% Weightage). The syllabus covers a broad range of topics from both Class 11 and Class 12, encompassing fundamental concepts in cell biology, genetics, human physiology, plant physiology, reproduction, ecology, and more.'
        
      },
]

class ClassesPage extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div className='classes-container'>
                    <ul type='none'>
                        {classesList.map(eachClass=>(
                            <li key={eachClass.id}>
                                <div className='classes-items-container'>
                                <div className="video-container">
                                    <video className="video" controls autoplay>
                                        <source src={eachClass.videoUrl} type="video/mp4" />
                                    </video>
                                </div>
                                <div className='topic-description'>
                                    <h1 className='topicname'>{eachClass.TopicName}</h1>
                                    <p>{eachClass.description}</p>
                                    <button className='practiceBtn' type='button'>Practice</button>
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
export default ClassesPage