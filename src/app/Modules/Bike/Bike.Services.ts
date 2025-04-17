import { StatusCodes } from "http-status-codes";
import { CustomError } from "../../Error/CustomError";
import { prisma } from "../../Shared/Prisma";
import { TCreateBike } from "./Bike.interface";
const CreateBikeInDB = async (payload: TCreateBike) => {
  console.log(payload);
  // Checking is customer exists or not
  const isCustomerExists = await prisma.customer.findUnique({
    where: {
      customerId: payload.customerId,
    },
  });
  console.log(isCustomerExists);

  if (!isCustomerExists) {
    throw new CustomError(StatusCodes.BAD_REQUEST, "Customer not found");
  }
  const result = await prisma.bike.create({
    data: {
      brand: payload.brand,
      model: payload.model,
      year: payload.year,
      customer: {
        connect: {
          customerId: payload.customerId,
        },
      },
    },
  });
  console.log(result);
  return result;
};

const GetAllBikesFromDB = async () => {
  const result = await prisma.bike.findMany();
  return result;
};
const GetSingleBikeFromDB = async (id: string) => {
  const result = await prisma.bike.findUnique({
    where: {
      bikeId: id,
    },
  });
  return result;
};

export const BikeServices = {
  CreateBikeInDB,
  GetAllBikesFromDB,
  GetSingleBikeFromDB,
};
