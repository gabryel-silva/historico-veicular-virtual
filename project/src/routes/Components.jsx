import { BodyGlobalStyles } from './components/config/_body-styles/BodyGlobalStyles.jsx';
import { BodyStyle } from './components/config/_body-styles/BodyPrimary.jsx';
import { TituloSecao } from './components/_titulo-secao/TituloSecao.jsx';
import Button from './components/_buttons/Button.jsx';
import { Formulario } from './components/_form/Formulario.jsx';

export const Components = () => {
    return (
        <>
            <BodyGlobalStyles />
            <BodyStyle>
                <TituloSecao />
                <Formulario />
                <Button></Button>
            </BodyStyle>
        </>
    );
}