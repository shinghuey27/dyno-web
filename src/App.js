import Searchbar from "./Components/Searchbar/Searchbar";
import CustomDesign from "./Screen/CustomDesign";
import DefaultDesign from "./Screen/DefaultDesign";
import Button from './Components/Button/Button'
import { Textbox } from "./Components";
import { error } from "./SampleData/SampleErrorForm";
import { sampleItem_Props_ForSelect } from "./SampleData/SamplePropsIntegration";

function App(props) {
  return (
    <div style={{ display: "flex" }}>
      {/* <DefaultDesign />     
      <CustomDesign /> */}
      <div>

        {/* <Textbox
          item={{label:'asd'}}
        /> */}
        <Searchbar
          label
          text
          // label={{ label: "Search" }}
          description={{
            label: "this is search bar"
          }}
          // data={optionsSample}
          data={sampleItem_Props_ForSelect['options']}
          text={{
            style: {
              border: "1px solid #ddd",
              borderRadius: "4px",
              height: 40,
              width: 278,
              margin: 0,
              fontSize: "14px",
              fontWeight: 400,
              fontFamily: "Lato",
              boxSizing: "border-box"
            }
          }}
          listBox={{
            style: {
              backgroundColor: "#44444F",
              margin: 0,
              zIndex: 200,
              position: "absolute",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              borderRadius: 8,
              boxShadow: "0.5px 1px 1px 1px rgba(0, 0, 0, 0.05)",
              padding: 10,
              width: 260,
              top: -40,
              overflow: "scroll",
              height: 50,
              overflowX: "hidden"
            },
            className: "listBox"
          }}
          listItem={{
            style: {
              backgroundColor: "#44444F"
            },
            className: "itemList"
          }}
          // listboxStyle={{
          //   position: "relative",
          //   top: 20,
          // }}
          // icon={{ style: { marginTop: 30 } }}
          onChange={(el)=>{console.log('check',el)}}
        />

        <Button style={{ marginTop: 40 }} label='Pay Now' managedCallback={() => { console.log('button click') }} />

      </div>
    </div>
  );
}

export default App;
