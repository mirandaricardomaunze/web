import React, { useCallback, useEffect, useState } from 'react'
import './Coments.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';


interface Comments{
comments:any[];
}


const Coments = ({comments}:Comments) => {
  useEffect(()=>{
    AOS.init({ duration: 1000 });
  })



  const [comentCurrent,setCommentCurrent]=useState<number>(0)
    
   const nextComent=useCallback(()=>{
      const newComment=(comentCurrent+1)%comments.length
      setCommentCurrent(newComment)
   },[comentCurrent,comments])

   const prevComments=()=>{
     const newComment=(comentCurrent-1+comments.length)%comments.length
     setCommentCurrent(newComment)
   }
const toComments=(index:number)=>{
    setCommentCurrent(index)
}

useEffect(()=>{
  const duration=5000;
  const timer=setInterval(()=>
     nextComent()
  ,duration)
  return ()=> clearInterval(timer)
},[nextComent,comentCurrent])

  return (
    <div className='container-comment-main'>
          <h1 className='title-coments'
           data-aos="fade-up" data-aos-anchor-placement="top-bottom"
          >Avaliação dos clientes</h1>
         <div className='container-comment'
          data-aos="fade-up" data-aos-anchor-placement="top-bottom"
         >
           {comments.map((comment,index)=>(
           <div key={comment.id} 
             className={comentCurrent===index?
              'comment-active container-img-active':
               'comment '}>
                <div className='container-comment-in'> 
                  <div className='container-img'>
                      <img className='image' src={comment.image} alt="" />
                  </div>
                  <div className='text-comment'>
                      <p className='text-comment'><FontAwesomeIcon className='quote-left' icon={faQuoteLeft}/> 
                      {comment.text} <FontAwesomeIcon className='quote-right' icon={faQuoteRight}/></p>
                      <h4 className='name-com'>- {comment.nome}</h4>
                      <p className='star'>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon className={comment.rev<5?'star-icon':''} icon={faStar}/>
                        <span> - </span>
                        <span>{comment.rev}</span>
                      </p>
                  </div>
                </div>
           </div>
           ))}
         </div>
         <div className='container-dot-btn'>
            {comments.map((comment,index)=>(
              <div key={comment.id} className='container-dot'>
                 <button  onClick={()=>toComments(index)} 
                  className={comentCurrent===index?'dot-active':'dot'}
                   data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                  ></button >
              </div>
            ))}
         </div>
        
            <button className='btn-prev' onClick={prevComments}
            data-aos="fade-up" data-aos-anchor-placement="top-bottom"
            >
            <FontAwesomeIcon icon={faAngleLeft}/></button>
            <button className='btn-next' onClick={nextComent}
            data-aos="fade-up" data-aos-anchor-placement="top-bottom"
            >
            <FontAwesomeIcon icon={faAngleRight}/></button>
         
    </div>
  )
}

export default Coments
