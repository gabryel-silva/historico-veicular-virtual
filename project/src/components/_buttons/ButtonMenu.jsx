import styled from "styled-components"

export const ButtonMenu = (props) => {

  const ButtonMenuStyled = styled.div`
    display: flex;
    padding: 50px 10px 10px 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: calc(100% - gap);
    heigth: 100%;

    border-radius: 10px;
    border: 1px solid var(--blue-50);
    background-color: ${(props) => (props.bg)};

    img {
      height: 24px;
    }

    p { 
      color: ${(props) => (props.color)};

      text-align: center;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  `
  return(
    <ButtonMenuStyled  bg={props.bg} color={props.color}>
      <img src={props.img} alt={props.alt} />
      <p>{props.title}</p>
    </ButtonMenuStyled>
  );
}
