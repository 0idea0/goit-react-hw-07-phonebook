import React from 'react';
import TextField from '@mui/material/TextField';

const ContactFormNumber = ({ title, onChange, value }) => {
  return (
    <>
      <label htmlFor="">
        {/* {title}&ensp; */}
        <TextField
          id="outlined-basic"
          label="Number"
          variant="outlined"
          value={value}
          onChange={onChange}
          type="text"
          name={title}
          placeholder={title}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
    </>
  );
};

export default ContactFormNumber;
