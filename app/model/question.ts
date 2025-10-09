import { IAnswer } from "./answer";

export interface IQuestion {
  id: number;
  text: string | null;
  // mediaUrl: string | null;
  categoryId: number | null;
  answers: IAnswer[];
}
