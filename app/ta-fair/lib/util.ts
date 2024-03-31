import { programs, faculties } from "./data";
import { TA } from "./model";
import { randomUUID } from "crypto";

export const generateTA = () =>
  new Array(20).fill(null).map((_, i) => {
    const facultyIdx = Math.floor(Math.random() * (faculties.length - 1));
    const programIdx = Math.floor(
      Math.random() * (programs[faculties[facultyIdx]].length - 1)
    );
    const res: TA = {
      id: Math.floor(Math.random() * 100000).toString(),
      name: `Data-${i}`,
      nim: "66666666",
      faculty: faculties[facultyIdx],
      program: programs[faculties[facultyIdx]][programIdx],
      title: `TA-${i}`,
      background:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      abstract:
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    };
    return res;
  });
