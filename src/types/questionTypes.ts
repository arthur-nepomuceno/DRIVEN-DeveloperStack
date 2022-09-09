import { Questions } from "@prisma/client";

type IQuestionData = Omit<Questions, 'id'>;

export {
    IQuestionData
}