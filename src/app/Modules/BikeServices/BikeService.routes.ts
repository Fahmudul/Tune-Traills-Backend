import { Router } from "express";
import { BikesControllers } from "./BikeService.Controllers";

const router = Router();

// Create new Customer
router.post("/", BikesControllers.CreateNewService);
router.get("/", BikesControllers.GetAllServices);
router.get("/status", BikesControllers.GetPendingServices);
router.get("/:id", BikesControllers.GetSingleService);
router.put("/:id/:status", BikesControllers.UpdateServiceRecord);

export const ServiceRoutes = router;
