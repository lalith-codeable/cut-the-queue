import { isAuthenticatedUser } from "../middlewares/auth";
import express from "express";
import { getAllCanteen, getAllDishes } from "../controllers/canteenController";

const canteenRoutes = express.Router();

canteenRoutes.get(
  "/getAllDishes/:canteenId",
  isAuthenticatedUser,
  getAllDishes
);
canteenRoutes.get("/getAllCanteen", isAuthenticatedUser, getAllCanteen);

export default canteenRoutes;