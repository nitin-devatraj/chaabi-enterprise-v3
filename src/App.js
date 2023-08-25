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
import TabGroup from "./components/TabGroup/TabGroup";
import TextInput from "./components/InputFields/TextInput/TextInput";
import Accordian from "./components/Accordian/Accordian";
import SelectInput from "./components/InputFields/SelectInput/SelectInput";
import Notifications from "./components/Notifications/Notifications";
import Table from "./components/Table/Table";

function App() {
  const notificationItems = [
    {
      title: "modal window",
      content:
        "When you do something noble and beautiful and nobody noticed, do not be sad. For the sun every morning is a beautiful spectacle and yet most of the audience still sleeps.",
      type: "alert",
    },
    {
      title: "modal window",
      content:
        "When you do something noble and beautiful and nobody noticed, do not be sad. For the sun every morning is a beautiful spectacle and yet most of the audience still sleeps.",
      type: "success",
    },
    {
      title: "modal window",
      content:
        "When you do something noble and beautiful and nobody noticed, do not be sad. For the sun every morning is a beautiful spectacle and yet most of the audience still sleeps.",
      type: "warning",
    },
    {
      title: "modal window",
      content:
        "When you do something noble and beautiful and nobody noticed, do not be sad. For the sun every morning is a beautiful spectacle and yet most of the audience still sleeps.",
      type: "info",
    },
  ];

  const buttons = ["btn1", "btn2", "btn3", "btn4"];

  const tabs = ["tab1", "tab2", "tab3", "tab4"];

  const options = [
    "gurgoan",
    "bombay",
    "hyd",
    "calcutta",
    "bombay",
    "hyd",
    "calcutta",
  ];

  const accordianTabs = [
    "Accordian title - 1",
    "Accordian title - 2",
    "Accordian title - 3",
  ];

  const fileInput = {
    iconSource: cloudIcon,
    supportingText: "SVG, PNG, JPG or GIF (max. 800x400px)",
    accept: "*",
  };

  const togglePairBtns = {
    label: "Gender",
    firstButton: "male",
    secondButton: "female",
  };

  const modalActionBtns = {
    primaryButtonText: "confirm",
    secondaryButtonText: "cancel",
  };

  const emailInput = {
    label: "Email",
    helperText: "this is some text hint",
  };

  const phoneInput = {
    label: "Phone number",
    helperText: "this is some text hint",
  };

  const tableRows = [
    {
      name: "Olivia Rhye",
      status: "active",
      role: "Product Designer",
      email: "olivia@untitledui.com",
      teams: ["Design", "Product", "Marketing", "sales", "abc", "xyz"],
    },
    {
      name: "Olivia Rhye",
      status: "inactive",
      role: "Product Designer",
      email: "olivia@untitledui.com",
      teams: ["Design", "Product", "Marketing", "sales", "abc", "xyz"],
    },
    {
      name: "Olivia Rhye",
      status: "draft",
      role: "Product Designer",
      email: "olivia@untitledui.com",
      teams: ["Design", "Product", "Marketing", "sales", "abc", "xyz"],
    },
  ];

  const columnNames = [
    "Name",
    "Status",
    "Role",
    "Email",
    "Teams",
    "Delete",
    "Edit",
  ];

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
        btn group : <ButtonGroup buttons={buttons} />
      </div>
      <div>
        Previous next icons : <NavigationButtonGroup />
      </div>

      <div>
        modal buttons : <ModalActionButtons {...modalActionBtns} />
      </div>

      <div>
        email - input : <EmailInput {...emailInput} />
      </div>

      <div>
        phone - input : <PhoneInput {...phoneInput} />
      </div>

      <div>
        toggle pair button : <TogglePairButtons {...togglePairBtns} />
      </div>

      <div>
        file - input : <FileInput {...fileInput} />
      </div>
      <div>
        tab - group : <TabGroup tabs={tabs} />
      </div>

      <div>
        text - input : <TextInput />
      </div>

      <hr />

      <div>
        select - input : <SelectInput options={options} />
      </div>

      <div>
        accordian : <Accordian tabs={accordianTabs} />
      </div>

      <div>
        notification : <Notifications notificationItems={notificationItems} />
      </div>

      <div>
        table - <Table columnNames={columnNames} tableRows={tableRows} />
      </div>
    </div>
  );
}

export default App;
