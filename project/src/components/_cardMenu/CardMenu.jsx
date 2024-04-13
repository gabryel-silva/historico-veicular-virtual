import styled from "styled-components";
import { FlexDirectionColumn } from "../_flex/_flex-col/FlexDirectionColumn"
import prancheta from "../../assets/img/prancheta.svg"
import { FlexDirectionRow } from "../_flex/_flex-row/FlexDirectionRow";
import { DialogBox } from "../_dialogBox/DialogBox";

export const CardMenu = () => {

  const Box = styled.div`
    border-radius: 20px;
    background: #F4F4F4;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); 
    padding: 1rem .7rem;
  `
  const Img = styled.img`
    background-color: var(--yellow-50);
    padding: 7px;
    border-radius: 100px;
  `

  const Line = styled.div`
    width: 3px;
    height: 59.333px;
    margin-left: 1rem;

    background: #FDB827;
  `

  const TextItem = styled.p`
    padding: 10px;
    border-radius: 10px;
    background: rgba(206, 206, 206, 0.30);
  `

  const ListElements = [
    {
      img: `${prancheta}`,
      alt: "Item",
      title: "Especificações do Veículo"
    },
    {
      img: `${prancheta}`,
      alt: "Item",
      title: "Histórico de Manutenção"
    },
    {
      img: `${prancheta}`,
      alt: "Item",
      title: "Locais de Revisões Anteriores"
    },
    {
      img: `${prancheta}`,
      alt: "Item",
      title: "Preço Atual do Carro"
    }
  ]

  return (
    <Box>
      <FlexDirectionColumn>
        <DialogBox color="var(--blue-50)" p="0 0 1rem 0">
          Saiba tudo que você pode encontrar a respeito de qualquer veículo cadastrados em nossa base de dados aqui
        </DialogBox>
        {
          ListElements.map((item, index) => (
            <FlexDirectionColumn key={index}>
              <FlexDirectionRow gap=".5rem">
                <Img src={item.img} alt={item.alt} />
                <TextItem>{item.title}</TextItem>
              </FlexDirectionRow>
              { 
                index !== 3 && <Line />
              }
            </FlexDirectionColumn>
          ))
        }
      </FlexDirectionColumn>
    </Box>
  )
}