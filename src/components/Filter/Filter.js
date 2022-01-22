import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/phonebook-actions.js';
import TextField from '@mui/material/TextField';

const Filter = ({ filter, changeFilter }) => {
  return (
    <form action="">
      <label htmlFor="">
        {/* <p> Find contacts by name</p> */}
        <TextField
          label="Find contacts by name..."
          variant="standard"
          placeholder="Find contacts by name..."
          onChange={e => changeFilter(e.currentTarget.value)}
          type="text"
          name="name"
          id="standard-basic"
          value={filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        />
      </label>
    </form>
  );
};

const mapStateToProps = ({ contacts: { filter } }) => ({ filter: filter });

const mapDispatchToProps = dispatch => ({
  changeFilter: value => dispatch(changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
