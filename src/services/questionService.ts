import * as questionRepository from "../repositories/questionRepository";

function createQuestion(askedBy: string, question:string) {
    return questionRepository.createQuestion(askedBy, question)
}

function getQuestionById(id: number){
    return questionRepository.getQuestionById(id)
}

function checkQuestionId(id: number){
    return questionRepository.getQuestionById(id)
}

export {
    createQuestion,
    getQuestionById,
    checkQuestionId
}