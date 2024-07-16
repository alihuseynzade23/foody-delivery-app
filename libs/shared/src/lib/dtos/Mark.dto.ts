import { UserDto } from '../shared';
import { SemesterDto } from './Semester.dto';
import { SubjectDto } from './Subject.dto';

export type MarkDto = {
  id: string;
  value: number;
  semester: SemesterDto;
  student: UserDto;
  subject: SubjectDto;
  verifiedBy: UserDto | null;
  verifiedAt: Date;
  createdAt: Date;
};

export type CreateMarkDto = {
  subject: string;
  value: number;
};
