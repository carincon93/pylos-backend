-- CreateTable
CREATE TABLE "FeedbackRespuesta" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "lecturaId" TEXT NOT NULL,
    "preguntaId" TEXT NOT NULL,
    "respuestaId" TEXT NOT NULL,
    "sesion" INTEGER NOT NULL,
    "usuarioId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "FeedbackRespuesta_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FeedbackRespuesta" ADD CONSTRAINT "FeedbackRespuesta_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
