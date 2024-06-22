import "./App.scss";
import logo from "./logo.svg";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import Flex from "./components/Flex/Flex";
import Label from "./components/Label/Label";
import NavBar from "./components/NavBar/NavBar";
import TextField from "./components/TextField/TextField";
import Wrapper from "./components/Wrapper/Wrapper";
import { BrowserRouter as Router } from "react-router-dom";
import Select from "./components/Select/Select";
import SelectOptions from "./components/Select/SelectOptions";
import Dropdown from "./components/Dropdown/Dropdown";
import List from "./components/List/List";
import ListItem from "./components/List/ListItem";
import FlexWrap from "./components/FlexWrap/FlexWrap";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import DragDrop from "./components/DragDrop/DragDrop";
import TabMenu from "./components/TabMenu/TabMenu";
import Table from "./components/Table/Table";
import Accordian from "./components/Accordian/Accordian";
import Pagination from "./components/Pagination/Pagination";
import { useEffect, useState } from "react";
import ToolTip from "./components/ToolTip/ToolTip";
function App() {
  const [dataContent, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const dataAPI = async () => {
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((dataContent) => {
        setLoading(true);
        if (dataContent) {
          let res = dataContent.map(({ userId, completed, ...item }) => item);
          setData(res);
          console.log(res); // 'dataContent' is defined here
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  useEffect(() => {
    dataAPI();
  }, []);
  const options = [
    { label99: "Fruit", value1: "fruit" },
    { label99: "Vegetable", value1: "vegetable" },
    { label99: "Meat", value1: "meat" },
  ];
  // // console.log(options.indexOf);
  // console.log(options.map(({ label1 }) => ({ label1 })));

  const data = [
    {
      id: 0,
      name: "Nguyen Nichols",
      company: "PETIGEMS",
      active: false,
      country: "Kyrgyzstan",
    },
    {
      id: 1,
      name: "Estela Gomez",
      company: "TRANSLINK",
      active: false,
      country: "Wallis and Futuna Islands",
    },
    {
      id: 2,
      name: "Bridges Doyle",
      company: "METROZ",
      active: false,
      country: "Rwanda",
    },
    {
      id: 3,
      name: "Carver Avery",
      company: "DIGITALUS",
      active: true,
      country: "Vatican City State (Holy See)",
    },
    {
      id: 4,
      name: "Flossie Jacobson",
      company: "AUSTECH",
      active: true,
      country: "Reunion",
    },
    {
      id: 5,
      name: "Pat West",
      company: "BESTO",
      active: false,
      country: "Benin",
    },
    {
      id: 6,
      name: "Kent Mcmahon",
      company: "ESCHOIR",
      active: true,
      country: "Spain",
    },
    {
      id: 7,
      name: "Barnett Stuart",
      company: "OVERPLEX",
      active: false,
      country: "Faroe Islands",
    },
    {
      id: 8,
      name: "Marylou Mayo",
      company: "FILODYNE",
      active: false,
      country: "Croatia (Hrvatska)",
    },
    {
      id: 9,
      name: "Lambert Bond",
      company: "SUREMAX",
      active: false,
      country: "Greece",
    },
  ];
  // console.log(data.length);
  const accordionItems = [
    {
      title1: "Accordion Item #1",
      content: (
        <div>
          <strong>This is the first item's accordion body.</strong> It is hidden
          by default, but shown when title is clicked. It will also be hidden if
          the title is clicked again or when another item is clicked. You can
          pass HTML tags in the content such as <u>underline tag</u>,{" "}
          <i>italic</i>, or even another list like this:
          <ul>
            <li>Bread</li>
            <li>Eggs</li>
            <li>Milk</li>
          </ul>
        </div>
      ),
    },
    {
      title1: "Accordion Item #2",
      content: (
        <div>
          <strong>This is the second item's accordion body.</strong> It is
          hidden by default, but shown when title is clicked. It will also be
          hidden if the title is clicked again or when another item is clicked.
          You can pass HTML tags in the content such as <u>underline tag</u>,{" "}
          <i>italic</i>, or even another list like this:
          <ul>
            <li>Bread</li>
            <li>Eggs</li>
            <li>Milk</li>
          </ul>
        </div>
      ),
    },
    {
      title1: "Accordion Item #3",
      content: (
        <div>
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, but shown when title is clicked. It will also be hidden if
          the title is clicked again or when another item is clicked. You can
          pass HTML tags in the content such as <u>underline tag</u>,{" "}
          <i>italic</i>, or even another list like this:
          <ul>
            <li>Bread</li>
            <li>Eggs</li>
            <li>Milk</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="App">
      <Router>
        <NavBar Logo={logo} navBarColor="dark" />
        <Banner
          bannerImage="https://images.pexels.com/photos/3794748/pexels-photo-3794748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          bannerSize="full"
          bannerOverlay="lightOverlay"
        />
        <Wrapper wrapClass="fluidWrap">
          <Button link={`123`}>123</Button>
          <Modal>xzzd sfsdfgdsfdfg dfg dfg dfg dfgdgf </Modal>
          <FlexWrap FlexWrap="wrap">
            <Flex
              FlexJustify="justify-right"
              FlexAlign="align-flex-start"
              FlexWidth="col-3"
            >
              <Card
                cardHeading="This is full width card heading"
                cardBody="The list-style-type property applies to all lists, and to any element that is set to display: list-item.The color of the list marker will be whatever the computed color of the element is (set via the color property)."
                CardImagePath="https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg"
                CardImageAlt="im"
              />
              <Modal>xzzd sfsdfgdsfdfg dfg dfg dfg dfgdgf 1</Modal>
            </Flex>

            <Flex
              FlexJustify="justify-right"
              FlexAlign="align-flex-end"
              FlexWidth="col-3"
            >
              <Card
                cardHeading="This is full width card heading"
                cardBody="The list-style-type property applies to all lists, and to any element that is set to display: list-item.The color of the list marker will be whatever the computed color of the element is (set via the color property)."
                CardImagePath="https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg"
                CardImageAlt="im"
              />
              <Modal>xzzd sfsdfgdsfdfg dfg dfg dfg dfgdgf 2</Modal>
            </Flex>
            <Flex
              FlexJustify="justify-right"
              FlexAlign="align-flex-end"
              FlexWidth="col-3"
            >
              <Card
                cardHeading="This is full width card heading"
                cardBody="The list-style-type property applies to all lists, and to any element that is set to display: list-item.The color of the list marker will be whatever the computed color of the element is (set via the color property)."
                CardImagePath="https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg"
                CardImageAlt="im"
              />
              <Modal>xzzd sfsdfgdsfdfg dfg dfg dfg dfgdgf 3</Modal>
            </Flex>
            <Flex
              FlexJustify="justify-right"
              FlexAlign="align-flex-end"
              FlexWidth="col-3"
            >
              <Card
                cardHeading="This is full width card heading"
                cardBody="The list-style-type property applies to all lists, and to any element that is set to display: list-item.The color of the list marker will be whatever the computed color of the element is (set via the color property)."
                CardImagePath="https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg"
                CardImageAlt="im"
              />
              <Modal>xzzd sfsdfgdsfdfg dfg dfg dfg dfgdgf 4</Modal>
            </Flex>
            <Flex FlexWidth="full-col">
              <TextField
                Type="textarea"
                PlaceHolder="Type your message"
                LabelName="Text area"
              ></TextField>
            </Flex>
            <Flex FlexWidth="full-col">
              <TextField
                Type="input"
                SubType="time"
                PlaceHolder="Enter the name"
              ></TextField>
            </Flex>
            <Flex FlexWidth="full-col">
              <Label>222</Label>
            </Flex>
            <Flex FlexWidth="full-col">
              <Select>
                {options.map((item) => {
                  return (
                    <SelectOptions
                      optionLabel={item.label}
                      optionValue={item.value}
                    />
                  );
                })}
              </Select>
            </Flex>
            <Flex FlexWidth="full-col">
              <Dropdown dropdownBtnName={"Dropdown"}>
                <List ListStyleType="none" Type="ul">
                  <ListItem>123</ListItem>
                  <ListItem>123</ListItem>
                  <ListItem>123</ListItem>
                  <ListItem>123</ListItem>
                  <ListItem>123</ListItem>
                </List>
              </Dropdown>
            </Flex>
          </FlexWrap>

          <DragDrop
            deleteButtonText={`Delete`}
            initialText={`Drag drop or click`}
            fileSizeErrorMsg={`Fole size should be less then 1 MB`}
            fileFormatErrorMsg={`Please add PDF formate`}
          />
          <TabMenu
            Label={data.map(({ company }) => [company])}
            Value={data.map(({ name }) => [name])}
          />
          {!loading && (
            <Table tableData={dataContent} tableHeader={dataContent} />
          )}
          <Accordian
            title={accordionItems.map(({ title1 }) => [title1])}
            content={accordionItems.map(({ content }) => [content])}
          />
          <Pagination itemPerPageProp={3} totalPagesProp={data.length} />
          <ToolTip tooltipLabel={`tooltip(click me)`} tootTipContent={`ewrewrewr`}></ToolTip>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
