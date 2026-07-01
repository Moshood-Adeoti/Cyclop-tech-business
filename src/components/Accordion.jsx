import React, { useState } from 'react'
import Footer from './Footer'
import { FaExpand, FaExpandAlt, FaExpandArrowsAlt } from 'react-icons/fa'
import { FaMinimize } from 'react-icons/fa6'
import { MdExpandLess, MdExpandMore } from 'react-icons/md'



const acc = [
    {head: "How do I get Started to the platform ?", ans: "Getting started is easy! Simply sign up for a free trial, and our onboarding wizard will guide you through the initial setup process. You can also check out our 'Getting Started' guide in the Help Center."},
    {head: "What payment methods do you accept ?",  ans: "We accept all major credit cards (Visa, MasterCard, American Express) as well as PayPal and wire transfers for annual enterprise plans."},
    {head: "Can I cancel my suscribtion anytime ?", ans: "Yes, you can cancel your subscription at any time from your account settings. If you cancel, you will retain access to your plan until the end of your current billing cycle."},
    {head: "Is my Data secure ?", ans: "Absolutely. We use industry-standard encryption for all data at rest and in transit. We are also SOC 2 Type II compliant and perform regular security audits."},
    {head: "Do you offer custom integration ?", ans: "Yes, our Enterprise plan includes support for custom integrations. Our API is also fully documented and available for all users to build their own connections."}



]

const Accordion = () => {

    const [accordionOpen, setAccordionOpen] = useState(null)

    const handleToggele = (index) =>{
setAccordionOpen(accordionOpen === index ? null : index)}
  return (
    <div> 


{acc.map((el, index) => (

<div key={index} className='flex flex-col px-6 md:mx-[30%]  border-2 py-2 px-4 mx-[10%]  my-12   rounded-xl   '>

<button onClick={() =>  handleToggele(index)} className='flex justify-between  w-full font-bold text-lg '>

    <span> {el.head} </span>
    {accordionOpen === index  ?   <MdExpandLess className='mt-2 text-2xl  font-bold '/> : <MdExpandMore className='mt-2 text-2xl  font-bold ' />  }
    
</button>



<div className={`grid overflow-hidden transition-all duration-300 
${accordionOpen === index  ? "grid-rows-[1r] opacity-100" : " grid-rows-[0fr] opacity-0" } `}>
    

    <div className='overflow-hidden mt-4 '>
{el.ans}
    </div>
</div>



</div>


))}




    </div>
  )
}

export default Accordion