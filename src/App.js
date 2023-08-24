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
import TogglePairButtons from "./components/Buttons/TogglePairButtons/TogglePairButtons";
import FileInput from "./components/InputFields/FileInput/FileInput";
import cloudIcon from "./assets/icons/cloud-upload-icon.svg";

function App() {
  return (
    <div className="app-container">
      <div>
        primary button : <PrimaryButton>button</PrimaryButton>
      </div>

      <div>
        secondary button : <SecondaryButton>button</SecondaryButton>
      </div>

      <div>
        tertiary button : <TertiaryButton>button</TertiaryButton>
      </div>

      <div>
        btn w/th left icon :{" "}
        <ButtonWithLeftIcon>
          <img src={uploadIcon} alt="#" />
          import
        </ButtonWithLeftIcon>
      </div>

      <div>
        btn w/th right icon :{" "}
        <ButtonWithRightIcon>
          <img src={cancelIcon} alt="#" />
          all time
        </ButtonWithRightIcon>
      </div>

      <div>
        btn group : <ButtonGroup buttons={["btn1", "btn2", "btn3", "btn4"]} />
      </div>
      <div>
        Previous next icons : <NavigationButtonGroup />
      </div>

      <div>
        modal buttons :{" "}
        <ModalActionButtons
          primaryButtonText="confirm"
          secondaryButtonText="cancel"
        />
      </div>

      <div>
        email - input :{" "}
        <EmailInput label="Email" helperText="this is some text hint" />
      </div>

      <div>
        phone - input :{" "}
        <PhoneInput label="Phone number" helperText="this is some text hint" />
      </div>

      <div>
        toggle pair button :{" "}
        <TogglePairButtons
          label="Gender"
          firstButton="male"
          secondButton="female"
        />
      </div>

      <div>
        file - input :{" "}
        <FileInput
          iconSource={cloudIcon}
          supportingText="SVG, PNG, JPG or GIF (max. 800x400px)"
          accept="*"
        />
      </div>
    </div>
  );
}

export default App;
