import express from "express";
const router = express.Router();
import {
  authUser,
  // getUserProfile,
  // getUsersCount,
  // registerUser,
  // updateProfile,
  // getUsers,
  // deleteUser,
  getUserById,
  // updateUser,
  // updateUserPassword,
  // getUserProfileById,
  authUser2,
  registerUser2,
  // forgottUserPassword,
  // saveUserAddress,
} from "../controllers/userControllers.js";
import { admin, protect } from "../middlewares/authMiddleware.js";

// router.route("/").post(registerUser).get(protect, admin, getUsers);
// router.get("/count", getUsersCount);
router.post("/register", registerUser2);
router.post("/login", authUser);
router.post("/app/login", authUser2);
// router
//   .route("/profile")
//   .get(protect, getUserProfile)
//   .put(protect, updateProfile);
// router.route('/profile/:id').post(getUserProfileById)
// router.route('/save-user-address').put(protect, saveUserAddress)
// router.route('/update/forgot/email').post(forgottUserPassword)
// router.route("/profile/password").put(protect, updateUserPassword);
router.route("/:id").get(protect, getUserById);
//   .delete(protect, admin, deleteUser)

//   .put(protect, admin, updateUser);

export default router;
