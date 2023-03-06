import {Subtask} from "./Subtask.model";

export class Task{
  public title!: string;
  public description!: string;
  public status!: string;
  public subtasks!: Subtask[];
}
