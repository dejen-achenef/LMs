import express from "express";
import { login, register, logout } from "./controllers/authController";
import { getUser, updateUser, deleteUser } from "./controllers/userController";
import { getCourse, createCourse, updateCourse, deleteCourse } from "./controllers/courseController";
import { getEnrollment, createEnrollment, updateEnrollment, deleteEnrollment } from "./controllers/enrollmentController";
import { getPayment, createPayment, updatePayment, deletePayment } from "./controllers/paymentController";
import { getAdmin, createAdmin, updateAdmin, deleteAdmin } from "./controllers/adminController";
import { getReport, createReport, updateReport, deleteReport } from "./controllers/reportController";
import { getNotification, createNotification, updateNotification, deleteNotification } from "./controllers/notificationController";
import { getReview, createReview, updateReview, deleteReview } from "./controllers/reviewController";
import { getFeedback, createFeedback, updateFeedback, deleteFeedback } from "./controllers/feedbackController";
import { getContact, createContact, updateContact, deleteContact } from "./controllers/contactController";

const router = express.Router();

router.get("/users", getUsers);

export default router;