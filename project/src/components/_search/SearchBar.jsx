import styled from "styled-components";
import search from"../../assets/img/search.svg";

export const SearchBar = () => {

  const SearchBarStyle = styled.input`
    display: flex;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    width: 95%;

    background: 97% / 24px no-repeat url(${search});
    border-radius: 10px;
    border: none;
    background-color: rgba(250, 250, 250, 0.80);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `
  return(
      <SearchBarStyle placeholder="Consultar veículo"/>
  );
}