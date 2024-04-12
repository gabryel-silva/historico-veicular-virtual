import { Margin } from "../components/config/_margin-container/Margin";
import { Message } from "../components/_registrationSuccessMessage/Message";
import { BodyGlobalStyles } from "../components/config/_body-styles/BodyGlobalStyles";
import { FlexDirectionColumn } from "../components/_flex/_flex-col/FlexDirectionColumn";
import { Link } from "react-router-dom";
import { ReturnForPagePrevious } from "../components/_goToPage/ReturnForPagePrevious";

export const RegistrationSuccess = () => {
  return (
    <>
      <BodyGlobalStyles
        bg="var(--blue-10)"
      />
      <Margin>
        <FlexDirectionColumn
          gap="1rem"
          align="center"
          pTop="45vh"
        >
          <Message
            colorText="var(--white-95)"
          />
          <Link
            to="/"
          >
            <ReturnForPagePrevious
              colorText="#B8BABC"
              title="Ir para a tela de login"
            />
          </Link>
        </FlexDirectionColumn>
      </Margin>
    </>
  )
}