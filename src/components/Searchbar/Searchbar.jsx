import { SearchbarHeader, SearchForm, SearchInput, SearchButton } from './Searchbarstyled';
import { Formik } from 'formik';

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
            <SearchButton type="submit"></SearchButton>
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
