import { CategoryRepository } from "../repositories/category.respository";
import { Category } from "../entities/Category";

export const getAllCategoriesService = async (): Promise<Category[]> => {
  return await CategoryRepository.find();
};