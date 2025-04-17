import { Router } from "express";
import { CustomerRoutes } from "../Modules/Customer/Customer.routes";
import { BikeRoutes } from "../Modules/Bike/Bike.routes";
import { ServiceRoutes } from "../Modules/BikeServices/BikeService.routes";

const router = Router();

const applicationRoutes = [
  {
    path: "/customers",
    route: CustomerRoutes,
  },
  {
    path: "/bikes",
    route: BikeRoutes,
  },
  {
    path: "/services",
    route: ServiceRoutes,
  },
];

applicationRoutes.forEach((route) => {
  router.use(`/api${route.path}`, route.route);
});

export const AppRoutes = router;
