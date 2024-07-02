-- CreateTable
CREATE TABLE "ObjetoNaveReparado" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "objeto" TEXT NOT NULL,
    "planeta" TEXT NOT NULL,
    "esRespuestaCorrecta" BOOLEAN,
    "usuarioId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "ObjetoNaveReparado_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ObjetoNaveReparado" ADD CONSTRAINT "ObjetoNaveReparado_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
