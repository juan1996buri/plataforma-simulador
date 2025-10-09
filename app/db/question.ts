import prisma from "@/lib/prisma";
import { IQuestion } from "../model/question";
export async function findAllQuestions(
  categoryId: number,
): Promise<IQuestion[]> {
  try {
    await prisma.$connect(); // intenta conectar
    console.log("✅ Conexión exitosa a la base de datos");

    const data = await prisma.question.findMany({
      include: { answers: true },
      where: {
        category: {
          id: categoryId,
        },
      },
    });

    return data;
  } catch (error) {
    console.error("❌ Error al conectar con la base de datos:", error);
    return [];
  } finally {
    await prisma.$disconnect(); // desconecta para no dejar conexiones abiertas
  }
}
