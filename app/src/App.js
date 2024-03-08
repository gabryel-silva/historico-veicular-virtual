import { BodyGlobalStyles } from './components/config/_body-styles/BodyGlobalStyles.js';
import { BodyStyle } from './components/config/_body-styles/BodyPrimary.js';
import Button from './components/_buttons/Button.js';

function App() {
  return (
    <>
      <BodyGlobalStyles />
      <BodyStyle>
        <Button></Button>
      </BodyStyle>
    </>
  );
}

export default App;
