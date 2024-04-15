import random

uuids = [
    "c0aeedad-4963-448a-8142-f8b72646f2ba",
    "1bed95b3-ddd6-4520-93ba-ab197ed2f0ff",
    "78d9f2e8-8321-464d-ab44-6de12574ccb3",
    "133c3b2b-e0f4-4b50-8b3e-1028b680320a",
    "23932f0c-81a9-4bc2-84bd-8eccbd77627f",
    "fce30a30-2750-411f-bf91-5e0fd15dcbb9",
    "51e0a468-001d-4bd9-a8b1-509fe0ccde0c",
    "d27c86c0-83af-4605-bcae-a4126bbb1d34",
    "364e650a-bfdb-4c00-81d6-c99e0cdcf415",
    "b38deebf-364c-4f6d-8fc7-92343625c049",
    "9114cea7-fbbc-4172-9e1e-b08c168f7f40",
    "015dd7a9-1647-4c6e-9f7a-01d16a37cdba",
    "aec6c02e-4a68-4a19-8570-53b0df5269a9",
    "c5e681e6-9daa-4ae1-9f40-f6877cc2d848",
    "351464eb-77b8-46b4-b7a4-7d7a396142ad",
    "ad2c5e9d-4947-41ef-8d8a-9139117432a5",
    "2bd7ea9c-8a15-48ad-8f56-ebcee03d69e6",
    "9cbf2918-4f12-4938-b931-1100483f5516",
    "281030d5-4409-4fa1-800f-4cddf7eb6d40",
    "b07ad130-8a81-49eb-86bb-1fecd80d75d7",
    "21676cd7-79cf-46eb-a1de-55c0dd4109be",
    "69415851-4731-48ec-9141-7b8ce6c39e6a",
    "9055985c-bb44-4009-b556-4b99136e63bb",
    "f2c0849f-4b60-425c-9921-ed3b5f563c36",
    "4860e8b7-de98-485d-9ea7-1214e34c1b50",
    "6e56f581-7185-47fc-80e3-36c4981a18c9",
    "f520099a-eeca-44aa-b74b-490b07f50d2d",
    "941638ba-90e5-4615-accf-10b4a602da4f",
    "5732cb61-7730-4d90-9176-dab5a1919345",
    "e96833d0-fd02-460d-8546-1ac2e8d34a5f",
    "5a64d8fb-9643-4249-9313-1dbcb894e8ab",
    "3a0b6192-5426-4268-9895-e2ef9983ca47",
    "fa63a6b5-e5b0-4c73-9a25-c70a2fcfcf32",
    "fb9215b7-ca7f-487d-9bd2-dcdaead329fe",
    "f160b9cb-fb93-4d14-9c36-67863fdc7f48",
    "4e49b197-afd6-4824-8c07-60dca74f8de1",
    "af5c6f48-4cb7-4dd1-a1c5-261fc476c659",
    "1111bea8-2c9a-4579-bc33-f986105e6720",
    "41d00062-0a27-491b-8624-3735cf118ced",
    "016f430a-d134-48ad-82e1-eb203a3ac828",
    "f7a266cc-5ae6-47b7-a763-4d31d37e04f0",
    "4993edad-d658-40a6-a599-2fb5fd822133",
    "7e2e038e-038a-40a2-aeaa-0fbf2e535c50",
    "3a293d22-880a-4911-b04f-25f1edbf5717",
    "193f979e-220c-45c8-becb-f6899c7ab904",
    "56d575a0-fc4a-4341-b461-f05f50be6646",
    "96305ff9-5318-43dd-90b1-31206e85e048",
    "a8ce547c-5edf-4b2d-8ae6-b8181bc5f21f",
    "bb90daed-3d62-475b-8d95-e9be96bfde21",
    "c9342ae0-278b-4da7-b8e5-8aafc5f0427c",
    "f72a6b7a-65d1-401c-9b32-802943a217dd",
    "3ea1dbd4-8f2f-4d9a-88e0-eb4a5958c96a",
    "28ed2e87-c218-459c-8514-6783fa3b6f69",
    "676f163f-fb2c-4d15-a89d-f3b45f0971ae",
    "89f599d2-1d68-4868-8d7b-7a22fe49699a",
    "3f027344-ded7-4bae-bc4d-641549f6194c",
    "60e49c6f-f655-4052-bffd-e1a5f4170a65",
    "2f504075-6d3b-45a3-9a58-0e20491c2f34",
    "4d31d67c-42bf-47ac-b80e-9fe17a5cb489",
    "5bbac668-6047-4d90-8e9e-f49e874c84c4",
    "e8c1ca21-fe55-46df-afe3-4637d851bf16",
    "aa7d9612-30d2-4fa1-a71b-2230b9e34b03",
    "6b0d5aee-ac2e-4749-9267-9c9ca0fc44b5",
    "4b798799-2702-4267-9d96-ae75c19e81aa",
    "79ce38b7-79a8-4e76-a2ca-ecce11d565a9",
    "c6ac0b9e-d027-41e1-a6f4-bcf36825bf40",
    "5663f031-d6ac-415f-a9a5-e9a45ae95127",
    "0c224a18-3e60-4de9-89ae-bcc7c7c20cd6",
    "cd88c5d3-49ae-40af-a5fe-ea09c97e3c62",
    "4194156e-4ecc-4aa9-8d06-b1911f849ce6",
    "bfa04f6a-559a-4949-b2b5-3e64afdff867",
    "a5591f5b-f921-460b-a531-a720c88cb84a",
    "7d092ca5-61ca-4110-9113-4e5d895fc1f7",
    "fa332668-a748-4324-8340-42d70b289e78",
    "97b527e9-37a9-4372-aee6-90c74094e1bd",
    "32fc7ea2-617c-4f7e-aabe-bf6b9ff45d16",
    "40b8f3e6-c517-4ac9-b40d-610dbd79450c",
    "b9257f87-3d26-4485-80d0-8ea2bdddd825",
    "771bcbb8-5906-4be4-a505-2e5141a9aa18",
    "62c9bab3-1bb4-4d78-8eb7-04433656daa6",
    "ada9b46a-b4a2-47e3-863d-51d66172b56f",
    "425237b7-ae14-4f26-a9a9-2a86c802e44b",
    "e966b605-8f78-413c-b7b4-6915018683d4",
    "3b3885f2-8f58-47ba-a4df-49dca79793a2",
    "3ab566df-ddc3-4523-8699-87281689bd6e",
    "fedb1763-93b6-4da3-aaae-fb8e6d7326bc",
    "898a0603-0fb5-4763-9213-7b912639f4c0",
    "c8581f76-5b7f-471b-9ef6-95757e3117f6",
    "85ad902e-86a7-47f2-8b7d-559d8a377ba6",
    "7a891b6b-e730-48cd-9116-cea8f6f8c51b",
    "bd37345a-bb49-4d4f-871a-524dc0831e6e",
    "07172725-c7aa-445a-a918-00f4a921107f",
    "207fef6a-6b0a-4afa-9664-d8bf73fb4263",
    "b0f92579-e917-4763-a743-6314d3a79977",
    "df5cf74d-6441-41b2-aa7d-568f0b6d8538",
    "81db6a7c-8914-4a02-b320-b15b08970d68",
    "7c5953a1-6071-451d-ab64-f7f1dcb2c35a",
    "9fdc7f3a-3221-4712-ab3e-1c7909175f52",
    "8a694633-2ae5-4e37-b7c6-2e2d5c1eacdb",
    "87463ce2-675d-4337-95fb-ff82f574c7bc",
]

