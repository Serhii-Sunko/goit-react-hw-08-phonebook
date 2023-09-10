import Box from '../../Box/Box';
import ContactForm from '../../ContactForm/ContactForm';
import ContactList from '../../ContactList/ContactList';
import Filter from '../../Filter/Filter';
import Section from '../../Section/Section';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../../redux/operations';
import { MainContainer } from './ContactPage.styled';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <MainContainer>
      <Box>
        <Section title="PhoneBook">
          <ToastContainer />
          <ContactForm />
        </Section>

        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </Box>
    </MainContainer>
  );
}
