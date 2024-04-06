ALTER TABLE "menfess" DROP CONSTRAINT "menfess_userId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "taFair" DROP CONSTRAINT "taFair_userId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "menfess" DROP COLUMN IF EXISTS "userId";--> statement-breakpoint
ALTER TABLE "taFair" DROP COLUMN IF EXISTS "userId";