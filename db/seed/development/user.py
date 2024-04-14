import random

# Define enums for major and faculty
major_enum = [
    "Meteorologi",
    "Oseanografi",
    "Teknik Geodesi dan Geomatika",
    "Teknik Geologi",
    "Aktuaria",
    "Astronomi",
    "Fisika",
    "Kimia",
    "Matematika",
    "Desain Interior",
    "Desain Komunikasi Visual",
    "Desain Produk",
    "Kriya",
    "Seni Rupa",
    "Teknik Dirgantara",
    "Teknik Material",
    "Teknik Mesin",
    "Teknik Geofisika",
    "Teknik Metalurgi",
    "Teknik Perminyakan",
    "Teknik Pertambangan",
    "Rekayasa Infrastruktur Lingkungan",
    "Teknik dan Pengelolaan Sumber Daya Air",
    "Teknik Kelautan",
    "Teknik Lingkungan",
    "Teknik Sipil",
    "Manajemen Rekayasa Industri",
    "Teknik Bioenergi dan Kemurgi",
    "Teknik Fisika",
    "Teknik Industri",
    "Teknik Kimia",
    "Teknik Pangan",
    "Arsitektur",
    "Perencanaan Wilayah dan Kota",
    "Kewirausahaan",
    "Manajemen",
    "Farmasi Klinik dan Komunitas",
    "Sains dan Teknologi Farmasi",
    "Biologi",
    "Mikrobiologi",
    "Rekayasa Hayati",
    "Rekayasa Pertanian",
    "Rekayasa Kehutanan",
    "Teknologi Pascapanen",
    "Sistem dan Teknologi Informasi",
    "Teknik Biomedis",
    "Teknik Elektro",
    "Informatika",
    "Teknik Telekomunikasi",
    "Teknik Tenaga Listrik",
]

faculty_enum = [
    "FITB",
    "FMIPA",
    "FSRD",
    "FTI",
    "FTMD",
    "FTTM",
    "FTSL",
    "SAPPK",
    "SBM",
    "SF",
    "SITH",
    "STEI",
]

data = []

# hashed of "tes"
hashed = "$2b$10$DA8FcvWlYfPdCa.mVvZEXeJq//19AcPSQsMBHNGafod1EG6/rzKqi"

# Generate 100 data points
for num in range(1, 101):
    # Generate random major and faculty
    major = random.choice(major_enum)
    faculty = random.choice(faculty_enum)
    data.append(
        f"(DEFAULT, 'name{num}', 'user{num}', '{hashed}', {num}, '{major}', '{faculty}')"
    )

# Write to file "user.txt"
with open("db/seed/user.txt", "w") as f:
    for i in range(0, 100):
        f.write(data[i])
        if i != 99:
            f.write(",\n")
        else:
            f.write(";\n")
