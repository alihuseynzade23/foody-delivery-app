export type Translations = {
  en: {
    password: {
      required: string;
      min: string;
      uppercase: string;
      lowercase: string;
      number: string;
    };
    email: {
      valid: string;
      required: string;
    };
    userName: {
      required: string;
      min: string;
    };
    fullName: {
      required: string;
    };
  };
  az: {
    password: {
      required: string;
      min: string;
      uppercase: string;
      lowercase: string;
      number: string;
    };
    email: {
      valid: string;
      required: string;
    };
    userName?: {
      required: string;
      min: string;
    };
    fullName?: {
      required: string;
    };
  };
};

export const yupTranslations: Translations = {
  en: {
    password: {
      required: 'Password is required',
      min: 'Password must be at least 5 characters',
      uppercase: 'Password must contain at least one uppercase letter',
      lowercase: 'Password must contain at least one lowercase letter',
      number: 'Password must contain at least one number',
    },
    email: {
      valid: 'Enter a valid email address',
      required: 'Email address is required',
    },
    userName: {
      required: 'User name is required',
      min: 'User name must be at least 5 characters',
    },
    fullName: {
      required: 'Full name is required',
    },
  },
  az: {
    password: {
      required: 'Şifrə tələb olunur',
      min: 'Şifrə ən az 5 simvol olmalıdır',
      uppercase: 'Şifrə ən azı bir böyük hərf içerməlidir',
      lowercase: 'Şifrə ən azı bir kiçik hərf içerməlidir',
      number: 'Şifrə ən azı bir rəqəm içerməlidir',
    },
    email: {
      valid: 'Etibarlı bir email ünvanı daxil edin',
      required: 'Email ünvanı tələb olunur',
    },
    userName: {
      required: 'İstifadəçi adı tələb olunur',
      min: 'İstifadəçi adı ən az 5 simvol olmalıdır',
    },
    fullName: {
      required: 'Tam ad tələb olunur',
    },
  },
};
