import joi from "joi";
import { CreateThreadDTO } from "../dto/CreateThreadDTO";

export const createThreadSchema = joi.object<CreateThreadDTO>({
    image : joi.string(),
    content : joi.string().min(1)

})