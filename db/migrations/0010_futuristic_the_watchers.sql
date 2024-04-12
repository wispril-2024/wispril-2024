DO $$ BEGIN
 CREATE TYPE "faculty" AS ENUM('FITB', 'FMIPA', 'FSRD', 'FTI', 'FTMD', 'FTTM', 'FTSL', 'SAPPK', 'SBM', 'SF', 'SITH', 'STEI');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "major" AS ENUM('Meteorologi', 'Oseanografi', 'Teknik Geodesi dan Geomatika', 'Teknik Geologi', 'Aktuaria', 'Astronomi', 'Fisika', 'Kimia', 'Matematika', 'Desain Interior', 'Desain Komunikasi Visual', 'Desain Produk', 'Kriya', 'Seni Rupa', 'Teknik Dirgantara', 'Teknik Material', 'Teknik Mesin', 'Teknik Geofisika', 'Teknik Metalurgi', 'Teknik Perminyakan', 'Teknik Pertambangan', 'Rekayasa Infrastruktur Lingkungan', 'Teknik dan Pengelolaan Sumber Daya Air', 'Teknik Kelautan', 'Teknik Lingkungan', 'Teknik Sipil', 'Manajemen Rekayasa Industri', 'Teknik Bioenergi dan Kemurgi', 'Teknik Fisika', 'Teknik Industri', 'Teknik Kimia', 'Teknik Pangan', 'Arsitektur', 'Perencanaan Wilayah dan Kota', 'Kewirausahaan', 'Manajemen', 'Farmasi Klinik dan Komunitas', 'Sains dan Teknologi Farmasi', 'Biologi', 'Mikrobiologi', 'Rekayasa Hayati', 'Rekayasa Pertanian', 'Rekayasa Kehutanan', 'Teknologi Pascapanen', 'Sistem dan Teknologi Informasi', 'Teknik Biomedis', 'Teknik Elektro', 'Informatika', 'Teknik Telekomunikasi', 'Teknik Tenaga Listrik');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "menfess" RENAME COLUMN "content" TO "message";--> statement-breakpoint
ALTER TABLE "user" RENAME COLUMN "jurusan" TO "major";--> statement-breakpoint
ALTER TABLE "user" RENAME COLUMN "fakultas" TO "faculty";--> statement-breakpoint
ALTER TABLE "menfess" ALTER COLUMN "userId" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "menfess" ALTER COLUMN "message" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "major" SET DATA TYPE major;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "faculty" SET DATA TYPE faculty;--> statement-breakpoint
ALTER TABLE "menfess" ADD COLUMN "from" text;