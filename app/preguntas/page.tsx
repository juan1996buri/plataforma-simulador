import { findAllQuestions } from "../db/question";
import { QuestionsContent } from "./components/questions-content";

export default async function PreguntasPage() {
  const questions = await findAllQuestions(2);
  return <QuestionsContent questions={questions} />;
}
