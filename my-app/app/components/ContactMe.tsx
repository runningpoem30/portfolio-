"use client"
import React , {useState} from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';


import {IconBrandTelegram} from "@tabler/icons-react"
function ContactMe() {
    const [formData , setFormData] = useState({
        name : "",
        ///phoneNumber : "" ,
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
    ///phoneNumber: "",
    email: "",
    message: "",
  });

    }



  return ( 
    <div id='contact' className="mb-20">
       <div className='font-instrument font-bold text-3xl mt-10 mb-4'>Contact Me</div>
       <p className='font-lilex text-gray-500 text-sm md:text-base'>Fill out the form below and I'll respond back to you within 24 hours.</p>
       
       <form onSubmit={handleSubmit} className="mt-6 max-w-xl">
          <div className='flex flex-col gap-4'>
            
            <div className='flex flex-col lg:flex-row gap-4'>
              <Input 
                value={formData.name} 
                onChange={handleChange} 
                type="text" 
                name="name" 
                placeholder="Full Name" 
                className='h-12 font-lilex text-base w-full'
              />
            </div>

            <Input 
              value={formData.email} 
              onChange={handleChange}  
              type="email" 
              name="email" 
              placeholder="your.email@example.com" 
              className='h-12 font-lilex text-base w-full' 
            />

            <Textarea 
              value={formData.message} 
              onChange={handleChange}
              name="message"
              placeholder="Tell me what you are building or say hello (min 10 characters)..."
              className="min-h-32 font-lilex text-base w-full resize-none"
            />

            <Button
              type="submit"
              variant="outline"
              className="h-12 w-full lg:w-48 font-lilex font-light text-base flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <IconBrandTelegram size={20} /> 
              Send Message 
            </Button>

          </div>
       </form>
    </div>
  )
}

export default ContactMe
