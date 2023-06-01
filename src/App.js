import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

import { ToggleButton } from "primereact/togglebutton";
import TableDemo from "./component/TableDemo";

function App() {
  const [selectedState, setSelectedState] = useState(null);
  const [isLightTheme, setIsLightTheme] = useState(true);

  const states = [
    { name: "Arizona", code: "Arizona" },
    { name: "California", value: "California" },
    { name: "Florida", code: "Florida" },
    { name: "Ohio", code: "Ohio" },
    { name: "Washington", code: "Washington" },
  ];

  const changeTheme = (theme) => {
    let themeLink = document.getElementById("app-theme");
    if (themeLink) {
      setIsLightTheme(!isLightTheme);
      themeLink.href = theme + ".css";
    }
  };

  return (
    <div className="card">
      <div className="flex align-items-center justify-content-center mb-4">
        <ToggleButton
          offLabel="Dark"
          onLabel="Light"
          offIcon="pi pi-moon"
          onIcon="pi pi-sun"
          checked={!isLightTheme}
          iconPos="right"
          tooltip={`Switch ${isLightTheme ? "Dark" : "Light"} Theme`}
          onChange={() => changeTheme(!isLightTheme ? "light" : "dark")}
        />
      </div>
      <div className="formgrid grid p-fluid">
        <div className="field col-12 md:col-6">
          <label htmlFor="firstname">Firstname</label>
          <InputText id="firstname" />
        </div>
        <div className="field col-12 md:col-6">
          <label htmlFor="lastname">Lastname</label>
          <InputText id="lastname" />
        </div>
        <div className="field col-12">
          <label htmlFor="address">Address</label>
          <InputTextarea id="address" rows="4" />
        </div>
        <div className="field col-12 md:col-6">
          <label htmlFor="city">City</label>
          <InputText id="city" className="inputfield w-full" />
        </div>
        <div className="field col-12 md:col-3">
          <label htmlFor="state">State</label>
          <Dropdown
            inputId="state"
            value={selectedState}
            options={states}
            onChange={(e) => setSelectedState(e.value)}
            optionLabel="name"
            placeholder="Select"
          />
        </div>
        <div className="field col-12 md:col-3">
          <label htmlFor="zip">Zip</label>
          <InputText id="zip" />
        </div>
      </div>
      <div>
        <TableDemo />
      </div>
    </div>
  );
}

export default App;
