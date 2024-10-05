import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./BreadCrumb.scss";
export type seprator = "/" | ">" | "-";
export interface Props {
  custom?: boolean;
  data?: any;
  seprator?: seprator;
  className?: string;
  homeLabel?: string;
  homePath?: string;
}
const BreadCrumb = ({
  seprator = "/",
  className = "",
  homeLabel = "Home",
  homePath = "/",
  custom = false,
  data,
}: Props) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  let breadcrumbPath = "";

  return (
    <>
      {custom ? (
        <nav
          aria-label="breadcrumb"
          className={`breadcrumbs${className ? " " + className : ""}`}
        >
          <ul>
            {data.map((item: any, index: number) => {
              const { label, path } = item;
              const isLast = index === data.length - 1;
              return (
                <>
                  <li
                    key={label}
                    className={`breadcrumb-item${isLast ? " active" : ""}`}
                  >
                    {isLast ? label : <Link to={path}>{label}</Link>}
                  </li>
                  {!isLast && (
                    <li>
                      {" "}
                      <span> {seprator}</span>
                    </li>
                  )}
                </>
              );
            })}
          </ul>
        </nav>
      ) : (
        <nav
          aria-label="breadcrumb"
          className={`breadcrumbs${className ? " " + className : ""}`}
        >
          <ul>
            {pathnames.length > 0 && (
              <>
                <li>
                  <Link to={homePath}>{homeLabel}</Link>
                </li>
                <li>
                  {" "}
                  <span> {seprator}</span>
                </li>
              </>
            )}
            {pathnames.map((name, index) => {
              breadcrumbPath += `/${name}`;
              const isLast = index === pathnames.length - 1;
              return (
                <>
                  <li
                    key={name}
                    className={`breadcrumb-item${isLast ? " active" : ""}`}
                  >
                    {isLast ? name : <Link to={breadcrumbPath}>{name}</Link>}
                  </li>
                  {!isLast && (
                    <li>
                      {" "}
                      <span> {seprator}</span>
                    </li>
                  )}
                </>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
};

export default BreadCrumb;
