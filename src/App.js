import "./App.scss";
import logo from "./logo.svg";
import Card from "./components/Card/Card";
import Flex from "./components/Flex/Flex";
import NavBar from "./components/NavBar/NavBar";
import Wrapper from "./components/Wrapper/Wrapper";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FlexWrap from "./components/FlexWrap/FlexWrap";
import TabelPage from "./Pages/TableWithCol/TabelPage";
import OldTable from "./Pages/TableWithoutCol/OldTable";
import Banner from "./Pages/Banner/Banner";
import ModalPage from "./Pages/ModalPage/ModalPage";
import ListPage from "./Pages/ListPage/ListPage";
import DropDownPage from "./Pages/DropDownPage/DropDownPage";
import ComboBox from "./Pages/ComboBox/ComboBox";
import FormElement from "./Pages/FormElement/FormElement";
import DragDropPage from "./Pages/DragDropPage/DragDropPage";
import TabsPage from "./Pages/TabsPage/TabsPage";
import AccordianPage from "./Pages/AccordianPage/AccordianPage";
import PaginationPage from "./Pages/PaginationPage/PaginationPage";
import ToolTipPage from "./Pages/ToolTipPage/ToolTipPage";
import ButtonPage from "./Pages/ButtonPage/ButtonPage";
import Dropdown from "./components/Dropdown/Dropdown";
import ImageSlider from "./Pages/ImageSlider/ImageSlider";
import RangeSlide from "./Pages/RangeSlide/RangeSlide";
import Progress from "./Pages/Progress/Progress";
import Search from "./components/Search/Search";
import BreadCrumb from "./Pages/Breadcrumb/breadcrumb";
import DatePicker from "./Pages/DatePicker/DatePicker";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar Logo={logo} navBarColor="dark">
          <Dropdown
            dropdownBtnName={`Open Component List`}
            fieldClass={`customClass`}
            mainClass={`mainClass`}
          >
            <ul>
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <Link to={`/tableData`}>Table with Colum setting</Link>
              </li>
              <li>
                <Link to={`/oldtableData`}>Table without Colum setting</Link>
              </li>
              <li>
                <Link to={`/banner`}>Banner</Link>
              </li>
              <li>
                <Link to={`/ModalPage`}>Modal</Link>
              </li>
              <li>
                <Link to={`/list`}>List</Link>
              </li>
              <li>
                <Link to={`/Drop`}>DropDown</Link>
              </li>
              <li>
                <Link to={`/combo`}>ComboBox</Link>
              </li>
              <li>
                <Link to={`/form`}>form Element</Link>
              </li>
              <li>
                <Link to={`/dd`}>Drag Drop</Link>
              </li>
              <li>
                <Link to={`/tab`}>Tab</Link>
              </li>
              <li>
                <Link to={`/accordian`}>Accordian</Link>
              </li>
              <li>
                <Link to={`/pagination`}>Pagination</Link>
              </li>
              <li>
                <Link to={`/tooltip`}>ToolTip</Link>
              </li>
              <li>
                <Link to={`/button`}>Button</Link>
              </li>
              <li>
                <Link to={`/imageSlider`}>Image Slider</Link>
              </li>
              <li>
                <Link to={`/rangeSlide`}>Range Slider</Link>
              </li>
              <li>
                <Link to={`/progress`}>Progress Bar</Link>
              </li>
              <li>
                <Link to={`/breadcrumb`}>Breadcrumb</Link>
              </li>
              <li>
                <Link to={`/datePicker`}>Datepicker</Link>
              </li>
            </ul>
          </Dropdown>
        </NavBar>
        <Routes>
          <Route path="/tableData" element={<TabelPage />} />
          <Route path="/oldtableData" element={<OldTable />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/ModalPage" element={<ModalPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/Drop" element={<DropDownPage />} />
          <Route path="/combo" element={<ComboBox />} />
          <Route path="/form" element={<FormElement />} />
          <Route path="/dd" element={<DragDropPage />} />
          <Route path="/tab" element={<TabsPage />} />
          <Route path="/accordian" element={<AccordianPage />} />
          <Route path="/pagination" element={<PaginationPage />} />
          <Route path="/tooltip" element={<ToolTipPage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/imageSlider" element={<ImageSlider />} />
          <Route path="/rangeSlide" element={<RangeSlide />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/breadcrumb" element={<BreadCrumb />} />
          <Route path="/datePicker" element={<DatePicker/>} />
        </Routes>

        <Wrapper wrapClass="fixWrap">
          
          <Search
            searchClick={() => alert("search")}
            searchId={`id`}
            searchLabelText="Search"
          ></Search>
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
            </Flex>
          </FlexWrap>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
