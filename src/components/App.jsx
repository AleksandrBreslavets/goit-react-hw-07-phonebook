import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { MainTitle, SectionTitle } from "./App.styled";

export const App = () => {
  return <div>
    <MainTitle>Phonebook</MainTitle>
    <ContactForm />
    <SectionTitle>Contacts</SectionTitle>
    <Filter />
    <ContactList />
  </div>   
};