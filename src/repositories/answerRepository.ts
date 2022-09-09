import { prisma } from "../config/database";

async function createAnswer(answeredBy: string, answer: string, id: number){
    return prisma.answers.create({data: {answeredBy, answer, questionId: id}})
}

export {
    createAnswer
}