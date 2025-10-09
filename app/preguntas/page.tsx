import { findAllQuestions } from "../db/question";
import { QuestionsContent } from "./components/questions-content";

export default async function PreguntasPage() {
  const questions = await findAllQuestions(1);
  return <QuestionsContent questions={questions} />;
}
