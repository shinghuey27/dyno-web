import CustomDesign from "./Screen/CustomDesign";
import DefaultDesign from "./Screen/DefaultDesign";


function App() {
  return (
   <div style={{display:"flex",flexWrap:"wrap"}}>
   <DefaultDesign />
   <CustomDesign />
   </div>
  );
}

export default App;
