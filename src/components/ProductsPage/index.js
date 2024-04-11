import {Component} from 'react'
import './index.css'
import Header from '../Header'

const ProductDetails = [
    {
      id: 1,
      imgUrl:
        'https://m.media-amazon.com/images/I/41XZxIdHR8L._SY445_SX342_.jpg',
      PoductName: 'Neet Preparation',
      description:'The NEET Biology Syllabus 2024 comprises two sections: Botany (45% Weightage) and Zoology (55% Weightage). The syllabus covers a broad range of topics from both Class 11 and Class 12, encompassing fundamental concepts in cell biology, genetics, human physiology, plant physiology, reproduction, ecology, and more.',
      cost:'$1500'
    },
    {
        id: 2,
        imgUrl:
          'https://m.media-amazon.com/images/I/512V6RFrY+L._SY445_SX342_.jpg',
        PoductName: 'Neet Preparation',
        description:'The NEET Biology Syllabus 2024 comprises two sections: Botany (45% Weightage) and Zoology (55% Weightage). The syllabus covers a broad range of topics from both Class 11 and Class 12, encompassing fundamental concepts in cell biology, genetics, human physiology, plant physiology, reproduction, ecology, and more.',
        cost:'$1500'
      },
      {
        id: 3,
        imgUrl:
          'https://www.universalbook.in/wp-content/uploads/2020/07/B.png',
        PoductName: 'Neet Preparation',
        description:'The NEET Biology Syllabus 2024 comprises two sections: Botany (45% Weightage) and Zoology (55% Weightage). The syllabus covers a broad range of topics from both Class 11 and Class 12, encompassing fundamental concepts in cell biology, genetics, human physiology, plant physiology, reproduction, ecology, and more.',
        cost:'$1500'
      },
      {
        id: 4,
        imgUrl:
          'https://images.meesho.com/images/products/130087043/ajbmz_512.webp',
        PoductName: 'Neet Preparation',
        description:'The NEET Biology Syllabus 2024 comprises two sections: Botany (45% Weightage) and Zoology (55% Weightage). The syllabus covers a broad range of topics from both Class 11 and Class 12, encompassing fundamental concepts in cell biology, genetics, human physiology, plant physiology, reproduction, ecology, and more.',
        cost:'$1500'
      },
      {
        id: 5,
        imgUrl:
          'https://www.universalbook.in/wp-content/uploads/2023/05/B12.png',
        PoductName: 'Neet Preparation',
        description:'The NEET Biology Syllabus 2024 comprises two sections: Botany (45% Weightage) and Zoology (55% Weightage). The syllabus covers a broad range of topics from both Class 11 and Class 12, encompassing fundamental concepts in cell biology, genetics, human physiology, plant physiology, reproduction, ecology, and more.',
        cost:'$1500'
      },
      {
        id: 6,
        imgUrl:
          'https://thehinduzone.com/wp-content/uploads/2022/06/Foundation-biology-books-for-NEET-Class-10-1.jpg',
        PoductName: 'Neet Preparation',
        description:'The NEET Biology Syllabus 2024 comprises two sections: Botany (45% Weightage) and Zoology (55% Weightage). The syllabus covers a broad range of topics from both Class 11 and Class 12, encompassing fundamental concepts in cell biology, genetics, human physiology, plant physiology, reproduction, ecology, and more.',
        cost:'$1500'
      },
]

class ProductsPage extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div className='products-container'>
                    <ul type='none'>
                        {ProductDetails.map(eachproduct=>(
                            <li key={eachproduct.id}>
                                <div className='products-items-container'>
                                <img src={eachproduct.imgUrl} className='imgURL' alt='imgURL'/>    
                                <div className='topic-description'>
                                    <h1 className='topicname'>{eachproduct.TopicName}</h1>
                                    <p>{eachproduct.description}</p>
                                    <button className='practiceBtn' type='button'>Add to Cart</button>
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
export default ProductsPage