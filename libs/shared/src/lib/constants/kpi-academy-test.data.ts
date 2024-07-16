import { SCALE_OPTIONS } from './kpi-compass-test';

type FormType = 'select' | 'multiSelect' | 'rank' | 'textInput' | 'select-textInput' | 'numbers';

export const KPI_ACADEMY_TEST: Record<
  number,
  {
    question: { en: string; hu: string };
    options: { en: string; hu: string }[];
    type: string;
    form: FormType;
    questionExtra?: { en: string; hu: string };
  }
> = {
  1: {
    question: {
      en: 'How many hours per week do you spend on these activities outside of school, on average?',
      hu: 'Hetente átlagosan hány órát töltesz iskolán kívül az alábbi tevékenységekkel?',
    },
    options: [
      { en: 'Preparation for school', hu: 'Iskolai felkészülés' },
      { en: 'Sports', hu: 'Sport' },
      { en: 'Extracurricular activities', hu: 'Szakkör' },
      { en: 'Friends, leisure', hu: 'Barátok, szórakozás' },
      { en: 'Family', hu: 'Család' },
      { en: 'Work', hu: 'Munka' },
      { en: 'Hobbies', hu: 'Hobbi' },
      { en: 'Óbuda Academy', hu: 'Óbuda Academy' },
      { en: 'Other', hu: 'Egyéb' },
    ],
    type: 'kontextus',
    form: 'numbers',
  },
  2: {
    question: {
      en: 'On a scale of 1 to 5, how much do you agree with the following statements?',
      hu: 'Mennyire értesz egyet az alábbi állításokkal?',
    },
    options: SCALE_OPTIONS,
    type: 'Academic knowledge and preparedness',
    form: 'select',
  },
  3: {
    question: {
      en: 'I am well-prepared for the high school graduation exam.',
      hu: 'Kellően felkészült vagyok az érettségi vizsgára.',
    },
    options: [
      { en: 'I’m not prepared at all', hu: 'Nem vagyok felkészült' },
      { en: 'I’m somewhat prepared', hu: 'Kissé vagyok felkészült' },
      { en: 'Undecided', hu: 'Nem tudom eldönteni' },
      { en: 'I’m mostly prepared', hu: 'Nagyrészt felkészült vagyok' },
      { en: 'I’m fully prepared', hu: 'Teljesen felkészült vagyok' },
    ],
    type: 'Academic knowledge and preparedness',
    form: 'select',
  },
  4: {
    question: {
      en: 'I am well-informed about the university admission process.',
      hu: 'Tájékozott vagyok az egyetemi felvételi folyamattal kapcsolatban.',
    },
    options: SCALE_OPTIONS,
    type: 'Academic knowledge and preparedness',
    form: 'select',
  },
  5: {
    question: {
      en: 'I have a solid understanding of what university life will be like.',
      hu: 'Tudom, hogy milyen lesz az egyetemi élet.',
    },
    options: SCALE_OPTIONS,
    type: 'Academic knowledge and preparedness',
    form: 'select',
  },
  6: {
    question: {
      en: 'I feel like I would be capable of successfully completing university.',
      hu: 'Úgy érzem, képes lennék sikeresen teljesíteni az egyetemet.',
    },
    options: SCALE_OPTIONS,
    type: 'Academic knowledge and preparedness',
    form: 'select',
  },
  7: {
    question: {
      en: 'I am well-informed about the academic programs offered by Óbuda University.',
      hu: 'Tájékozott vagyok az Óbudai Egyetem által ajánlott szakokkal kapcsolatban.',
    },
    options: SCALE_OPTIONS,
    type: 'Academic knowledge and preparedness',
    form: 'select',
  },
  8: {
    question: {
      en: 'What factors influence your choice of further education the most? Choose the 3 most important ones!',
      hu: 'Milyen tényezők hatnak a leginkább továbbtanulási irányod kiválasztására? Válaszd ki a 3 legfontosabbat!',
    },
    options: [
      { en: 'Interest/calling', hu: 'Érdeklődés/elhivatottság' },
      { en: 'Future career opportunities', hu: 'Jövőbeni karrierlehetőségek' },
      { en: 'Opinion of parents and/or family', hu: 'Szülők és/vagy család véleménye' },
      { en: 'Opinion of friends and acquaintances', hu: 'Barátok, ismerősök véleménye' },
      { en: "Teachers' advice", hu: 'Tanárok tanácsa' },
      { en: "The university's reputation", hu: 'Az egyetem hírneve' },
      { en: 'Gaining social status', hu: 'Társadalmi státusz szerzése' },
      { en: 'Achieving financial well-being', hu: 'Anyagi jólét megteremtése' },
    ],
    type: 'kontextus',
    form: 'rank',
  },
  9: {
    question: {
      en: 'What are your biggest fears regarding university application, the admission process, or university life? (You can choose multiple options.)',
      hu: 'Mik a legnagyobb félelmeid az egyetemre való jelentkezéssel, a felvételi folyamattal, vagy az egyetemi léttel kapcsolatban? (több válasz megadása is lehetséges)',
    },
    options: [
      { en: 'I don’t have any fears about these', hu: 'Nincsenek félelmeim ezzel kapcsolatban' },
      { en: 'Lack of scholarship opportunities', hu: 'Az ösztöndíj lehetőségek hiánya' },
      {
        en: 'Financing the education - self-funded or state-funded',
        hu: 'A képzés finanszírozásának módja - önköltséges vagy államilag finanszírozott',
      },
      {
        en: 'Accomodation problems - lack of dormitories or rental prices',
        hu: 'Lakhatási problémák - kollégiumi hely hiánya vagy albérlet árak',
      },
      {
        en: 'Difficulties of moving to a new city or district',
        hu: 'Az új városba vagy kerületbe költözés nehézségei',
      },
      {
        en: 'Challenges of fitting in and making friends',
        hu: 'A beilleszkedés és barátok szerzésének kihívásai',
      },
      {
        en: 'Lack of necessary knowledge for the chosen program',
        hu: 'A szükséges tudás hiánya a választott szakhoz',
      },
      {
        en: 'Lack of strong interest in the chosen field',
        hu: 'Kellően erős érdeklődés hiánya a választott szak iránt',
      },
      {
        en: 'Uncertainty about finding future job opportunities with the degree',
        hu: 'A végzettséggel elérhető jövőbeli munkalehetőségek bizonytalansága',
      },
      { en: 'University exams and professors', hu: 'Az egyetemi vizsgák és tanárok' },
      { en: 'Other', hu: 'Egyéb' },
    ],
    type: 'Fears',
    form: 'multiSelect',
  },
  10: {
    question: {
      en: 'How interesting do you find the modules offered to you?',
      hu: 'Mennyire találod érdekesnek a számodra felkínált modulokat?',
    },
    options: [
      { en: 'Program has not started yet', hu: 'Még nem kezdődött el a program' },
      { en: 'Not at all', hu: 'Egyáltalán nem' },
      { en: 'Not really', hu: 'Inkább nem' },
      { en: 'Neutral', hu: 'Semleges' },
      { en: 'Somewhat', hu: 'Inkább igen' },
      { en: 'Completely', hu: 'Teljesen' },
    ],
    type: 'Student satisfaction',
    form: 'select',
  },
  11: {
    question: {
      en: 'How much do you feel the modules you have chosen contribute to your readiness for university?',
      hu: 'Mennyire érzed azt, hogy az általad választott modulok elősegítik az egyetemre való felkészültségedet?',
    },
    options: [
      { en: 'Program has not started yet', hu: 'Még nem kezdődött el a program' },
      { en: 'Not at all', hu: 'Egyáltalán nem' },
      { en: 'Not really', hu: 'Inkább nem' },
      { en: 'Neutral', hu: 'Semleges' },
      { en: 'Somewhat', hu: 'Inkább igen' },
      { en: 'Completely', hu: 'Teljesen' },
    ],
    type: 'Student satisfaction',
    form: 'select',
  },
  12: {
    question: {
      en: 'How much do you feel the modules you have chosen support you in defining/reaching your further education goals?',
      hu: 'Mennyire érzed azt, hogy az általad választott modulok támogatják, hogy elérd/meghatározd a továbbtanulási céljaidat?',
    },
    options: [
      { en: 'Program has not started yet', hu: 'Még nem kezdődött el a program' },
      { en: 'Not at all', hu: 'Egyáltalán nem' },
      { en: 'Not really', hu: 'Inkább nem' },
      { en: 'Neutral', hu: 'Semleges' },
      { en: 'Somewhat', hu: 'Inkább igen' },
      { en: 'Completely', hu: 'Teljesen' },
    ],
    type: 'Student satisfaction',
    form: 'select',
  },
  13: {
    question: {
      en: 'How satisfied are you with the support and assistance provided by your Orientation Mentor?',
      hu: 'Mennyire vagy elégedett az orientációs mentorod által nyújtott támogatással és segítséggel?',
    },
    options: [
      { en: 'Mentoring has not started yet', hu: 'Még nem kezdődött el a mentorálás' },
      { en: 'Not at all', hu: 'Egyáltalán nem' },
      { en: 'Not really', hu: 'Inkább nem' },
      { en: 'Neutral', hu: 'Semleges' },
      { en: 'Somewhat', hu: 'Inkább igen' },
      { en: 'Completely', hu: 'Teljesen' },
    ],
    type: 'Orientation mentor rating',
    form: 'select',
  },

  14: {
    question: {
      en: 'How satisfied are you with the support and assistance provided by your Accompanying Mentor?',
      hu: 'Mennyire vagy elégedett a kísérőmentorod által nyújtott támogatással és segítséggel?',
    },
    options: [
      {
        en: "I don't have an accompanying mentor / Mentoring has not started yet",
        hu: 'Nincs kísérőmentorom / Még nem kezdődött el a mentorálás',
      },
      { en: 'Not at all', hu: 'Egyáltalán nem' },
      { en: 'Not really', hu: 'Inkább nem' },
      { en: 'Neutral', hu: 'Semleges' },
      { en: 'Somewhat', hu: 'Inkább igen' },
      { en: 'Completely', hu: 'Teljesen' },
    ],
    type: 'Accompanying mentor rating',
    form: 'select',
  },
  15: {
    question: {
      en: 'How useful do you find what the Academy program offers in terms of achieving your further education goals?',
      hu: 'Mennyire találod hasznosnak azt, amit az Academy program nyújt a továbbtanulási céljaid elérése szempontjából?',
    },
    options: [
      { en: 'Program has not started yet', hu: 'Még nem kezdődött el a program' },
      { en: 'Not at all', hu: 'Egyáltalán nem' },
      { en: 'Not really', hu: 'Inkább nem' },
      { en: 'Neutral', hu: 'Semleges' },
      { en: 'Somewhat', hu: 'Inkább igen' },
      { en: 'Completely', hu: 'Teljesen' },
    ],
    type: 'Student satisfaction',
    form: 'select',
  },
  16: {
    question: {
      en: 'Overall, how satisfied are you with the operation and organization of the Óbuda Academy?',
      hu: 'Összességében mennyire vagy elégedett az Óbuda Academy működésével és szervezésével?',
    },
    options: [
      { en: 'Program has not started yet', hu: 'Még nem kezdődött el a program' },
      { en: 'Not at all', hu: 'Egyáltalán nem' },
      { en: 'Not really', hu: 'Inkább nem' },
      { en: 'Neutral', hu: 'Semleges' },
      { en: 'Somewhat', hu: 'Inkább igen' },
      { en: 'Completely', hu: 'Teljesen' },
    ],
    type: 'Student satisfaction',
    form: 'select',
  },
  17: {
    question: {
      en: 'Do you plan to continue the Óbuda Academy program next semester?',
      hu: 'Tervezed-e folytatni az Óbuda Academy-t a következő félévben?',
    },
    questionExtra: {
      en: 'Please explain briefly! (Min. 50 characters)',
      hu: 'Kérünk, indokold meg röviden! (Min. 50 karakter)',
    },
    options: [
      { en: 'Definitely not', hu: 'Biztosan nem' },
      { en: 'Probably not', hu: 'Valószínűleg nem' },
      { en: "I don't know", hu: 'Nem tudom' },
      { en: 'Probably yes', hu: 'Valószínűleg igen' },
      { en: 'Definitely yes', hu: 'Biztosan' },
    ],
    type: 'Student satisfaction',
    form: 'select-textInput',
  },
  18: {
    question: {
      en: 'Do you have any suggestions or feedback regarding Óbuda Academy?',
      hu: 'Van-e bármilyen javaslatod vagy észrevételed az Óbuda Academy-vel kapcsolatban?',
    },
    options: [],
    type: 'kontextus',
    form: 'textInput',
  },
  19: {
    question: {
      en: 'Would you recommend Óbuda Academy to your friends?',
      hu: 'Ajánlanád-e a barátaidnak az Academyben való részvételt?',
    },
    options: [
      { en: 'Definitely not', hu: 'Biztosan nem' },
      { en: 'Probably not', hu: 'Valószínűleg nem' },
      { en: "I don't know", hu: 'Nem tudom' },
      { en: 'Probably yes', hu: 'Valószínűleg igen' },
      { en: 'Definitely yes', hu: 'Biztosan' },
    ],
    type: 'Student satisfaction',
    form: 'select',
  },
};
