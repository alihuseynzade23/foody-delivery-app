import { z } from 'zod';

const genValidYears = (yrs: number) => {
  const min = new Date().getFullYear();
  const max = min + yrs;
  const years: z.ZodLiteral<string>[] = [];

  for (let i = min; i <= max; i++) {
    years.push(z.literal(String(i)));
  }
  return years;
};

export const updateStudentInformationSchema = z
  .object({
    school: z.string().min(1),
    schoolType: z.union([z.literal('grammarSchool'), z.literal('vocationalSchool')]),
    currentGrade: z.union([z.literal('10'), z.literal('11'), z.literal('12')]),
    graduationYear: z.union(genValidYears(5) as any),
    isEnMentorNeeded: z.boolean(),
  })
  .required();
