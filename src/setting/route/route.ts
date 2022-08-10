import React from "react";

export type Route = {
  path: string;
  exact: boolean;
  name: string | null;
  element: ReturnType<typeof elementFrom>;
};

const routes: Route[] = [
  {
    path: "/", // is equal to path "/month"
    exact: true,
    name: "Index",
    element: elementFrom(""),
  },
  {
    path: "/year",
    exact: true,
    name: "Year",
    element: elementFrom(""),
  },
  {
    path: "/month",
    exact: true,
    name: "Month",
    element: elementFrom(""),
  },
  {
    path: "/week",
    exact: true,
    name: "Week",
    element: elementFrom(""),
  },
  {
    path: "/day",
    exact: true,
    name: "Day",
    element: elementFrom(""),
  },
];

export default routes;

function elementFrom(url: string) {
  return React.lazy(() => import(url));
}
