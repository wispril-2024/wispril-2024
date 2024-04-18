DO $$ BEGIN
 CREATE TYPE "fakultas" AS ENUM('FITB', 'FMIPA', 'FSRD', 'FTI', 'FTMD', 'FTTM', 'FTSL', 'SAPPK', 'SBM', 'SF', 'SITH', 'STEI');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "jurusan" AS ENUM('Meteorologi', 'Oseanografi', 'Teknik Geodesi dan Geomatika', 'Teknik Geologi', 'Aktuaria', 'Astronomi', 'Fisika', 'Kimia', 'Matematika', 'Desain Interior', 'Desain Komunikasi Visual', 'Desain Produk', 'Kriya', 'Seni Rupa', 'Teknik Dirgantara', 'Teknik Material', 'Teknik Mesin', 'Teknik Geofisika', 'Teknik Metalurgi', 'Teknik Perminyakan', 'Teknik Pertambangan', 'Rekayasa Infrastruktur Lingkungan', 'Teknik dan Pengelolaan Sumber Daya Air', 'Teknik Kelautan', 'Teknik Lingkungan', 'Teknik Sipil', 'Manajemen Rekayasa Industri', 'Teknik Bioenergi dan Kemurgi', 'Teknik Fisika', 'Teknik Industri', 'Teknik Kimia', 'Teknik Pangan', 'Arsitektur', 'Perencanaan Wilayah dan Kota', 'Kewirausahaan', 'Manajemen', 'Farmasi Klinik dan Komunitas', 'Sains dan Teknologi Farmasi', 'Biologi', 'Mikrobiologi', 'Rekayasa Hayati', 'Rekayasa Pertanian', 'Rekayasa Kehutanan', 'Teknologi Pascapanen', 'Sistem dan Teknologi Informasi', 'Teknik Biomedis', 'Teknik Elektro', 'Informatika', 'Teknik Telekomunikasi', 'Teknik Tenaga Listrik');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "menfess" RENAME COLUMN "userID" TO "userId";--> statement-breakpoint
ALTER TABLE "taFair" ALTER COLUMN "content" SET DATA TYPE json;--> statement-breakpoint
ALTER TABLE "taFair" ALTER COLUMN "content" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "taFair" ADD COLUMN "title" text;--> statement-breakpoint
ALTER TABLE "taFair" ADD COLUMN "link" json;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "password" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "NIM" numeric;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "jurusan" "jurusan";--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "fakultas" "fakultas";