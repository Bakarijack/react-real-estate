import React,{Fragment, useState} from 'react'
import pic from '../images/img-07.jpg'
import Question from '../details/AccordionDetail'

const Accordion = () => {
    const [detail, setDetail] = useState(Question);
  return (
    <Fragment>
        <section className='accordion'>
            <div className='accordion-row'>
                <div className="left">
                    <h3>Frequently Ask</h3>

                    {
                        detail.map((detail) => {
                            return(
                                <div className='left-content'>
                                    
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Accordion