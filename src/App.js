import React from 'react';
import './App.css'
import { ButtonMolecule } from '../src/Headless/components/buttonMolecule/ButtonMolecule'
import { Button } from '../src/Headless/components/button/button'
import { BeakerIcon, AcademicCapIcon } from '@heroicons/react/solid'

function App(props) {

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div style={{ margin: 100 }}></div>
      <ButtonMolecule >
        <ButtonMolecule.Label >Click Here</ButtonMolecule.Label>
        <ButtonMolecule.Icon ><AcademicCapIcon /></ButtonMolecule.Icon>
      </ButtonMolecule>
      <div style={{ margin: 100 }}></div>
      <ButtonMolecule style={{ display: 'inline-flex', flexDirection: 'row-reverse' }} >
        <ButtonMolecule.Label style={{ flex: 1 }}>Click Here</ButtonMolecule.Label>
        <ButtonMolecule.Icon style={{ flex: 1 }}><AcademicCapIcon /></ButtonMolecule.Icon>
      </ButtonMolecule>

      <div style={{ margin: 100 }}></div>

      <ButtonMolecule style={{ display: 'inline-flex' }} >
        <ButtonMolecule.Label style={{ flex: 1 }}>Click Here</ButtonMolecule.Label>
        <ButtonMolecule.Icon style={{ flex: 1 }}><AcademicCapIcon /></ButtonMolecule.Icon>
      </ButtonMolecule>

      <div style={{ margin: 100 }}></div>

      <ButtonMolecule >
        Click Here
        <AcademicCapIcon />
      </ButtonMolecule>




      <div style={{ margin: 100 }}></div>

      <Button
        style={{ display: 'inline-flex' }}
      >
        this is button {<BeakerIcon />}
      </Button>

      {/* <div style={{ margin: 100 , height:400, width:100, backgroundColor:'black'}}></div> */}
    </div>
  );
}




export default App;
