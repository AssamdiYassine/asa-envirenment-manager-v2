import React from "react";
import { Route } from "react-router-dom";

// export function ContentRoute({
//   component: Component,
//   layout: Layout,
//   ...rest
// }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => (
//         <Layout>
//           <Component {...props} />
//         </Layout>
//       )}
//     />
//   );
// }

export function ContentRoute({
  component: Component,
  layout: Layout,
  ...props
}) {
  return (
    <Route {...props}>
      {(routeProps) => {
        return (
          <Layout
            routeName={props.routeName}
            bg={props.bg}
            svg={props.svg}
            showLogo={props.showLogo}
            headerTitle={props.headerTitle}
          >
            <Component {...routeProps} />
          </Layout>
        );
      }}
    </Route>
  );
}
  