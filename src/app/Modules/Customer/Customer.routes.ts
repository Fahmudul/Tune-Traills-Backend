import { Router } from "express";
import { CustomersControllers } from "./Customer.Controllers";

const router = Router();

// Create new Customer
router.post("/", CustomersControllers.CreateNewCustomer);
router.get("/", CustomersControllers.GetAllCustomers);
router.get("/:id", CustomersControllers.GetSingleCustomer);
router.put("/:id", CustomersControllers.UpdateCustomerInfo);
router.delete("/:id", CustomersControllers.DeleteCustomerInfo);

export const CustomerRoutes = router;
