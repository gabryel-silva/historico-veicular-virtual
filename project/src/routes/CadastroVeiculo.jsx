import { Link } from "react-router-dom";
import { FlexDirectionRow } from "../components/_flex/_flex-row/FlexDirectionRow";
import { TitleSection } from "../components/_titulo-secao/TitleSection";
import { BodyGlobalStyles } from "../components/config/_body-styles/BodyGlobalStyles";
import { Margin } from "../components/config/_margin-container/Margin";
import previous from "../assets/img/previous2.svg";
import { FlexDirectionColumn } from "../components/_flex/_flex-col/FlexDirectionColumn";
import { Form } from "../components/_form/Form";
import { Field } from "../components/_form/_campo/Field";
import { Button } from "../components/_buttons/Button";
import { DialogBox } from "../components/_dialogBox/DialogBox";

export const CadastroVeiculo = () => {

    const listFields = [
        {
            title: "Modelo",
            type: "text",
            color: "var(--blue-95)",
        },
        {
            title: "Marca",
            type: "text",
            color: "var(--blue-95)",
        },
        {
            title: "Categoria",
            type: "text",
            color: "var(--blue-95)",
        },
        {
            title: "Placa",
            type: "text",
            color: "var(--blue-95)",
        },
        {
            title: "Ano",
            type: "number",
            color: "var(--blue-95)",
        },
        {
            title: "Cor",
            type: "text",
            color: "var(--blue-95)",
        },
        {
            title: "Km",
            type: "number",
            color: "var(--blue-95)",
        },
        {
            title: "Relacionar o veículo à esta conta como proprietário do veículo.delo",
            type: "checkbox",
            color: "var(--blue-95)",
        },
    ]

    return (
        <>
            <BodyGlobalStyles bg="var(white-95)" />
            <Margin>
                <FlexDirectionColumn>
                    <FlexDirectionRow jc="space-between">
                        <TitleSection color="var(--blue-50)" title="Cadastro do veiculor" />
                        <Link to="/home">
                            <img src={previous} alt="Botão para voltar a seção" />
                        </Link>
                    </FlexDirectionRow>
                    <DialogBox>
                        Preencha todos campos solicitados para a realização do cadastro de veículo no sistema
                    </DialogBox>
                    <Form>
                        {
                            listFields.map((item, index) => (
                                <Field
                                    key={index}
                                    title={item.title}
                                    type={item.type}
                                    color={item.color}
                                />
                            ))
                        }
                        <Button cta="Salvar" />
                    </Form>
                </FlexDirectionColumn>
            </Margin>
        </>
    );
}