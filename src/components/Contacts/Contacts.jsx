import s from './Contacts.mudule.scss'
import {ContactsFilter} from "../ContactsFilter/ContactsFilter";
import {ContactForm} from "../ContactsForm/ContactsForm";
import {ContactsList} from "../ContactsList/ContactsList";

export const  Contacts = () => {

    return (
    <>
      <ContactForm/>
      <ContactsFilter/>
      <ContactsList/>
    </>)
}

