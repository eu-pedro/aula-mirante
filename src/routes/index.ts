import { Router } from "express";
import { register } from "../http/controllers/books/register";

export const usersRouter = Router()

usersRouter.get('/books', register)
