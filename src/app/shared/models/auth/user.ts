import { Permission } from "./permission";
import { BaseModel } from "../base.model";

export class User extends BaseModel {
    password?: string;
    username?: string;
    public permission?: Permission[];
}
