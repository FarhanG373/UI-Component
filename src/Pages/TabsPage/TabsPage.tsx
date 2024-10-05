import React from "react";
import TabMenu from "../../components/TabMenu/TabMenu";
import BreadCrumb from '../../components/Breadcrumb/BreadCrumb';
const TabsPage = () => {
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
  return (
    <div>
      <BreadCrumb/>
      <TabMenu
        Label={data.map(({ company }) => [company])}
        Value={data.map(({ name }) => [name])}
      />
    </div>
  );
};

export default TabsPage;
