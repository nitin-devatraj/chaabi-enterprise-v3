import ButtonWithLeftIcon from "../../components/Buttons/ButtonWithLeftIcon/ButtonWithLeftIcon";
import ButtonWithRightIcon from "../../components/Buttons/ButtonWithRightIcon/ButtonWithRightIcon";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../components/Buttons/SecondaryButton/SecondaryButton";
import TertiaryButton from "../../components/Buttons/TertiaryButton/TertiaryButton";
import uploadIcon from "../../assets/icons/upload-icon.svg";
import cancelIcon from "../../assets/icons/cancel-icon.svg";
import ButtonGroup from "../../components/Buttons/ButtonGroup/ButtonGroup";
import NavigationButtonGroup from "../../components/Buttons/NavigationButtonGroup/NavigationButtonGroup";
import ModalActionButtons from "../../components/Buttons/ModalActionButtons/ModalActionButtons";
import EmailInput from "../../components/InputFields/EmailInput/EmailInput";
import PhoneInput from "../../components/InputFields/PhoneInput/PhoneInput";
import TogglePairButtons from "../../components/Buttons/TogglePairButtons/TogglePairButtons";
import FileInput from "../../components/InputFields/FileInput/FileInput";
import cloudIcon from "../../assets/icons/cloud-upload-icon.svg";
import TabGroup from "../../components/TabGroup/TabGroup";
import TextInput from "../../components/InputFields/TextInput/TextInput";
import Accordian from "../../components/Accordian/Accordian";
import SelectInput from "../../components/InputFields/SelectInput/SelectInput";
import Notifications from "../../components/Notifications/Notifications";
import Table from "../../components/Table/Table";
import ToggleButton from "../../components/Buttons/ToggleButton/ToggleButton";
import RadioButton from "../../components/Buttons/RadioButton/RadioButton";
import CheckBox from "../../components/Buttons/CheckBox/CheckBox";
import colorTheme from "../../global-styles/color-theme.module.scss";

import ThemeToggleButton from "../../components/Buttons/ThemeToggleButton/ThemeToggleButton";
import { useSelector } from "react-redux";

function Components() {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

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
      id: 1,
      name: "John Smith",
      status: "active",
      role: "Software Engineer",
      email: "john.smith@example.com",
      teams: ["Engineering", "Product", "Development"],
    },
    {
      id: 2,
      name: "Jane Doe",
      status: "inactive",
      role: "UX Designer",
      email: "jane.doe@example.com",
      teams: ["Design", "Product"],
    },
    {
      id: 3,
      name: "Michael Johnson",
      status: "draft",
      role: "Product Manager",
      email: "michael.johnson@example.com",
      teams: ["Product", "Sales", "Marketing", "Analytics"],
    },
    {
      id: 4,
      name: "Emily Williams",
      status: "active",
      role: "Frontend Developer",
      email: "emily.williams@example.com",
      teams: ["Engineering", "Development"],
    },
    {
      id: 5,
      name: "William Davis",
      status: "inactive",
      role: "UI Designer",
      email: "william.davis@example.com",
      teams: ["Design", "Product"],
    },
    {
      id: 6,
      name: "Sophia Wilson",
      status: "draft",
      role: "Marketing Specialist",
      email: "sophia.wilson@example.com",
      teams: ["Marketing", "Sales"],
    },
    {
      id: 7,
      name: "Alexander Martinez",
      status: "active",
      role: "Backend Developer",
      email: "alexander.martinez@example.com",
      teams: ["Engineering", "Development", "QA"],
    },
    {
      id: 8,
      name: "Emma Brown",
      status: "inactive",
      role: "UX Designer",
      email: "emma.brown@example.com",
      teams: ["Design"],
    },
    {
      id: 9,
      name: "Daniel Jones",
      status: "draft",
      role: "Product Manager",
      email: "daniel.jones@example.com",
      teams: ["Product", "Sales", "Marketing", "Analytics"],
    },
    {
      id: 10,
      name: "Olivia Taylor",
      status: "active",
      role: "Full Stack Developer",
      email: "olivia.taylor@example.com",
      teams: ["Engineering", "Development", "QA"],
    },
    {
      id: 11,
      name: "Liam Jackson",
      status: "inactive",
      role: "UI Designer",
      email: "liam.jackson@example.com",
      teams: ["Design", "Product"],
    },
    {
      id: 12,
      name: "Ava White",
      status: "draft",
      role: "Marketing Specialist",
      email: "ava.white@example.com",
      teams: ["Marketing", "Sales", "Analytics"],
    },
    {
      id: 13,
      name: "Noah Martinez",
      status: "active",
      role: "Backend Developer",
      email: "noah.martinez@example.com",
      teams: ["Engineering", "Development"],
    },
    {
      id: 14,
      name: "Isabella Davis",
      status: "inactive",
      role: "UX Designer",
      email: "isabella.davis@example.com",
      teams: ["Design", "Product"],
    },
    {
      id: 15,
      name: "Mason Wilson",
      status: "draft",
      role: "Product Manager",
      email: "mason.wilson@example.com",
      teams: ["Product", "Sales", "Marketing", "Analytics"],
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
    <div
      className={`components-container ${
        isDarkMode ? colorTheme.darkThemeLowest : colorTheme.lightThemeLowest
      }`}
    >
      <div className="theme-toggle-container">
        <div>
          primary button : <PrimaryButton>button</PrimaryButton>
        </div>
        <ThemeToggleButton />
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
        table : <Table columnNames={columnNames} tableRows={tableRows} />
      </div>

      <div>
        toggle : <ToggleButton />
      </div>

      <div>
        radio - button : <RadioButton />
      </div>

      <div>
        checkBox - <CheckBox />
      </div>

     
    </div>
  );
}

export default Components;
