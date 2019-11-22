import React from 'react';
import { MdPhonelinkRing, MdMail, MdPlace } from 'react-icons/md';

import {
  Container,
  Wrapper,
  ContactInfo,
  ContactForm,
  FormRow
} from './styles';

function Contact() {
  return (
    <Container>
      <Wrapper>
        <ContactInfo>
          <div>
            <MdPhonelinkRing />
            <span>TELEFONE</span>
            <p>+55 11 1234 5678</p>
          </div>

          <div>
            <MdMail />
            <span>E-MAIL</span>
            <p>faladev@rocketseat.com.br</p>
          </div>

          <div>
            <MdPlace />
            <span>ENDEREÇO</span>
            <p>R. Guilherme Gemballa, 260</p>
          </div>
        </ContactInfo>

        <ContactForm>
          <FormRow>
            <input type="text" name="nome" placeholder="Nome" />
            <input type="email" name="email" placeholder="E-mail" />
          </FormRow>
          <FormRow>
            <textarea name="mensagem" placeholder="Mensagem" />
          </FormRow>
          <FormRow>
            <input type="submit" value="Enviar mensagem" />
          </FormRow>
        </ContactForm>
      </Wrapper>
    </Container>
  )
}

export default Contact;
