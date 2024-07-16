export const SCALE_OPTIONS = [
  { en: 'Strongly disagree', hu: 'Egyáltalán nem értek egyet', value: '1' },
  { en: 'Disagree', hu: 'Nem értek egyet', value: '2' },
  { en: 'Neutral', hu: 'Semleges', value: '3' },
  { en: 'Agree', hu: 'Egyetértek', value: '4' },
  { en: 'Strongly agree', hu: 'Teljesen egyetértek', value: '5' },
];

export const KPI_COMPASS_TEST = {
  1: {
    question: {
      en: 'I am consciously preparing to be ready for the final exams.',
      hu: 'Tudatosan készülök arra, hogy felkészült legyek az érettségire.',
    },
    options: SCALE_OPTIONS,
  },
  2: {
    question: {
      en: 'I would like to go to university.',
      hu: 'Szeretnék egyetemre menni.',
    },
    options: SCALE_OPTIONS,
  },
  3: {
    question: {
      en: 'I am well-informed about the university admission process.',
      hu: 'Tájékozott vagyok az egyetemi felvételi folyamattal kapcsolatban.',
    },
    options: SCALE_OPTIONS,
  },
  4: {
    question: {
      en: 'I am well-informed about the programs offered by Óbuda University.',
      hu: 'Tájékozott vagyok az Óbudai Egyetem által ajánlott szakokkal kapcsolatban.',
    },
    options: SCALE_OPTIONS,
  },
  5: {
    question: {
      en: 'I am open to applying to Óbuda University as well.',
      hu: 'Nyitott vagyok arra, hogy jelentkezzek az Óbudai Egyetemre is.',
    },
    options: SCALE_OPTIONS,
  },
  6: {
    question: {
      en: 'I have a clear idea of what I want to study after high school.',
      hu: 'Határozott elképzelésem van arról, hogy a középiskola után mit szeretnék tanulni.',
    },
    options: SCALE_OPTIONS,
  },
  7: {
    question: {
      en: 'Select the subjects that interest you the most! (Multiple answers are possible)',
      hu: 'Válaszd ki azokat a tanárgyakat, amik a leginkább érdekelnek! (Több válasz megadása is lehetséges)',
    },
    options: [
      { en: 'Chemistry', hu: 'Kémia' },
      { en: 'Physics', hu: 'Fizika' },
      { en: 'Mathematics', hu: 'Matematika' },
      { en: 'Biology', hu: 'Biológia' },
      { en: 'Computer Science', hu: 'Informatika' },
      { en: 'Hungarian Language and Literature', hu: 'Magyar nyelv és irodalom' },
      { en: 'Foreign Language', hu: 'Idegen nyelv' },
      { en: 'Geography', hu: 'Földrajz' },
      { en: 'History', hu: 'Történelem' },
      { en: 'Philosophy', hu: 'Filozófia' },
      { en: 'Music', hu: 'Ének-zene' },
      { en: 'Visual Arts', hu: 'Vizuális kultúra' },
      { en: 'Physical Education and Sports', hu: 'Testnevelés és sport' },
    ],
  },
  8: {
    question: {
      en: 'What are your biggest fears regarding applying to university, the admission process, or university life? (Rank the three most relevant concerns in order of importance)',
      hu: 'Mik a legnagyobb félelmeid az egyetemre való jelentkezéssel, a felvételi folyamattal, vagy az egyetemi léttel kapcsolatban? (Fontossági sorrendben válaszd számodra legrelevánsabb három dolgot)',
    },
    options: [
      { en: 'I have no fears regarding this', hu: 'Nincsenek félelmeim ezzel kapcsolatban' },
      { en: 'Lack of scholarship opportunities', hu: 'Az ösztöndíj lehetőségek hiánya' },
      {
        en: 'Funding method for the education - self-funded or state-funded',
        hu: 'A képzés finanszírozásának módja - önköltséges vagy államilag finanszírozott',
      },
      {
        en: 'Housing issues - lack of dormitory space or high rental prices',
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
        en: 'Lack of necessary knowledge for the chosen field',
        hu: 'A szükséges tudás hiánya a választott szakhoz',
      },
      {
        en: 'Lack of strong interest in the chosen field',
        hu: 'Kellően erős érdeklődés hiánya a választott szak iránt',
      },
      {
        en: 'Uncertainty about future job opportunities with the degree',
        hu: 'A végzettséggel elérhető jövőbeli munkalehetőségek bizonytalansága',
      },
      { en: 'University exams, professors', hu: 'Az egyetemi vizsgák, tanárok' },
      { en: 'Other', hu: 'Egyéb' },
    ],
  },
  9: {
    question: {
      en: 'What factors most influence your choice of further education direction? (Rank the three most relevant concerns in order of importance)',
      hu: 'Milyen tényezők hatnak a leginkább továbbtanulási irányod kiválasztására? (Fontossági sorrendben válaszd számodra legrelevánsabb három dolgot)',
    },
    options: [
      { en: 'Interest/passion', hu: 'Érdeklődés/elhivatottság' },
      { en: 'Future career opportunities', hu: 'Jövőbeni karrierlehetőségek' },
      { en: "Parents' and/or family's opinion", hu: 'Szülők és/vagy család véleménye' },
      { en: "Friends' and acquaintances' opinion", hu: 'Barátok, ismerősök véleménye' },
      { en: "Teachers' advice", hu: 'Tanárok tanácsa' },
      { en: "University's reputation", hu: 'Az egyetem hírneve' },
      { en: 'Gaining social status', hu: 'Társadalmi státusz szerzése' },
      { en: 'Achieving financial well-being', hu: 'Anyagi jólét megteremtése' },
    ],
  },
} as const;
