
import React, { useEffect } from 'react'

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const Form = () => {

    const form = useRef();

    const [send, setSend] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSend(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [send])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_m8m0tvo",
                "template_gwprat7",
                form.current,
                "jxw3MKmPK7RTn6Kxq"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    form.current.reset();
                    setSend(true);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

  return (
    <form ref={form} onSubmit={sendEmail}>
        <div>
            <img src='images/icon-contact-black.png'  alt="icon" className="icon-contact-black"/>
        </div>
        <p className='fale-conosco'>Fale conosco</p>

        <label htmlFor="name">Nome:</label>
        <input type="text" name="user_name" required placeholder="Digite seu nome"/>
        <label htmlFor="email">E-mail:</label>
        <input type="email" name="user_email" required placeholder="Digite seu e-mail"/>
        <label htmlFor="message">Mensagem:</label>
        <textarea name="message" rows="5" required placeholder="Digite sua mensagem"></textarea>
        <button type="submit" value={"Send"}>Enviar</button>
        {send && <p className='alert'>Email enviado!</p>}
    </form>
  )
}

export default Form