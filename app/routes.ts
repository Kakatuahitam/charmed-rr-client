import { type RouteConfig, index } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

// export default [
//   index('/routes/home.tsx'),
//   route('/about','/routes/about.tsx')
// ] satisfies RouteConfig;

export default flatRoutes({
  rootDirectory: "routes",
}) satisfies RouteConfig;
