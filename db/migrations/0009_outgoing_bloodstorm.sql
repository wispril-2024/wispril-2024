ALTER TABLE "taFair" ALTER COLUMN "content" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "taFair" ALTER COLUMN "link" SET DATA TYPE text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "menfess" ADD CONSTRAINT "menfess_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
