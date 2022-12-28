import React from 'react'
import { useEffect } from 'react';

import { 
    ContactContainer,
    ContactContent,
    ContactFormOuter,
    FormElementDiv,
    SubmitButton,
    FormNameDiv,
    FormPhoneDiv
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

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value,
        })
    }

    const checkForEmpty = () => {
        Object.keys(form).forEach(key => {
            if (!form[key] && !errors[key]){
                setErrors({...errors, [key]: true})
            } else if (form[key] && errors[key]) {
                setErrors(current => {
                    const copy = {...current};
                    delete copy[key];
                    return copy;
                })
            }
        })
    }

    React.useEffect(() => {
        checkForEmpty();
    },[form])

    const handleSubmit = (event) => {
        event.preventDefault();
        if (form.name && form.email && form.phone && form.message){
            console.log('Submitted');
            setForm(INITIAL_STATE);
        }
    };

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
            <FormNameDiv isEmpty={errors.name}>
                <label htmlFor="name">Name</label>
                <input
                id='name'
                type='text'
                placeholder= 'Name'
                value={form.name}
                onChange={handleChange}
                />
            </FormNameDiv>
            <FormPhoneDiv isEmpty={errors.email}>
                <label htmlFor="email">Email Address</label>
                <input
                id='email'
                type='email'
                placeholder='Email Address'
                value={form.email}
                onChange={handleChange}
                />
            </FormPhoneDiv>
            <FormPhoneDiv isEmpty={errors.phone}>
                <label htmlFor='phone'>Phone</label>
                <input
                id='phone'
                type='number'
                placeholder='Phone'
                value={form.phone}
                onChange={handleChange}
                />
            </FormPhoneDiv>
            <FormElementDiv isEmpty={errors.message}>
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
            <SubmitButton type='submit'>Submit</SubmitButton>
        </ContactFormOuter>
    </ContactContainer>
  )
}
