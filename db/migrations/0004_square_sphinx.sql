ALTER TABLE "user" DROP CONSTRAINT "user_id_unique";--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "id" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "menfess" ADD COLUMN "userID" text;--> statement-breakpoint
ALTER TABLE "taFair" ADD COLUMN "userId" text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "taFair" ADD CONSTRAINT "taFair_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
