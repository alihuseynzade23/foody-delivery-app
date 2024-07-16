export interface AcademyModule {
  /** Academy Grade for the Module */
  academyGrades: Semester[];
  /** Capacity seats of the Module */
  capacity: number;
  /** Commitment Level of the Module */
  commitmentLevel: AcademyModuleCommitmentLevel;
  createdAt: string;
  /** Description of the Module */
  description: string;
  /** Education awareness of the Module */
  educationAwareness: AcademyModuleEducationAwareness;
  /** End date of the Module */
  endDate: string;
  /** Unique ID (primary key) */
  id: string;
  /** Image of the Module */
  image: AcademyModuleImage;
  /** Interest Motivation of the Module */
  interestMotivation: AcademyModuleInterestMotivation;
  /** Leader's email of the Module */
  leaderEmail: string;
  /** Leader's name of the Module */
  leaderName: string;
  /** Leader's phone of the Module */
  leaderPhone: string;
  /** Location of the Module */
  location: AcademyModuleLocation;
  /**
   * Notes for the location of the Module
   * @nullable
   */
  locationNote?: string | null;
  /** Name of the Module */
  name: string;
  /** Sessions array for the Module */
  pathways: AcademyModulePathwayRelevance[];
  /** Preparedness of the Module */
  preparedness: AcademyModulePreparedness;
  /** prerequisities of the Module */
  prerequisities: string;
  /** Sessions array for the Module */
  sessions: AcademyModuleSession[];
  /** Start date of the Module */
  startDate: string;
  /** Status of the Module */
  status: AcademyModuleStatus;
  updatedAt: string;
  /** Useful links of the Module */
  usefulLinks: AcademyModuleUsefulLink[];
}

/**
 * Commitment Level of the Module
 */
export type AcademyModuleCommitmentLevel =
  (typeof AcademyModuleCommitmentLevel)[keyof typeof AcademyModuleCommitmentLevel];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AcademyModuleCommitmentLevel = {
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
} as const;

/**
 * Education awareness of the Module
 */
export type AcademyModuleEducationAwareness =
  (typeof AcademyModuleEducationAwareness)[keyof typeof AcademyModuleEducationAwareness];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AcademyModuleEducationAwareness = {
  GENERAL: 'GENERAL',
  OEFOCUS: 'OEFOCUS',
  NA: 'NA',
} as const;

/**
 * Image of the Module
 */
export type AcademyModuleImage = { [key: string]: unknown };

/**
 * Interest Motivation of the Module
 */
export type AcademyModuleInterestMotivation =
  (typeof AcademyModuleInterestMotivation)[keyof typeof AcademyModuleInterestMotivation];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AcademyModuleInterestMotivation = {
  EXPLORING: 'EXPLORING',
  IMMERSION: 'IMMERSION',
  NA: 'NA',
} as const;

export interface AcademyModuleLocation {
  /** Unique ID (primary key) */
  id: string;
  /**
   * Address of the Location
   * @nullable
   */
  location?: string | null;
  /** Level of the pathway relevance */
  locationType: AcademyModuleLocationLocationType;
  /** Name of the Location */
  name: string;
}

/**
 * Level of the pathway relevance
 */
