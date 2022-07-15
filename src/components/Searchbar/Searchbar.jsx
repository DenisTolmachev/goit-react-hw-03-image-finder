import { SearchbarHeader, SearchForm, SearchInput, SearchButton } from './Searchbarstyled';
import { Formik } from 'formik';
import { RiSearchLine } from "react-icons/ri";

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarHeader>
      <Formik initialValues={{ query: '' }}
        onSubmit=
        {values => {
          onSubmit(values.query);
        }}>
        {props => (
          <SearchForm>
            <SearchButton type="submit">
            <RiSearchLine />
            </SearchButton>
            <SearchInput
              type="text"
              autoComplete="off"
              autoFocus
              name="query"
              placeholder="Search images and photos"
              value={props.values.query}
              onChange={props.handleChange}
            />
          </SearchForm>
        )}
      </Formik>
    </SearchbarHeader>
  );
};
