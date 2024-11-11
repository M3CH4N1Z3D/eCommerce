import { Request, Response } from "express";
import { getAllCategoriesService } from "../services/category.service";

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await getAllCategoriesService();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving categories" });
  }
};