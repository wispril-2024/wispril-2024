ALTER TABLE "taFair" RENAME COLUMN "content" TO "abstract";--> statement-breakpoint
ALTER TABLE "taFair" ADD COLUMN "story" text NOT NULL;