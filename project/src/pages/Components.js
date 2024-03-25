import { BodyGlobalStyles } from './components/config/_body-styles/BodyGlobalStyles.js';
import { BodyStyle } from './components/config/_body-styles/BodyPrimary.js';
import { TituloSecao } from './components/_titulo-secao/TituloSecao.js';
import Button from './components/_buttons/Button.js';
import { Formulario } from './components/_form/Formulario.js';

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