titles = [
    "The Great Gatsby tugas akhir capek bgt final",
    "To Kill a Mockingbird tugas akhir hehehe",
    "Ini adalah judul tugas akhir lumayan panjang juga ya wkwkwkwk ",
    "Pride and Prejudice tugas akhir lorem ipsum dolar sit amet",
    "The Catcher in the Rye The Catcher in the Rye The Catcher in the Rye The Catcher in the Rye",
    "The Hobbit The Catcher in the Rye The Catcher in the Rye The Catcher in the Rye",
    "Fahrenheit 451 Dune Lisan Al Ghaib The Catcher in the Rye Fahrenheit 451 Dune Lisan Al Ghaib The Catcher in the Rye",
    "Lord of the Flies Fahrenheit 451 Dune Lisan Al Ghaib The Catcher in the Rye",
    "The Grapes of Wrath Fahrenheit 451 Dune Lisan Al Ghaib The Catcher in the Rye",
]

story = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ",
    "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
]

abstract = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ",
    "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
]

likes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

links = [
    "NULL",
    "https://www.google.com",
    "https://www.youtube.com",
    "https://www.facebook.com",
    "https://www.instagram.com",
    "https://www.twitter.com",
    "https://www.linkedin.com",
    "https://www.github.com",
    "https://www.medium.com",
    "https://www.reddit.com",
]

data = []
for id in uuids:
    final_link = (
        "NULL" if random.choice(links) == "NULL" else f"'{random.choice(links)}'"
    )
    data.append(
        f"(DEFAULT, '{id}', '{random.choice(titles)}', '{random.choice(story)}', '{random.choice(abstract)}', {random.choice(likes)}, {final_link})"
    )

# Write to file "user.txt"
with open("db/seed/ta-fair.txt", "w") as f:
    for i in range(0, len(data)):
        f.write(data[i])
        if i != 99:
            f.write(",\n")
        else:
            f.write(";\n")
