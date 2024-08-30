import React from 'react'
import Pagination from '../../components/Pagination/Pagination'
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
const PaginationPage = () => {
  return (
    <div>
      <Pagination itemPerPageProp={2} totalPagesProp={data.length} />
    </div>
  )
}

export default PaginationPage