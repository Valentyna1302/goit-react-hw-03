import s from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={s.container}>
      <div>
        <p className={s.text}>
          <FaUser size="15" />
          {name}
        </p>
        <p className={s.text}>
          <FaPhoneAlt size="15" />
          {number}
        </p>
      </div>
      <button className={s.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
