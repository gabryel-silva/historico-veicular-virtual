import { SearchBar } from "../components/_search/SearchBar";
import { BodyGlobalStyles } from "../components/config/_body-styles/BodyGlobalStyles";
import { Margin } from "../components/config/_margin-container/Margin";
import { FlexDirectionColumn } from "../components/_flex/_flex-col/FlexDirectionColumn";
import fechar from "../assets/img/cancel.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Search = () => {
  const Img = styled.img`
    height: 24px;
  `
  return (
    <>
      <BodyGlobalStyles bg="#E0E0E0" />
      <Margin>
        <FlexDirectionColumn align="end" gap="1rem">
          <Link to="/home">
            <Img src={fechar} alt="Icone para fechar a seção de pesquisa" />
          </Link>
          <SearchBar />
        </FlexDirectionColumn>
      </Margin>
    </>
  )
} 