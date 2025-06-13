"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { submitQuizAnswers } from "@/services/quiz-service";
import CardJawaban from "./card-jawaban";
import CardSoal from "./card-soal";

interface QuizClientProps {
  quiz: {
    id: string;
    title: string;
    questions: {
      id: string;
      question: string;
      options: string[];
    }[];
  };
  token: string;
  quizId: string;
}

const QuizClient: React.FC<QuizClientProps> = ({ quiz, token, quizId }) => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<{ [questionId: string]: string }>({});
  const router = useRouter();

  const handleAnswer = (questionId: string, selectedOption: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: selectedOption }));
  };

  const handleNext = async () => {
    if (current < quiz.questions.length - 1) {
      setCurrent(current + 1);
    } else {
      const answerArr = quiz.questions.map((q) => ({
        questionId: q.id,
        selectedOption: answers[q.id] || "",
      }));
      // POST submit ke API lewat service, mirip admin
      await submitQuizAnswers(token, quizId, { answers: answerArr });
      router.push(`/belajar/${quizId}/hasil`);
    }
  };

  return (
    <div className="bg-[#FFE6F7] min-h-screen flex items-center justify-center">
      <div className="items-center ">
        <CardSoal quiz={quiz} current={current} />
        <CardJawaban
          quiz={quiz}
          current={current}
          onAnswer={handleAnswer}
          onFinish={handleNext}
          answers={answers}
        />
      </div>
    </div>
  );
};





export default QuizClient;

