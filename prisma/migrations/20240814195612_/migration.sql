-- CreateTable
CREATE TABLE "ChatEmojis" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "emoji" TEXT NOT NULL,
    "usuario1Id" UUID NOT NULL,
    "usuario2Id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "ChatEmojis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CalificacionPylos" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "calificacion" TEXT NOT NULL,
    "usuarioId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "CalificacionPylos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ChatEmojis" ADD CONSTRAINT "ChatEmojis_usuario1Id_fkey" FOREIGN KEY ("usuario1Id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatEmojis" ADD CONSTRAINT "ChatEmojis_usuario2Id_fkey" FOREIGN KEY ("usuario2Id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CalificacionPylos" ADD CONSTRAINT "CalificacionPylos_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
