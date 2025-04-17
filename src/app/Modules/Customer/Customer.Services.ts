import { StatusCodes } from "http-status-codes";
import { CustomError } from "../../Error/CustomError";
import { prisma } from "../../Shared/Prisma";
import { TCreateCustomer } from "./Customer.interface";
const CreateCustomerInDB = async (payload: TCreateCustomer) => {
  console.log(payload);
  const isCustomerAlreadyExists = await prisma.customer.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (isCustomerAlreadyExists) {
    throw new CustomError(StatusCodes.BAD_REQUEST, "Customer already exists");
  }

  const result = await prisma.customer.create({
    data: payload,
  });
  console.log(result);
  return result;
};

const GetAllCustomersFromDB = async () => {
  const result = await prisma.customer.findMany();
  return result;
};
const GetSingleCustomerFromDB = async (id: string) => {
  const result = await prisma.customer.findUnique({
    where: {
      customerId: id,
    },
  });
  return result;
};

const UpdateCustomerFromDB = async (id: string, payload: TCreateCustomer) => {
  const result = await prisma.customer.update({
    where: {
      customerId: id,
    },
    data: payload,
  });
  return result;
};
const DeleteCustomerFromDB = async (id: string) => {
  const result = await prisma.customer.delete({
    where: {
      customerId: id,
    },
  });
  console.log(result);
  return result;
};

export const CustomerServices = {
  CreateCustomerInDB,
  GetAllCustomersFromDB,
  GetSingleCustomerFromDB,
  UpdateCustomerFromDB,
  DeleteCustomerFromDB,
};
