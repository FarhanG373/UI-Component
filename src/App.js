import './App.scss';
import logo from './logo.svg'
import Banner from './components/Banner/Banner';
import Card from './components/Card/Card';
import Flex from './components/Flex/Flex';
import Label from './components/Label/Label';
import NavBar from './components/NavBar/NavBar';
import TextField from './components/TextField/TextField';
import Wrapper from './components/Wrapper/Wrapper';
import { BrowserRouter as Router } from "react-router-dom";
import Select from './components/Select/Select';
import SelectOptions from './components/Select/SelectOptions';
import Dropdown from './components/Dropdown/Dropdown';
import List from './components/List/List';
import ListItem from './components/List/ListItem';
import FlexWrap from './components/FlexWrap/FlexWrap';
import Image from './components/Image/Image';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

function App() {
  const options = [
    { label: 'Fruit', value: 'fruit' },
    { label: 'Vegetable', value: 'vegetable' },
    { label: 'Meat', value: 'meat' },
  ];
  return (
    <div className="App">
      
      <Router>
        <NavBar Logo={logo} navBarColor="dark"/>
        <Banner bannerImage="https://images.pexels.com/photos/3794748/pexels-photo-3794748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" bannerSize="full" bannerOverlay="lightOverlay" />
        <Wrapper wrapClass="fluidWrap">
          <Button link={`123`}>123</Button>
          <Modal>xzzd sfsdfgdsfdfg dfg dfg dfg dfgdgf </Modal>
        <FlexWrap FlexWrap='wrap'>
          <Flex FlexJustify="justify-right" FlexAlign="align-flex-start" FlexWidth="col-3" >
            <Card
              cardHeading="This is full width card heading"
              cardBody="The list-style-type property applies to all lists, and to any element that is set to display: list-item.The color of the list marker will be whatever the computed color of the element is (set via the color property)."
              CardImagePath="https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg" CardImageAlt="im" />
              <Modal>xzzd sfsdfgdsfdfg dfg dfg dfg dfgdgf 1</Modal>
          </Flex>

          <Flex FlexJustify="justify-right" FlexAlign="align-flex-end" FlexWidth="col-3">

            <Card
              cardHeading="This is full width card heading"
              cardBody="The list-style-type property applies to all lists, and to any element that is set to display: list-item.The color of the list marker will be whatever the computed color of the element is (set via the color property)."
              CardImagePath="https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg" CardImageAlt="im" />
              <Modal>xzzd sfsdfgdsfdfg dfg dfg dfg dfgdgf 2</Modal>
          </Flex>
          <Flex FlexJustify="justify-right" FlexAlign="align-flex-end" FlexWidth="col-3">

            <Card
              cardHeading="This is full width card heading"
              cardBody="The list-style-type property applies to all lists, and to any element that is set to display: list-item.The color of the list marker will be whatever the computed color of the element is (set via the color property)."
              CardImagePath="https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg" CardImageAlt="im" />
              <Modal>xzzd sfsdfgdsfdfg dfg dfg dfg dfgdgf 3</Modal>
          </Flex>
          <Flex FlexJustify="justify-right" FlexAlign="align-flex-end" FlexWidth="col-3">

            <Card
              cardHeading="This is full width card heading"
              cardBody="The list-style-type property applies to all lists, and to any element that is set to display: list-item.The color of the list marker will be whatever the computed color of the element is (set via the color property)."
              CardImagePath="https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg" CardImageAlt="im" />
              <Modal>xzzd sfsdfgdsfdfg dfg dfg dfg dfgdgf 4</Modal>
          </Flex>
          <Flex FlexWidth="full-col">
            <TextField Type="textarea" PlaceHolder="Type your message" LabelName='Text area'></TextField>
          </Flex>
          <Flex FlexWidth="full-col">
            <TextField Type="input" SubType='time' PlaceHolder="Enter the name"></TextField>
          </Flex>
          <Flex FlexWidth="full-col">
            <Label>222</Label>
          </Flex>
          <Flex FlexWidth="full-col">

            <Select>
              {
                options.map((item) => {
                  return (
                    <SelectOptions optionLabel={item.label} optionValue={item.value} />
                  )
                })
              }
            </Select>
          </Flex>
          <Flex FlexWidth="full-col">
            <Dropdown dropdownBtnName={'Dropdown'}>
              <List ListStyleType='none' Type='ul'> 
                <ListItem>123</ListItem>
                <ListItem>123</ListItem>
                <ListItem>123</ListItem>
                <ListItem>123</ListItem>
                <ListItem>123</ListItem>
              </List>
            </Dropdown>
          </Flex>
          </FlexWrap>
        </Wrapper></Router>
    </div>
  );
}

export default App;
