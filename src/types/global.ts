export interface loginValidation {
  email?: string | null;
  password?: string | null;
}

export interface registerValidation extends loginValidation {
  name?: string | null;
  password?: string | null;
  cpassword?: string | null;
  role?: string | null;
  city?: string | null;
  country?: string | null;
}
export type registertype = {
  name: string;
  email: string;
  password: string;
  cpassword: string;
};
