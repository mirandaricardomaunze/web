import React, { useCallback, useEffect, useState } from 'react'
import './Coments.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

interface Comments{
comments:any[];
}


const Coments = ({comments}:Comments) => {
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
          <h1 className='title-coments'>Avaliação dos clientes</h1>
         <div className='container-comment'>
           {comments.map((data,index)=>(
           <div key={data.id} 
             className={comentCurrent===index?
              'comment-active container-img-active':
               'comment '}>
                <div className='container-com'> 
                  <div className='container-img'>
                      <img className='image' src={data.image} alt="" />
                  </div>
                  <div className='text-comment'>
                      <p className='text-comment'><FontAwesomeIcon className='quote-left' icon={faQuoteLeft}/> 
                      {data.text} <FontAwesomeIcon className='quote-right' icon={faQuoteRight}/></p>
                      <h4 className='name-com'>- {data.nome}</h4>
                  </div>
                </div>
           </div>
           ))}
         </div>
         <div>
            {comments.map((comment,index)=>(
              <div className='container-dot'>
                 <button  onClick={()=>toComments(index)} 
                  className={comentCurrent===index?'dot-active':'dot'}></button >
              </div>
            ))}
         </div>
        
            <button className='btn-prev' onClick={prevComments}><FontAwesomeIcon icon={faAngleLeft}/></button>
            <button className='btn-next' onClick={nextComent}><FontAwesomeIcon icon={faAngleRight}/></button>
         
    </div>
  )
}

export default Coments