export type AcademyModuleLocationLocationType =
  (typeof AcademyModuleLocationLocationType)[keyof typeof AcademyModuleLocationLocationType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AcademyModuleLocationLocationType = {
  CAMPUS: 'CAMPUS',
  EXTERNAL: 'EXTERNAL',
  ONLINE: 'ONLINE',
} as const;

export interface AcademyModulePathway {
  /** Unique ID (primary key) */
  id: string;
  /** EN name of the pathway */
  nameEn: string;
  /** Hungarian name of the pathway */
  nameHu: string;
}

export interface AcademyModulePathwayRelevance {
  /** Unique ID of the AcademyModule Entity */
  academyModule: AcademyModule;
  /** Unique ID of the AcademyPathWay Entity */
  academyModulePathway: AcademyModulePathway;
  /** Unique ID (primary key) */
  id: number;
  /** Level of the pathway relevance */
  level: AcademyModulePathwayRelevanceLevel;
}

/**
 * Level of the pathway relevance
 */
export type AcademyModulePathwayRelevanceLevel =
  (typeof AcademyModulePathwayRelevanceLevel)[keyof typeof AcademyModulePathwayRelevanceLevel];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AcademyModulePathwayRelevanceLevel = {
  NOT_RELEVANT: 'NOT_RELEVANT',
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
} as const;

/**
 * Preparedness of the Module
 */
export type AcademyModulePreparedness =
  (typeof AcademyModulePreparedness)[keyof typeof AcademyModulePreparedness];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AcademyModulePreparedness = {
  CATCHING_UP: 'CATCHING_UP',
  TALENT_NURTURING: 'TALENT_NURTURING',
  NA: 'NA',
} as const;

export interface AcademyModuleSession {
  academyModule: AcademyModule;
  /** End date of the Session */
  endDate: string;
  /** Start time of the Session */
  endTime: string;
  /** Frequency of the Session */
  frequency: AcademyModuleSessionFrequency;
  /** Unique ID (primary key) */
  id: string;
  /** Start date of the Session */
  startDate: string;
  /** Start time of the Session */
  startTime: string;
  /** Type of the Session */
  type: AcademyModuleSessionType;
}

/**
 * Frequency of the Session
 */
export type AcademyModuleSessionFrequency =
  (typeof AcademyModuleSessionFrequency)[keyof typeof AcademyModuleSessionFrequency];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AcademyModuleSessionFrequency = {
  EVERY_WEEK: 'EVERY_WEEK',
  TWO_WEEKS: 'TWO_WEEKS',
  THREE_WEEKS: 'THREE_WEEKS',
  MONTHLY: 'MONTHLY',
} as const;

/**
 * Type of the Session
 */
export type AcademyModuleSessionType =
  (typeof AcademyModuleSessionType)[keyof typeof AcademyModuleSessionType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AcademyModuleSessionType = {
  RECURRING: 'RECURRING',
  SINGLE: 'SINGLE',
} as const;

export interface AcademyModulesFilterRequestDTO {
  /** @nullable */
  academyGradeIds?: string[] | null;
  /** Limit of the pagination */
  limit: number;
  /** @nullable */
  locationIds?: string[] | null;
  /** Offset of the pagination */
  offset: number;
  /** @nullable */
  pathwayIds?: string[] | null;
  /**
   * Search text
   * @nullable
   */
  search: string | null;
  /** @nullable */
  session?: AcademyModulesFilterRequestDTOSession;
  /** @nullable */
  status?: AcademyModulesFilterRequestDTOStatusItem[] | null;
}

/**
 * @nullable
 */
export type AcademyModulesFilterRequestDTOSession = DateIntervalFilter | null;

export type AcademyModulesFilterRequestDTOStatusItem =
  (typeof AcademyModulesFilterRequestDTOStatusItem)[keyof typeof AcademyModulesFilterRequestDTOStatusItem];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AcademyModulesFilterRequestDTOStatusItem = {
  IN_PROGRESS: 'IN_PROGRESS',
  ENDED: 'ENDED',
  DEACTIVATED: 'DEACTIVATED',
} as const;

export interface AcademyModulesResultDTO {
  /** info */
  info: PaginationInfoDTO;
  nodes: AcademyModule[];
}

/**
 * Status of the Module
 */
export type AcademyModuleStatus = (typeof AcademyModuleStatus)[keyof typeof AcademyModuleStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AcademyModuleStatus = {
  IN_PROGRESS: 'IN_PROGRESS',
  ENDED: 'ENDED',
  DEACTIVATED: 'DEACTIVATED',
} as const;

export interface AcademyModuleUsefulLink {
  /** Useful links of the Module */
  name: string;
  /** Useful links of the Module */
  url: string;
}

export interface Admin {
  role: AdminRole;
}

export type AdminRole = (typeof AdminRole)[keyof typeof AdminRole];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AdminRole = {
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN',
  DIRECTOR: 'DIRECTOR',
  PROGRAM_LEADER: 'PROGRAM_LEADER',
} as const;

export interface CreateHollandQuestionDto {
  questionEn: string;
  questionHu: string;
  solution: boolean;
  type: string;
}

export interface DateIntervalFilter {
  /** End date of the interval */
  endDate: string;
  /** Start date of the interval */
  startDate: string;
}

export interface EnHuStringDto {
  en: string;
  hu: string;
}

export interface FilterRequestDTO {
  /** Limit of the pagination */
  limit: number;
  /** Offset of the pagination */
  offset: number;
  /**
   * Search text
   * @nullable
   */
  search: string | null;
}

export interface HollandAnswer {
  answer: boolean;
  createdAt: string;
  hollandQuestion: HollandQuestion;
  hollandTest: HollandTest;
  id: string;
}

export interface HollandQuestion {
  createdAt: string;
  id: string;
  /** Question in English */
  questionEn: HollandQuestionQuestionEn;
  /** Question in Hungarian */
  questionHu: HollandQuestionQuestionHu;
  solution: boolean;
  type: HollandQuestionType;
}

export interface HollandQuestionDto {
  id: string;
  questionEn: string;
  questionHu: string;
  type: string;
}

/**
 * Question in English
 */
export type HollandQuestionQuestionEn = { [key: string]: unknown };

/**
 * Question in Hungarian
 */
export type HollandQuestionQuestionHu = { [key: string]: unknown };

export type HollandQuestionType = { [key: string]: unknown };

export interface HollandTest {
  answers: HollandAnswer[];
  createdAt: string;
  /** @nullable */
  finishedAt: string | null;
  id: string;
  pathway: string;
  scores: HollandTestScoresItem[];
  user: User;
}

export interface HollandTestAnswerDto {
  answer: boolean;
  questionId: string;
}

export interface HollandTestFinishDto {
  answers: HollandTestAnswerDto[];
}

export interface HollandTestScoreDto {
  primaryDescription: EnHuStringDto;
  score: number;
  secondaryDescription: EnHuStringDto;
  title: EnHuStringDto;
  type: HollandTestScoreDtoType;
}

export type HollandTestScoreDtoType =
  (typeof HollandTestScoreDtoType)[keyof typeof HollandTestScoreDtoType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const HollandTestScoreDtoType = {
  Realist: 'Realist',
  Investigative: 'Investigative',
  Artistic: 'Artistic',
  Social: 'Social',
  Enterprising: 'Enterprising',
  Conventional: 'Conventional',
} as const;

export interface HollandTestScoreResponseDto {
  pathway: string;
  scores: HollandTestScoreDto[];
}

export type HollandTestScoresItem = { [key: string]: unknown };

export interface HollandTestStartResponseDto {
  expiresAt: string;
  questions: HollandQuestionDto[];
}

export interface Institution {
  createdAt?: string;
  deletedAt?: string;
  /** Unique ID (primary key) for the institution, internal. */
  id: string;
  mentor: Mentor;
  name: string;
  updatedAt?: string;
}

export interface KpiAcademyFinishDto {
  selectedOptions: KpiAcademySelectedOptionsDto;
}

export interface KpiAcademySelectedOptionsDto {
  '1': number[];
  '10': ScaleFromZero;
  '11': ScaleFromZero;
  '12': ScaleFromZero;
  '13': ScaleFromZero;
  '14': ScaleFromZero;
  '15': ScaleFromZero;
  '16': ScaleFromZero;
  '17': ScaleAndTextInput;
  '18': TextInput;
  '19': Scale;
  '2': Scale;
  '3': Scale;
  '4': Scale;
  '5': Scale;
  '6': Scale;
  '7': Scale;
  '8': string[];
  '9': string[];
}

export interface KpiCompassFinishDto {
  selectedOptions: SelectedOptionsDto;
}

export interface Mark {
  createdAt: string;
  /** Unique ID (primary key) */
  id: string;
  semester: Semester;
  student: User;
  subject: Subject;
  /** Average for the specified semester and subject */
  value: number;
  verifiedAt: string;
  verifiedBy: User;
}

export interface Mentor {
  /** Capacity (students) of the Mentor. */
  capacity: number;
  faculty: string;
  immatriculation: number;
  /** Institution(s) of the mentor */
  institution: Institution[];
  /** Array of languages, eg. [en-GB, hu-HU] */
  language: string[];
  level: string;
  /** Mentoring locations */
  location: MentoringLocation[];
  programme: string;
  role: MentorRole;
  strengths: string[];
  students: MentorStudentRelation[];
}

export interface MentoringLocation {
  createdAt: string;
  /** Unique ID (primary key) for the location. */
  id: string;
  /** Addess of the location */
  location: string;
  /** The type of location. */
  locationType: MentoringLocationLocationType;
  mentor: Mentor;
  /** Display name of the location */
  name: string;
  updatedAt: string;
}

/**
 * The type of location.
 */
export type MentoringLocationLocationType =
  (typeof MentoringLocationLocationType)[keyof typeof MentoringLocationLocationType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const MentoringLocationLocationType = {
  CAMPUS: 'CAMPUS',
  EXTERNAL: 'EXTERNAL',
  ONLINE: 'ONLINE',
} as const;

export type MentorRole = (typeof MentorRole)[keyof typeof MentorRole];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const MentorRole = {
  ORIENTATION: 'ORIENTATION',
  ACCOMPANYING: 'ACCOMPANYING',
} as const;

export interface MentorStudentRelation {
  /** Whetere the student is accepted ot not. */
  acceptedAt: string;
  acceptedBy: User;
  createdAt: string;
  deletedBy: User;
  /** Describes wheter the student is flagged by mentor. */
  flag: boolean;
  /** Unique ID (primary key) for the relation. */
  id: string;
  /** The mentor of a student in the relation. */
  mentor: Mentor;
  /** Student of the relation. */
  student: Student;
  updatedAt: string;
}

export type MutationDeleteHollandTestParams = {
  'user-id': string;
};

export interface PaginationInfoDTO {
  /** Total count of the result */
  totalCount: number;
}

export type QueryGetHollandTestScoreParams = {
  'user-id': string;
};

export interface Scale {
  /**
   * @minimum 1
   * @maximum 5
   */
  scale: number;
}

export interface ScaleAndTextInput {
  /**
   * @minimum 1
   * @maximum 5
   */
  scale: number;
  /** @minLength 50 */
  textInput: string;
}

export interface ScaleFromZero {
  /**
   * @minimum 0
   * @maximum 5
   */
  scale: number;
}

export interface School {
  /** City where the school is located. */
  city: SchoolCity;
  createdAt: string;
  deletedAt: string;
  /** Unique ID (primary key) for the instance. */
  id: string;
  /** Name of the school */
  name: SchoolName;
}

/**
 * City where the school is located.
 */
export type SchoolCity = { [key: string]: unknown };

/**
 * Name of the school
 */
export type SchoolName = { [key: string]: unknown };

export interface SelectedOptionsDto {
  '1': Scale;
  '2': Scale;
  '3': Scale;
  '4': Scale;
  '5': Scale;
  '6': Scale;
  '7': string[];
  '8': string[];
  '9': string[];
}

export interface Semester {
  /** Unique ID (primary key) */
  id: string;
  /** EN name of the semester */
  nameEn: SemesterNameEn;
  /** Hungarian name of the semester */
  nameHu: SemesterNameHu;
}

/**
 * EN name of the semester
 */
export type SemesterNameEn = { [key: string]: unknown };

/**
 * Hungarian name of the semester
 */
export type SemesterNameHu = { [key: string]: unknown };

export interface Student {
  birthDate?: string;
  currentGrade?: string;
  /** Describes if the student enrolled. */
  enrolled?: boolean;
  /** Time when student was enrolled at. */
  enrolledAt?: string;
  /** The admin who enrolled the student */
  enrolledBy?: User;
  graduationYear?: number;
  /** Is an english speaking mentor needed to the student */
  isEnMentorNeeded?: boolean;
  school?: School;
  schoolType?: string;
  /** Describes if the student validated. */
  validated?: boolean;
  /** Time when student was validated at. */
  validatedAt?: string;
  /** The admin who validated the student */
  validatedBy?: User;
}

export interface Subject {
  /** Unique ID (primary key) */
  id: string;
  /** To compass or not compass 🤷‍♂️ */
  isCompassSubject: boolean;
  /** Shows whether a subject is language or not */
  isLanguage: boolean;
  /** EN name of the subject */
  nameEn: SubjectNameEn;
  /** Hungarian name of the subject */
  nameHu: SubjectNameHu;
}

/**
 * EN name of the subject
 */
export type SubjectNameEn = { [key: string]: unknown };

/**
 * Hungarian name of the subject
 */
export type SubjectNameHu = { [key: string]: unknown };

export interface TestListDto {
  holland: TestListDtoHolland;
  kpiCompass: TestListDtoKpiCompass;
}

export type TestListDtoHolland = (typeof TestListDtoHolland)[keyof typeof TestListDtoHolland];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const TestListDtoHolland = {
  availabe: 'availabe',
  completed: 'completed',
} as const;

export type TestListDtoKpiCompass =
  (typeof TestListDtoKpiCompass)[keyof typeof TestListDtoKpiCompass];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const TestListDtoKpiCompass = {
  availabe: 'availabe',
  completed: 'completed',
} as const;

export interface TextInput {
  textInput: string;
}

export interface UpdateStudentInformationDto {
  currentGrade: UpdateStudentInformationDtoCurrentGrade;
  graduationYear: UpdateStudentInformationDtoGraduationYear;
  isEnMentorNeeded: string;
  /** @minLength 1 */
  school: string;
  schoolType: UpdateStudentInformationDtoSchoolType;
}

export type UpdateStudentInformationDtoCurrentGrade =
  (typeof UpdateStudentInformationDtoCurrentGrade)[keyof typeof UpdateStudentInformationDtoCurrentGrade];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UpdateStudentInformationDtoCurrentGrade = {
  NUMBER_10: '10',
  NUMBER_11: '11',
  NUMBER_12: '12',
} as const;

export type UpdateStudentInformationDtoGraduationYear =
  (typeof UpdateStudentInformationDtoGraduationYear)[keyof typeof UpdateStudentInformationDtoGraduationYear];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UpdateStudentInformationDtoGraduationYear = {
  NUMBER_2024: '2024',
  NUMBER_2025: '2025',
  NUMBER_2026: '2026',
  NUMBER_2027: '2027',
  NUMBER_2028: '2028',
  NUMBER_2029: '2029',
} as const;

export type UpdateStudentInformationDtoSchoolType =
  (typeof UpdateStudentInformationDtoSchoolType)[keyof typeof UpdateStudentInformationDtoSchoolType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UpdateStudentInformationDtoSchoolType = {
  grammarSchool: 'grammarSchool',
  vocationalSchool: 'vocationalSchool',
} as const;

export interface User {
  adminDetails: Admin;
  createdAt: string;
  deletedAt: string;
  email: UserEmail;
  firstName: UserFirstName;
  gender: UserGender;
  /** Unique ID (primary key) for the user, internal. */
  id: string;
  lastName: UserLastName;
  mentorDetails: Mentor;
  phone: UserPhone;
  studentDetails: Student;
  /** 
      Unique ID for the user, external, identifies the user on IDP's side.
      Could be any string.
     */
  sub: UserSub;
  updatedAt: string;
  userType: UserUserType;
}

export type UserEmail = { [key: string]: unknown };

export type UserFirstName = { [key: string]: unknown };

export type UserGender = { [key: string]: unknown };

export type UserLastName = { [key: string]: unknown };

export type UserPhone = { [key: string]: unknown };

/**
 * 
      Unique ID for the user, external, identifies the user on IDP's side.
      Could be any string.
    
 */
export type UserSub = { [key: string]: unknown };

export type UserUserType = (typeof UserUserType)[keyof typeof UserUserType];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UserUserType = {
  STUDENT: 'STUDENT',
  MENTOR: 'MENTOR',
  ADMIN: 'ADMIN',
} as const;
