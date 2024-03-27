import React from "react";
import { Margin } from "../components/config/_margin-container/Margin.jsx";
import { FlexDirectionColumn } from "../components/_flex/_flex-col/FlexDirectionColumn.jsx";
import { TitleSection } from "../components/_titulo-secao/TitleSection.jsx";
import logo from "../assets/img/logo.svg";
import { Form } from "../components/_form/Form.jsx";
import { Field } from "../components/_form/_campo/Field.jsx";
import { Button } from "../components/_buttons/Button.jsx";
import { ButtonRegister } from "../components/_buttons/ButtonRegister.jsx";
import { Link } from "react-router-dom";
import { BodyGlobalStyles } from "../components/config/_body-styles/BodyGlobalStyles.jsx";

export const Login = () => {

    const listLabel = [
        {
            field: 'E-mail',
            type: 'text'
        },
        {
            field: 'Senha',
            type: 'password',
        }
    ];

    return (
        <>
            <BodyGlobalStyles bg="var(--blue-10)" colorText="var(--white-95)"/>
            <Margin>
                <FlexDirectionColumn gap="3rem">
                    <TitleSection title="Login" />
                    <img src={logo} alt="Logotipo" />
                    <Form>
                        {listLabel.map((item, index) => (<Field key={index} label={item.field} type={item.type} />))}
                        <Link to="/home">
                            <Button cta="Entrar" />
                        </Link>
                    </Form>
                    <Link to="/cadastro">
                        <ButtonRegister cta="Cadastrar-se" />
                    </Link>
                </FlexDirectionColumn>
            </Margin>
        </>
    );
}