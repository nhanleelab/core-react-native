import { FormStage } from './../model/index';
import { Forms, Stage } from "../model";

export interface IState{
    stage: Stage,
    forms: FormStage[]
}
export const InitState : IState = {
    stage:Stage.LOGIN,
    forms: Forms
}