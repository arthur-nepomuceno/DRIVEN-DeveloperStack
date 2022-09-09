import * as questionService from '../services/questionService';
import * as answerRepository from '../repositories/answerRepository';

async function createAnswer(answeredBy: string, answer: string, id: number){
    
    const check = await questionService.checkQuestionId(id);
    if(!check) throw {type: 'not_found'}
    
    return await answerRepository.createAnswer(answeredBy, answer, id)
}

export {
    createAnswer
}