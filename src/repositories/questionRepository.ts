import { prisma } from "../config/database";

async function createQuestion(askedBy: string, question:string){
    return await prisma.questions.create({data: {askedBy, question}})
}

async function getQuestionById(id: number) {
    return await prisma.questions.findUnique({where: {id: id}})
}

export {
    createQuestion,
    getQuestionById
}