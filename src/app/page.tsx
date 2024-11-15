import React from "react";
import { MuiTypography } from "./Mui/MuiTypography";
import { MuiButton } from "./Mui/MuiButton";
import MuiTextFiels from "./Mui/MuiTextFiels";
import MuiSelect from "./Mui/MuiSelect";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          

           <MuiTypography/>
           <br />
           <MuiButton/>
           <br /><br />
   <MuiTextFiels/><br /><br />
   <MuiSelect/>
    </div>
  );
}
