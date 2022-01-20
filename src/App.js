import "./App.css";
import Button from "./Components/Button/Button";
import Label from "./Components/Label/Label";
import Description from "./Components/Label/Description";

import Sidebar from "./Components/Sidebar/Sidebar";
import Text from "./Components/Textbox/Text";
import Password from "./Components/Textbox/Password";
import Currency from "./Components/Textbox/Currency";

import Checkbox from "./Components/Checkbox/Checkbox";
import Switch from "./Components/Switch/Switch";
import Radio from "./Components/RadioButton/Radio";
import DatePick from "./Components/Date/DatePick";
import Dropdown from "./Components/Select/Dropdown";
import Progress from "./Components/ProgressBar/Progress";
import Tooltips from "./Components/Tooltips/Tooltips";
import ErrorMessage from "./Components/Label/ErrorMessage";
import HelpOutline from "./Components/Icon/HelpOutline";
import HyperLink from "./Components/Link/HyperLink";

import { arrayOfStrings, options, optionsSample, topAccount, topBanks } from "./SampleData/List";
import DropdownSearch from "./Components/Select/DropdownSearch/DropdownSearch";
import { useState } from "react";
import TextboxDyno from "./Components/TextboxDyno/TextboxDyno";
import { color } from "@mui/system";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Icon } from "@mui/material";
import TextboxDyno_0 from "./Components/TextboxDyno/TextboxDyno_0";

function App() {

  const [demo, setDemo] = useState(true);
  const [inputError, setInputError] = useState(false);

  return (
    <div>
      {/* <Sidebar /> */}
      <fieldset className="field" style={{ padding: "2rem" }}>
        {demo ?
          <>

            <TextboxDyno

              onChangeText={(e) => {

                if (e.target.value === 'a') {
                  setInputError(true)
                }
                console.log('e', e.target.value,)
              }}
              containerStyle={{}}
              titleStyle={{}}
              labelText='Account No'

              // styleDesc={{ color: 'red' }}

              renderYourLabelDesc={() => {
                return (
                  <>
                    {inputError ?
                      <>
                        <Label value="GOT error" style={{ color: 'red' }} />
                        {/* <ErrorDyno />
                        <IconDyno type=''/> */}

                        {/* <Icon /> */}
                        <ErrorOutlineIcon />

                      </>
                      :
                      <Label value="NO error" style={{ color: 'blue' }} />
                    }

                  </>

                )
              }}

            />

            {/* <TextboxDyno
              inputType='currency'
              onChangeText={(e) => { console.log('e', e.target.value) }}
              containerStyle={{}}
              titleStyle={{}}
              labelText='Amount'
              styleDesc={{  }}

            /> */}

            <TextboxDyno_0
              containerStyle={{ marginTop: 20 }}
              labelText='Account No'
              descriptionText='Your Account Number'
              errorText='This is an error'
            ></TextboxDyno_0>
          </> :
          <>
            <Switch />
            <div className="inputContainer">
              <Label value="Account No" />
              <Text id="accountNo" name="accountNo" placeholder="9876 5434 56" />
            </div>
            <Checkbox />
            <Radio />
            <Button />
            <DatePick />
            <Dropdown />
            <Progress />
            <Tooltips />
            <div className="inputContainer">
              <Label value="Transaction Authorisation Code" />
              <Password />
            </div>
            <div className="inputContainer">
              <Label value="Nickname" />
              <Text
                id="nickname"
                name="nickname"
                placeholder="Enter nickname"
                error={true}
              />
              <ErrorMessage error="Nickname cannot contain special characters (only spaces)" />
            </div>
            <div className="inputContainer">
              <div className="tooltipContainer">
                <Label value="Biller Code " />
                <HelpOutline />
              </div>
              <Text
                id="billerCode"
                name="billerCode"
                placeholder="Enter biller code"
                error={false}
              />
            </div>

            <div className="inputContainer">
              <Label value="Amount" />
              <Currency currency="RM" />
            </div>

            <div className="inputContainer">
              <Label value="Account No" />
              <Text id="accountNo1" name="accountNo1" placeholder="9876 5434 56" />
              <div style={{ marginTop: "10px" }}>
                <HyperLink link="https://www.google.com/" value="Click Here" />
                <Description value="to find out more." />
              </div>
            </div>

            <Progress />

            <DropdownSearch dropdownType='2' label={'Recepient Bank'} listOptions={topBanks} containerStyle={{ marginTop: 30 }} />

            <Button disabled style={{ marginTop: 30 }}></Button>

            <DropdownSearch dropdownType='3' label={'Account'} listOptions={topAccount} containerStyle={{ marginTop: 40 }} />
            <Label />

          </>
        }

      </fieldset>
    </div>)

}

export default App;
