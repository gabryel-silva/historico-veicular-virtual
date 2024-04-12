import styled from "styled-components"
import { BodyGlobalStyles } from "../components/config/_body-styles/BodyGlobalStyles";
import { Margin } from "../components/config/_margin-container/Margin";
import { FlexDirectionRow } from "../components/_flex/_flex-row/FlexDirectionRow";
import { TitleSection } from "../components/_titulo-secao/TitleSection"
import logout from "../assets/img/logout.svg"
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { SearchBar } from "../components/_search/SearchBar";
import { DialogBox } from "../components/_dialogBox/DialogBox";
import { ButtonMenu } from "../components/_buttons/ButtonMenu";
import carIcone from "../assets/img/car-icon.svg";
import perfilIcone from "../assets/img/perfil-icon.svg";

const PlainLink = styled(RouterLink)`
  text-decoration: none;
  color: inherit;
  width: 100%;
`;

export const Home = () => {
    const ContainerHeader = styled.div`
        width: 100%;
        background-color: var(--blue-10);
    `

    const ButtonMenuProps = [
        {
            path: "/cadastroVeiculo",
            img: `${carIcone}`,
            alt: "icone de carro",
            title: "Cadastrar novo veiculo",
            color: "var(--blue-50)",
            bg: "transparent",
        },
        {   
            path: "/perfil",
            img: `${perfilIcone}`,
            alt: "icone de usuário",
            title: "Perfil",
            color: "var(--white-95)",
            bg: "var(--blue-50)",
        }
    ]

    return (
        <>
            <BodyGlobalStyles bg="white"/>
            <ContainerHeader>
                <Margin display="flex" gap="30px" flexD="column">
                    <FlexDirectionRow jc="space-between" align="center">
                        <TitleSection align="left" title="Seja bem vindo ao HVV" color="var(--white-95)" />
                        <Link to="/">
                            <img src={logout} alt="Botão voltar" />
                        </Link>
                    </FlexDirectionRow>
                    <SearchBar></SearchBar>
                    <DialogBox>Para realizar a consulta do veículo, insira o nome do veículo, placa ou modelo na barra de pesquisa acima para acessar suas informações.</DialogBox>
                </Margin>
            </ContainerHeader>
            <Margin display="flex" gap="30px" flexD="column">
                <FlexDirectionRow gap="10px">
                    {
                        ButtonMenuProps.map((item, index) => (
                            <PlainLink key={index} to={item.path}>
                                <ButtonMenu
                                    color={item.color}
                                    bg={item.bg}
                                    img={item.img}
                                    alt={item.alt}
                                    title={item.title}
                                />
                            </PlainLink>
                        ))
                    }
                </FlexDirectionRow>

            </Margin>
        </>
    );
}