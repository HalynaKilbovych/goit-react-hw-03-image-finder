// import { IoSearchOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';
import {
  SearchBox,
  SearchForm,
  Button,
  Label,
  Input,
} from './SearchBar.styled';

export function SearchBar({ onSubmit }) {
  return (
    <SearchBox>
      <SearchForm onSubmit={onSubmit}>
        <Button type="submit">
          <Label>Search</Label>
        </Button>
        <Input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBox>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

