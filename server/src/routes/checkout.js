// 

//REFRACTORED CODE
import { Router } from "express";
import { asyncHandler } from "#middleware/asyncHandler.js";
import { initiateCheckout } from "#controllers/checkoutController.js";

export const checkoutRouter = Router();

checkoutRouter.post("/", asyncHandler(initiateCheckout));