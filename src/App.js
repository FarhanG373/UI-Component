import './App.scss';
import logo from './logo.svg'
import Banner from './components/Banner/Banner';
import Card from './components/Card/Card';
import Flex from './components/Flex/Flex';
import Label from './components/Label/Label';
import NavBar from './components/NavBar/NavBar';
import TextField from './components/TextField/TextField';
import Wrapper from './components/Wrapper/Wrapper';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar Logo={logo} navBarColor="dark" />
        <Banner bannerImage="https://images.pexels.com/photos/3794748/pexels-photo-3794748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" bannerSize="full" bannerOverlay="lightOverlay" />
        <Wrapper wrapClass="fixWrap">
          
            <Flex FlexJustify="justify-right" FlexAlign="align-flex-start" FlexWidth="col-3" >
              <Card
                cardHeading="This is full width card heading"
                cardBody="The list-style-type property applies to all lists, and to any element that is set to display: list-item.The color of the list marker will be whatever the computed color of the element is (set via the color property)."
                CardImagePath="https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg" CardImageAlt="im" />
            </Flex>

            <Flex FlexJustify="justify-right" FlexAlign="align-flex-end" FlexWidth="col-3">

              <Card
                cardHeading="This is full width card heading"
                cardBody="The list-style-type property applies to all lists, and to any element that is set to display: list-item.The color of the list marker will be whatever the computed color of the element is (set via the color property)."
                CardImagePath="https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg" CardImageAlt="im" />
            </Flex>
            <Flex FlexJustify="justify-right" FlexAlign="align-flex-end" FlexWidth="col-3">

              <Card
                cardHeading="This is full width card heading"
                cardBody="The list-style-type property applies to all lists, and to any element that is set to display: list-item.The color of the list marker will be whatever the computed color of the element is (set via the color property)."
                CardImagePath="https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg" CardImageAlt="im" />
            </Flex>
            <Flex FlexJustify="justify-right" FlexAlign="align-flex-end" FlexWidth="col-3">

              <Card
                cardHeading="This is full width card heading"
                cardBody="The list-style-type property applies to all lists, and to any element that is set to display: list-item.The color of the list marker will be whatever the computed color of the element is (set via the color property)."
                CardImagePath="https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg" CardImageAlt="im" />
            </Flex>
          <TextField Type="textarea" PlaceHolder="Type your message" LabelName='Text area'></TextField>
          <TextField Type="input" PlaceHolder="Enter the name"></TextField>
          <Label>222</Label>
        </Wrapper></Router>
    </div>
  );
}

export default App;
