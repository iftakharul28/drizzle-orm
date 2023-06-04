"use client";
import type { loginValidation } from "@/types/global";
import { useSearchParams, useRouter } from "next/navigation";
// import * as react from "next-auth/react";
import { useFormik } from "formik";
import { loginValidate } from "@/helper/validate";
const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  // formik hook
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: loginValidate,
    onSubmit,
  });
  async function onSubmit(values: loginValidation) {
    // const status = await react.signIn("credentials", {
    //   redirect: true,
    //   email: values?.email,
    //   password: values?.password,
    //   callbackUrl: `${searchParams?.get("callbackUrl") ? searchParams?.get("callbackUrl") : window.location.origin}`,
    // });
    // if (status?.ok) {
    //   router.push(status?.url || "");
    // } else {
    //   console.log(status);
    // }
  }
  return (
    <form className='flex flex-col gap-5' role='form' onSubmit={formik.handleSubmit}>
      <div className={`form__input-group ${formik.errors.email && formik.touched.email ? "form__input-group--red" : ""}`}>
        <label htmlFor='email' className='sr-only'>
          Email
        </label>
        <input id='email' type='email' className='form__input py-3 px-5' placeholder='Email' {...formik.getFieldProps("email")} />
      </div>
      <div className={`form__input-group ${formik.errors.password && formik.touched.password ? "form__input-group--red" : ""}`}>
        <label htmlFor='password' className='sr-only'>
          Password
        </label>
        <input id='password' type='password' className='form__input py-3 px-5' placeholder='Password' {...formik.getFieldProps("password")} />
      </div>
      <button type='submit' className='form__button'>
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
