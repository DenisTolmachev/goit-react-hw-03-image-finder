import styled from 'styled-components';
import { Form, Field } from 'formik';

export const SearchbarHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled(Form)`
  position: relative;
  `

export const SearchInput = styled(Field)`
  outline: none;
  height: 30px;
  width: 300px;
  border: 0;
  border-radius: 6px;
  padding-left: 10px;
  font-size: 16px;
`;

export const SearchButton = styled.button`
  display: block;
  position: absolute;
  right: 0;
  width: 30px;
  height: 30px;
  border: 0; 
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;