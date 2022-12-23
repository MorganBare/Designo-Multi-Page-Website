import React from 'react'

import { 
    ContactContainer,
    ContactContent,
    ContactFormOuter,
    FormElementDiv
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
                />
            </FormElementDiv>
            <FormElementDiv>
                <label htmlFor="email">Email</label>
                <input
                id='email'
                type='email'
                />
            </FormElementDiv>
            <FormElementDiv>
                <label htmlFor='phone'>phone</label>
                <input
                id='phone'
                type='number'
                />
            </FormElementDiv>
            <FormElementDiv>
                <label htmlFor='message'>message</label>
                <textarea
                id='message'
                rows={5}
                cols={5}
                />
            </FormElementDiv>
        </ContactFormOuter>
    </ContactContainer>
  )
}
