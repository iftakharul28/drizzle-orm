import Link from "next/link";
import RegisterForm from "@/components/form/RegisterForm";
export default function Register() {
  return (
    <div className='m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2'>
      <section className='hidden lg:block form-image-wrapper relative rounded-tl-md rounded-bl-md'>
        <div className='bg-cover bg-no-repeat bg-center absolute inset-0 w-full h-full' style={{ backgroundImage: "url(/assets/img2.png)" }}></div>
      </section>
      <section className='right flex flex-col justify-evenly'>
        <div className='text-center py-10'>
          <div className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className='title'>
              <h1 className='text-gray-800 text-4xl font-bold py-4'>Explore</h1>
              <p className='w-3/4 mx-auto text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, officia?</p>
            </div>
            <RegisterForm />
            <p className='text-center text-gray-400 '>
              Have an account?{" "}
              <Link className='text-blue-700' href='/auth/login'>
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
