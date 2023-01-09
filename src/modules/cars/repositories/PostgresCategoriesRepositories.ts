import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  IcreateCategoryDTO,
} from "./ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({ description, name }: IcreateCategoryDTO) {
    console.log(name, description);
  }
}

export { PostgresCategoriesRepository };
