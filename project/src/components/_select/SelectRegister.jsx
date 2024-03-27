import styled from "styled-components";

export const SelectRegisterStyle = styled.select`
  background-color: #CECECE;
  color: var(--blue-10);
  padding: .5rem 1rem;
  border-radius: 10px;
`

export const SelectRegister = () => {
  return (
    <SelectRegisterStyle>
      <option value="user">Usuário comum</option>
      <option value="company">Empresa</option>
    </SelectRegisterStyle>
  );
}