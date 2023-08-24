import ButtonWithLeftIcon from "./components/Buttons/ButtonWithLeftIcon/ButtonWithLeftIcon";
import ButtonWithRightIcon from "./components/Buttons/ButtonWithRightIcon/ButtonWithRightIcon";
import PrimaryButton from "./components/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "./components/Buttons/SecondaryButton/SecondaryButton";
import TertiaryButton from "./components/Buttons/TertiaryButton/TertiaryButton";
import uploadIcon from "./assets/icons/upload-icon.svg";
import cancelIcon from "./assets/icons/cancel-icon.svg";
import ButtonGroup from "./components/Buttons/ButtonGroup/ButtonGroup";
import NavigationButtonGroup from "./components/Buttons/NavigationButtonGroup/NavigationButtonGroup";
import ModalActionButtons from "./components/Buttons/ModalActionButtons/ModalActionButtons";
import EmailInput from "./components/InputFields/EmailInput/EmailInput";
import PhoneInput from "./components/InputFields/PhoneInput/PhoneInput";

function App() {
  return (
    <div className="app-container">
      <p>
        primary button : <PrimaryButton>button</PrimaryButton>
      </p>

      <p>
        secondary button : <SecondaryButton>button</SecondaryButton>
      </p>

      <p>
        tertiary button : <TertiaryButton>button</TertiaryButton>
      </p>

      <p>
        btn w/th left icon :{" "}
        <ButtonWithLeftIcon>
          <img src={uploadIcon} alt="#" />
          import
        </ButtonWithLeftIcon>
      </p>

      <p>
        btn w/th right icon :{" "}
        <ButtonWithRightIcon>
          <img src={cancelIcon} alt="#" />
          all time
        </ButtonWithRightIcon>
      </p>

      <p>
        btn group : <ButtonGroup buttons={["btn1", "btn2", "btn3", "btn4"]} />
      </p>
      <p>
        Previous next icons : <NavigationButtonGroup />
      </p>

      <p>
        modal buttons :{" "}
        <ModalActionButtons
          primaryButtonText="confirm"
          secondaryButtonText="cancel"
        />
      </p>

      <p>
        email - input :{" "}
        <EmailInput label="Email" helperText="this is some text hint" />
      </p>

      <p>
        phone - input : <PhoneInput label="Phone number" />
      </p>
    </div>
  );
}

export default App;
