import { Request, Response } from "express";

export async function register(req: Request, res: Response) {
  return res.send({
    message: 'Olá mundo'
  })
}