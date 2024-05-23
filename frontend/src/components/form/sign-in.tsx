'use client'

import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";
import { Typography } from "../ui/typography";
import Link from "next/link";
import { Button } from "../ui/button";
import { FaFacebookF, FaGoogle, FaTwitter } from "../icons";
import FormikField from "./fomik-field";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from 'next/navigation'
import { useLayoutEffect } from "react";

interface Props {}

const SignIn = ({}: Props) => {
  const router = useRouter()
  const { data } = useSession()
  const pathname = usePathname()

  useLayoutEffect(() => {
    if(data?.user) {
      return router.push(pathname)
    }
  }, [data])

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
  });

  const onSubmit = async (values: any) => {
    console.log(values)
    const response = await fetch("http://localhost:5000/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    if(response.ok) {
      alert(response.statusText)
      router.refresh()
    }
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => onSubmit(values)}
      >
        {formik => (
          <Form className="flex flex-col gap-4">
            <FormikField
              placeholder="Email or username"
              name="email"
              className="w-full"
            />
            <FormikField
              placeholder="Password"
              name="password"
              type="password"
              className="w-full"
            />

            <Link href='/forgot-password' className="text-right text-base text-primary">
              Forgot password?
            </Link>

            <Button
              type="submit" size="lg" className="w-full text-lg font-semibold"
              disabled={!formik.isValid && formik.isSubmitting}
            >Sing In</Button>
          </Form>
        )}
      </Formik>
      <div className="w-full flex gap-2 items-center px-8">
        <hr className="flex-1" />
        <Typography variant="p" >OR</Typography>
        <hr className="flex-1" />
      </div>

      <div className="w-full flex justify-center gap-8">
        <FaGoogle className="cursor-pointer text-primary bg-secondary/40 w-16 h-12 p-3 rounded-md" />
        <FaTwitter className="cursor-pointer text-primary bg-secondary/40 w-16 h-12 p-3 rounded-md" />
        <FaFacebookF className="cursor-pointer text-primary bg-secondary/40 w-16 h-12 p-3 rounded-md" />
      </div>
    </div>
  );
};

export default SignIn;
