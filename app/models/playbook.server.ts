import { prisma } from "~/db.server";

export function getNote(id: string) {
  return prisma.playbook.findFirst({
	where: { id }
  });
}

