import React from 'react'
import ContactCard from './ContactCard'

export default function ContactUs() {
  return (
    <main id='contact'>
        <section className='flex flex-col w-full gap-10 justify-center px-20'>
            <div className='text-center'>
                <p className='text-lg'>Send Us Message</p>
                <h1 className='text-3xl'>Contact Us</h1>
            </div>
            <div className='flex gap-10'>
                <ContactCard/>
                <ContactCard business/>
            </div>
            <div className='flex gap-10'>
                <ContactCard register/>
                <ContactCard admin/>
            </div>
        </section>
        <section className='flex items-center justify-center py-8 mt-10 bg-blue-900 text-white'>
            <p>Copyright © 2022 unimoni. All Rights Reserved.</p>
        </section>
    </main>
  )
}
