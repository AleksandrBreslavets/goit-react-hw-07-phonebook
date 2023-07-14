import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { ErrorMsg, MainTitle, SectionTitle } from "./App.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectError, selectIsLoading } from "redux/selectors";
import { Loader } from "./Loader/Loader";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return <div>
    <MainTitle>Phonebook</MainTitle>
    <ContactForm />
    <SectionTitle>Contacts</SectionTitle>
    <Filter />
    {isLoading && !error && <Loader />}
    <ContactList />
    {error && <ErrorMsg>Something went wrong... Try to reload the page!</ErrorMsg>}
  </div>   
};