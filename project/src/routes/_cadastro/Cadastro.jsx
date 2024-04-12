import { Margin } from "../../components/config/_margin-container/Margin.jsx";
import { FlexDirectionColumn } from "../../components/_flex/_flex-col/FlexDirectionColumn.jsx";
import { FlexDirectionRow } from "../../components/_flex/_flex-row/FlexDirectionRow.jsx";
import { TitleSection } from "../../components/_titulo-secao/TitleSection.jsx";
import previus from "../../assets/img/btn-previous.svg";
import { SelectRegisterUser } from "../../components/_select/SelectRegisterUser.jsx";
import { Form } from "../../components/_form/Form.jsx";
import { Field } from "../../components/_form/_campo/Field.jsx";
import { Button } from "../../components/_buttons/Button.jsx";
import { Link } from "react-router-dom"
import { BodyGlobalStyles } from "../../components/config/_body-styles/BodyGlobalStyles.jsx";

export const Cadastro = () => {

    const listLabel = [
        {
            field: "Nome",
            type: "text",
        },
        {
            field: "Sobrenome",
            type: "text",
        },
        {
            field: "E-mail",
            type: "text",
        },
        {
            field: "Data Nascimento",
            type: "date",
        },
        {
            field: "Senha",
            type: "password",
        },
        {
            field: "Confirmar Senha",
            type: "password",
        },
    ]

    return (
        <>
            <BodyGlobalStyles bg="var(--blue-10)" colorText="var(--white-95)" />
            <Margin>
                <FlexDirectionColumn gap="2rem">
                    <FlexDirectionRow
                        jc="space-between"
                        w="100%"
                        align="center"
                    >
                        <TitleSection title="Cadastro" />
                        <Link to="/" >
                            <img src={previus} alt="Botão de voltar à seção anterior" />
                        </Link>
                    </FlexDirectionRow>
                    <SelectRegisterUser></SelectRegisterUser>
                    <Form>
                        {listLabel.map((item, index) => (<Field key={index} label={item.field} type={item.type}></Field>))}
                        <Link to="/RegistrationSuccess">
                            <Button cta="Salvar" />
                        </Link>
                    </Form>
                </FlexDirectionColumn>
            </Margin>
        </>
    );
}