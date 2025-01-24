import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import initialContacts from "../src/contacts.json";
import { useState } from "react";

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={filter} setFilter={setFilter} />
      <ContactList contacts={visibleContacts} />
    </div>
  );
}
