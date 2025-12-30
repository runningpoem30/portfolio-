"use client"
import React , {useState} from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';


import {IconBrandTelegram} from "@tabler/icons-react"
function ContactMe() {
    const [formData , setFormData] = useState({
        name : "",
        phoneNumber : "" ,
        email : "" ,
        message : ""
    })

    function handleChange(event :  React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }

    async function handleSubmit(event : React .FormEvent<HTMLFormElement>){
        event.preventDefault()
        const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    console.error("Failed to send message");
    return;
  }

  // optional: reset form
  setFormData({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

    }



  return ( 
    <div id='contact'>
       <div  className='font-instrument font-bold lg:text-3xl lg:mt-10 lg:mb-10 text-3xl mt-5'>Contact Me</div>
       <h1 className='font-lilex font-bold lg:text-xl mb-1'>Send me a message </h1>
       <h1 className='font-lilex mt-4'>Fill out the form below and I'll respond back to you within 24 hours ... </h1>
       <form onSubmit={handleSubmit}>
            <div className='flex flex-col lg:gap-5 mt-10 mb-10'>
             <div className='flex lg:gap-20 flex-col lg:flex-row mb-5 lg:mb-1'>

        <Input value={formData.name} onChange={handleChange} type="text" name="name" placeholder="Full Name" className='lg:w-150 h-15 placeholder:text-xl placeholder:font-lilex text-lg !text-xl font-lilex mb-5'/>

       <Input value={formData.phoneNumber}  onChange={handleChange} type="tel" name='phoneNumber' placeholder="+91 xxx-xxxx" className='lg:w-150 h-15 placeholder:text-xl placeholder:font-lilex !text-xl font-lilex'/>
       </div>

       <Input value={formData.email} onChange={handleChange}  type="email" name="email" placeholder="your.email@example.com" className='h-15 placeholder:text-xl placeholder:font-lilex !text-xl font-lilex ' />

       <Textarea value={formData.message} onChange={handleChange}
  name="message"
  placeholder="Tell me what you are building or say hello ..."
  className="lg:min-h-40 mt-5 min-h-30 !lg:text-xl !text-lg font-lilex placeholder:text-xl placeholder:font-lilex"
/>

     <Button
            variant="outline"
            className="px-6 py-7 font-lilex font-light lg:text-xl flex items-center gap-2 [&_svg]:h-8 [&_svg]:w-8 cursor-pointer mb-5 lg:w-70 lg:w-60 w-50 mt-5 text-lg"
          >
            <IconBrandTelegram size={80} /> 
            Send Message 
          </Button>


       </div>
       </form>
   
   

      
    </div>
  )
}

export default ContactMe
