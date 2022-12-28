import React from 'react'

import { 
    ContactContainer,
    ContactContent,
    ContactFormOuter,
    FormElementDiv,
    SubmitButton,
    FormNameDiv
} from './ContactForm.styled' 

const INITIAL_STATE = {
    name:'',
    email:'',
    phone:'',
    message:''
}

export default function ContactForm() {
    const [form, setForm] = React.useState(INITIAL_STATE);
    const [errors, setErrors] = React.useState({});
    const [toggleButton, setToggleButton] = React.useState(false)


    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value,
        })
    }

    const checkForEmpty = () => {
        Object.keys(form).forEach(value => {
            if(value){
                console.log('nope')
            }
        })
    }


    console.log(errors)
    const handleSubmit = (event) => {
        event.preventDefault();
        checkForEmpty();
        setForm(INITIAL_STATE);
    };

console.log(errors)

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
        <ContactFormOuter onSubmit={handleSubmit}>
            <FormNameDiv isEmpty={form.name}>
                <label htmlFor="name">Name</label>
                <input
                id='name'
                type='text'
                placeholder= 'Name'
                value={form.name}
                onChange={handleChange}
                />
            </FormNameDiv>
            <FormElementDiv>
                <label htmlFor="email">Email Address</label>
                <input
                id='email'
                type='email'
                placeholder='Email Address'
                value={form.email}
                onChange={handleChange}
                />
            </FormElementDiv>
            <FormElementDiv>
                <label htmlFor='phone'>Phone</label>
                <input
                id='phone'
                type='number'
                placeholder='Phone'
                value={form.phone}
                onChange={handleChange}
                />
            </FormElementDiv>
            <FormElementDiv>
                <label htmlFor='message'>Your Message</label>
                <textarea
                id='message'
                rows={5}
                cols={5}
                placeholder='Your Message'
                value={form.message}
                onChange={handleChange}
                />
            </FormElementDiv>
            <SubmitButton type='submit' disabled={toggleButton}>Submit</SubmitButton>
        </ContactFormOuter>
    </ContactContainer>
  )
}
