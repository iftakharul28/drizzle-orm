"use client";
import { useRouter } from "next/navigation";
import { registerValidate } from "@/helper/validate";
import { useFormik } from "formik";
import Http from "@/helper/http";
import type { registertype } from "@/types/global";

const RegisterForm = () => {
  const router = useRouter();
  // formik hook
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validate: registerValidate,
    onSubmit,
  });
  async function onSubmit(values: registertype) {
    try {
      const data = await Http.Post(
        "user/signup",
        JSON.stringify({
          name: values.name,
          email: values.email,
          password: values.password,
          role: "user",
        })
      );
      console.log(data);
      if (data.status === 201) {
        router.push("/auth/login");
      } else {
        const content = await data.json();
        console.log(content);
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <form className='flex flex-col gap-5' role='form' onSubmit={formik.handleSubmit}>
      <div className={`form__input-group ${formik.errors.name && formik.touched.name ? "form__input-group--red" : ""}`}>
        <label htmlFor='name' className='sr-only'>
          Name
        </label>
        <input id='name' type='text' placeholder='Name' className='form__input py-3 px-5' {...formik.getFieldProps("name")} />
      </div>
      <div className={`form__input-group ${formik.errors.email && formik.touched.email ? "form__input-group--red" : ""}`}>
        <label htmlFor='email' className='sr-only'>
          Email
        </label>
        <input id='email' type='email' placeholder='Email' className='form__input py-3 px-5' {...formik.getFieldProps("email")} />
      </div>
      <div className={`form__input-group ${formik.errors.password && formik.touched.password ? "form__input-group--red" : ""}`}>
        <label htmlFor='password' className='sr-only'>
          Password
        </label>
        <input id='password' type='password' placeholder='Password' className='form__input py-3 px-5' {...formik.getFieldProps("password")} />
      </div>
      <div className={`form__input-group ${formik.errors.cpassword && formik.touched.cpassword ? "form__input-group--red" : ""}`}>
        <label htmlFor='cpassword' className='sr-only'>
          RePassword
        </label>
        <input id='cpassword' type='password' placeholder='Re-Password' className='form__input py-3 px-5' {...formik.getFieldProps("cpassword")} />
      </div>
      <button type='submit' className='form__button'>
        Sign Up
      </button>
    </form>
  );
};

export default RegisterForm;
