import React, { useState } from "react";
import styled from "styled-components";
import { h1_font_size } from "../variables/font-sizes";
import { base_font_size } from "../variables/font-sizes";
import { normal_space } from "../variables/spacing";
import { white, border_color } from "../variables/colors";

const SearchBar = ({ placeholder, onSearchSubmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = event => {
      event.preventDefault();
      onSearchSubmit(term);
  }

  return (
    <StyledSearchBar onSubmit={onFormSubmit}>
      <input
        value={term}
        onChange={input => setTerm(input.target.value)}
        type="text"
        placeholder={placeholder}
      />
    </StyledSearchBar>
  );
};

const StyledSearchBar = styled.form`
    min-height: inherit;
    flex-basis: 800px;
    flex-shrink: 2;

    flex-grow: 1;
    display: flex;
    align-items: center;
    background-color: ${white};
    border-right: 1px solid ${border_color};

    input {
        border: none;
        padding-left: ${normal_space}
        flex-basis: 800px;
        height: 98%;
        font-size: ${base_font_size};
        flex-grow: 1;
        outline: none;
    }

    h1 {
        font-size: ${h1_font_size}
    }
`;

export default SearchBar;
