import * as questionService from '../services/questionService';

async function createAnswer(answeredBy: string, answer: string, id: number){
    const check = await questionService.checkQuestionId(id);

    if(check) throw {type: 'not_found'}
}

export {
    createAnswer
}