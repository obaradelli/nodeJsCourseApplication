import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ description, name }: ICreateSpecificationDTO);
  findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
