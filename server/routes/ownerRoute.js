import express from "express";

import { create, deletOwner, getAllOwners, getOwnerById, update } from "../controller/ownerController.js";

const route = express.Router();

route.post("/owner", create);
route.get("/owners", getAllOwners);
route.get("/owner/:id",getOwnerById);
route.put("/update/owner/:id",update);
route.delete("/delete/owner/:id",deletOwner);

export default route;