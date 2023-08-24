import ButtonWithLeftIcon from "./components/Buttons/ButtonWithLeftIcon/ButtonWithLeftIcon";
import ButtonWithRightIcon from "./components/Buttons/ButtonWithRightIcon/ButtonWithRightIcon";
import PrimaryButton from "./components/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "./components/Buttons/SecondaryButton/SecondaryButton";
import TertiaryButton from "./components/Buttons/TertiaryButton/TertiaryButton";
import uploadIcon from "./assets/icons/upload-icon.svg";
import cancelIcon from "./assets/icons/cancel-icon.svg";
import ButtonGroup from "./components/Buttons/ButtonGroup/ButtonGroup";
import NavigationButtonGroup from "./components/Buttons/NavigationButtonGroup/NavigationButtonGroup";

function App() {
  return (
    <div style={{ padding: "50px" }}>
      primary button : <PrimaryButton>button</PrimaryButton>
      <br />
      <br />
      secondary button : <SecondaryButton>button</SecondaryButton>
      <br />
      <br />
      tertiary button : <TertiaryButton>button</TertiaryButton>
      <br />
      <br />
      btn w/th left icon :{" "}
      <ButtonWithLeftIcon>
        <img src={uploadIcon} alt="#" />
        import
      </ButtonWithLeftIcon>
      <br />
      <br />
      btn w/th right icon :{" "}
      <ButtonWithRightIcon>
        <img src={cancelIcon} alt="#" />
        all time
      </ButtonWithRightIcon>
      <br />
      <br />
      btn group :{" "}
      <ButtonGroup childrenButtons={["btn1", "btn2", "btn3", "btn4"]} />
      <br />
      <br />
      Previous next icons : <NavigationButtonGroup />
    </div>
  );
}

export default App;
