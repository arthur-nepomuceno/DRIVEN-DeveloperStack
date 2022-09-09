import { Answers } from "@prisma/client";

type AnswersData = Omit<Answers, 'id'>

export {
    AnswersData
}