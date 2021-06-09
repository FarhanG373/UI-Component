import './App.scss';
import Card from './components/Card/Card';
import Flex from './components/Flex/Flex';
import Label from './components/Label/Label';
import Select from './components/Select/Select';
import SelectOption from './components/Select/SelectOption';
import TextField from './components/TextField/TextField';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper wrapClass="fluidWrap">
        <Flex FlexWrap="wrap">
          <Flex FlexJustify="justify-right" FlexAlign="align-flex-start" FlexWidth="col-3" >
            
            <Card cardHeading="This is full width card heading" 
            cardBody="The list-style-type property applies to all lists, and to any element that is set to display: list-item.The color of the list marker will be whatever the computed color of the element is (set via the color property)."
            CardImagePath="https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg" CardImageAlt="im"/>
            </Flex>

            <Flex FlexJustify="justify-right" FlexAlign="align-flex-end" FlexWidth="col-9">
            
            <Card cardHeading="This is full width card heading" 
            cardBody="The list-style-type property applies to all lists, and to any element that is set to display: list-item.The color of the list marker will be whatever the computed color of the element is (set via the color property)."
            CardImagePath="https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg" CardImageAlt="im"/>
            </Flex>
        </Flex>
        <TextField Type="textarea" PlaceHolder="Type your message" LabelName='Text area'></TextField>
        <TextField Type="input" PlaceHolder="Enter the name"></TextField>
        <Label>222</Label>
      </Wrapper>
      <Select>
        <SelectOption>123</SelectOption>
        <SelectOption>456</SelectOption>
      </Select>
    </div>
  );
}

export default App;
