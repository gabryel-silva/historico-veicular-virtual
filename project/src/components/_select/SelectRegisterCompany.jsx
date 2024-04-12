import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const SelectRegisterStyle = styled.select`
  background-color: #CECECE;
  color: var(--blue-10);
  padding: .5rem 1rem;
  border-radius: 10px;
`

export const SelectRegisterCompany = () => {
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const selectOption = e.target.value;

    switch(selectOption){
      case "company":
        navigate('/cadastroEmpresa');
        break;
      default:
        navigate('/cadastro');
        break;
    }
  }

  return (
    <SelectRegisterStyle onChange={handleChange}>
      <option value="company">Empresa</option>
      <option value="user">Usuário comum</option>
    </SelectRegisterStyle>
  );
}