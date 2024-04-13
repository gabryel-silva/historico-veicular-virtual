import { Form } from "../../../components/_form/Form";
import { Field } from "../../../components/_form/_campo/Field";
import { Button } from "../../../components/_buttons/Button";
import { Margin } from "../../../components/config/_margin-container/Margin";
import { FlexDirectionColumn } from "../../../components/_flex/_flex-col/FlexDirectionColumn";
import { FlexDirectionRow } from "../../../components/_flex/_flex-row/FlexDirectionRow";
import { TitleSection } from "../../../components/_titulo-secao/TitleSection";
import { Link } from "react-router-dom";
import { SelectRegisterCompany } from "../../../components/_select/SelectRegisterCompany";
import { BodyGlobalStyles } from "../../../components/config/_body-styles/BodyGlobalStyles";
import previous from "../../../assets/img/btn-previous.svg"

export const CadastroEmpresa = () => {

  const listItens = [
    {
      field: 'Nome da empresa',
      type: 'text'
    },
    {
      field: 'CNPJ',
      type: 'number'
    },
    {
      field: 'Categoria',
      type: 'text'
    },
    {
      field: 'CEP',
      type: 'number'
    },
    {
      field: 'cidade',
      type: 'text'
    },
    {
      field: 'UF',
      type: 'text'
    },
    {
      field: 'Bairro',
      type: 'text'
    },
    {
      field: 'Logradouro',
      type: 'text'
    },
    {
      field: 'Número',
      type: 'text'
    },
    {
      field: 'Telefone',
      type: 'number'
    },
    {
      field: 'E-mail',
      type: 'text'
    },
    {
      field: 'Senha',
      type: 'text'
    },
    {
      field: 'Confirmar senha',
      type: 'text'
    }
  ];

  return (
    <>
      <BodyGlobalStyles
        bg="var(--blue-10)"
        colorText="var(--white-95)"
      />
      <Margin>
        <FlexDirectionColumn gap="2rem">
          <FlexDirectionRow
            jc="space-between"
            w="100%"
            align="center"
          >
            <TitleSection
              title="Cadastro"
            />
            <Link to="/" >
              <img
                src={previous}
                alt="Botão de voltar à seção anterior"
              />
            </Link>
          </FlexDirectionRow>
          <SelectRegisterCompany></SelectRegisterCompany>
          <Form>
            {listItens.map((item, index) => (<Field key={index} label={item.field} type={item.type} />))}
            <Link to="/RegistrationSuccess">
              <Button cta="Salvar" />
            </Link>
          </Form>
        </FlexDirectionColumn>
      </Margin>
    </>
  );
}