import s from './Contacts.mudule.scss'
import {ContactsFilter} from "../ContactsFilter/ContactsFilter";
import {ContactForm} from "../ContactsForm/ContactsForm";

export const  Contacts = () => {

    return (
    <>
      <ContactForm/>
      <ContactsFilter/>
    </>)
}

