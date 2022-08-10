import React from "react";

export type Route = {
  name: string | null;
  path: string;
  exact: boolean;
  element: ReturnType<typeof elementFrom>;
};

const routes: Route[] = [
  {
    name: "Index",
    path: "/", // is equal to path "/month"
    exact: true,
    element: elementFrom(""),
  },
  {
    name: "Year",
    path: "/year",
    exact: true,
    element: elementFrom(""),
  },
  {
    name: "Month",
    path: "/month",
    exact: true,
    element: elementFrom(""),
  },
  {
    name: "Week",
    path: "/week",
    exact: true,
    element: elementFrom(""),
  },
  {
    name: "Day",
    path: "/day",
    exact: true,
    element: elementFrom(""),
  },
  {
    name: "Error",
    path: "*",
    exact: true,
    element: elementFrom(""),
  },
];

export default routes;

function elementFrom(url: string) {
  return React.lazy(() => import(url));
}
