import React from 'react'

import { 
    ContactContainer,
    ContactContent,
    ContactFormOuter,
    FormElementDiv,
    SubmitButton
} from './ContactForm.styled'

export default function ContactForm() {
  return (
    <ContactContainer>
        <ContactContent>
            <h1>Contact Us</h1>
            <p>Ready to take it to the next level? Let’s talk about 
                your project or idea and find out how we can help 
                your business grow. If you are looking for unique 
                digital experiences that’s relatable to your users, 
                drop us a line.</p>
        </ContactContent>
        <ContactFormOuter>
            <FormElementDiv>
                <label htmlFor="name">Name</label>
                <input
                id='name'
                type='text'
                placeholder='Name'
                />
            </FormElementDiv>
            <FormElementDiv>
                <label htmlFor="email">Email Address</label>
                <input
                id='email'
                type='email'
                placeholder='Email Address'
                />
            </FormElementDiv>
            <FormElementDiv>
                <label htmlFor='phone'>Phone</label>
                <input
                id='phone'
                type='number'
                placeholder='Phone'
                />
            </FormElementDiv>
            <FormElementDiv>
                <label htmlFor='message'>Your Message</label>
                <textarea
                id='message'
                rows={5}
                cols={5}
                placeholder='Your Message'
                />
            </FormElementDiv>
            <SubmitButton type='submit'>Submit</SubmitButton>
        </ContactFormOuter>
    </ContactContainer>
  )
}
