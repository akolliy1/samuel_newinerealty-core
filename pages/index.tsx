import React from "react";
import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import { useForm, Path, UseFormRegister, SubmitHandler } from "react-hook-form";
import dynamic from "next/dynamic";
import type { GetServerSideProps } from "next";
import moment from "moment";
// import PhoneInput from "react-phone-number-input";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import Yippey from "../Components/home/Yippey/Yippey";
//
import { Inter } from "@next/font/google";
import bg from "../public/New-Wine-Realty_4-Bedroom-Semi-Detached-In-Ajah.jpg";
import prisma from "../lib/prisma";
import { InputHTMLAttributes, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const DynamicPlugins = dynamic(() => import("../Components/Plugins/Plugins"), {
  loading: () => <p>...</p>,
  ssr: false,
});

export const getServerSideProps: GetServerSideProps = async () => {
  const maintenance = await prisma.maintenance.findUnique({
    where: { type: "upgrade" },
  });

  type Data = {
    name: string;
    type: string;
    startDate: Date;
    endDate: Date;
  };

  console.log('maintenance', maintenance)

  if (maintenance) {
    const { startDate, endDate }: Data = maintenance;

    var a = moment(new Date()); // moment("2016-06-06T21:03:55")
    var b = moment(endDate);

    // const minutes = b.diff(a, "minutes"); // 44700
    // const hours = b.diff(a, "hours"); // 745
    // const days = b.diff(a, "days"); // 31
    const weeks = b.diff(a, "weeks"); // 4
    const diff_s = b.diff(a, 'seconds');
    // console.log()
    const date = moment.utc(moment.duration(diff_s, "seconds").asMilliseconds()).format("DD:hh:mm:ss");
    console.log('date', date)
    const [days, hours, minutes, seconds] = date.split(':')

    console.log(`minutes, hours, days, weeks`, minutes, hours, days, weeks)

    return {
      props: { seconds, minutes, hours, days, weeks },
    };
  }

  return {
    props: { feed: "feed" },
  };
};

interface IFormValues {
  "First Name": string;
  phone: string;
  Age: number;
}
interface IData {
  phone: string;
  name: string;
  email: string;
}

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};

// The following component is an example of your existing Input Component
const Input = ({ label, register, required }: InputProps) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
);

type propsData = {
  seconds: string,
  minutes: string;
  hours: string;
  days: string;
  weeks: number;
};

export default function Home({ seconds, minutes, hours, days, weeks }: propsData) {
  // const [state, setState] = useState({});
  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [sent, setSend] = useState(false);
  const [isLoading, setLoading] = useState(false);

  // const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   setState((prevState) => ({ ...prevState, [name]: value }));
  // }

  const onSubmit = async (formData: any) => {
    setLoading(true);
    try {
      await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setLoading(false);
      setSend(true);
      setData(formData);
      // await Router.push("/drafts");
    } catch (error) {
      setSend(false);
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>
          New Wine Realty - Nigeria&apos;s Most Trusted Real Estate Company
        </title>
        <meta
          name="description"
          content="At New Wine Realty, we provide unique housing solutions with a host of highly secured and profitable real estate investment opportunities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/New Wine Realty_Nigeria's Most Trusted Real Estate Company.ico"
        />
      </Head>
      <DynamicPlugins days={days} hours={hours} minutes={minutes} seconds={seconds} />
      <main className="size1 bg-white where1-parent">
        <div
          className="flex-c-m bg-img1 size2 where1 overlay1 where2 respon2"
          style={{
            backgroundImage: `url(${bg.src})`,
            // width: "100%",
            // height: "100%",
          }}
        >
          <div className="wsize2 flex-w flex-c-m cd100 js-tilt">
            <div className="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15">
              <span className="l2-txt1 p-b-9 days">{days}</span>
              <span className="s2-txt4">Days</span>
            </div>

            <div className="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15">
              <span className="l2-txt1 p-b-9 hours">{hours}</span>
              <span className="s2-txt4">Hours</span>
            </div>

            <div className="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15">
              <span className="l2-txt1 p-b-9 minutes">{minutes}</span>
              <span className="s2-txt4">Minutes</span>
            </div>

            <div className="flex-col-c-m size6 bor2 m-l-10 m-r-10 m-t-15">
              <span className="l2-txt1 p-b-9 seconds">{weeks}</span>
              <span className="s2-txt4">Seconds</span>
            </div>
          </div>
        </div>
        <div className="size3 flex-col-sb flex-w p-l-75 p-r-75 p-t-45 p-b-45 respon1">
          <div className="wrap-pic1">
            <Image
              width="150"
              height="100"
              src="/New_Wine_Realty_Transparent_White.png"
              alt="LOGO"
            />
          </div>

          <div className="p-t-50 p-b-60">
            <p className="m1-txt1 p-b-10">
              We are <span className="m1-txt2">upgrading</span> to serve you
              better.
            </p>
            <p className="text-md p-b-20">
              For inquiries on our latest listing,{" "}
              {sent
                ? `you have filled the form successfully`
                : `kindly fill out the form
              below.`}
            </p>

            <form
              hidden={sent}
              onSubmit={handleSubmit(onSubmit)}
              className="contact100-form validate-form"
            >
              <div
                className="wrap-input100 m-b-10 validate-input"
                data-validate="Name is required"
              >
                <input
                  className="s2-txt1 placeholder0 input100"
                  type="text"
                  {...register("name")}
                  placeholder="Your Name"
                />
                <span className="focus-input100"></span>
              </div>

              <div
                className="wrap-input100 m-b-10 validate-input"
                data-validate="Email is required: ex@abc.xyz"
              >
                <input
                  className="s2-txt1 placeholder0 input100"
                  {...register("email")}
                  type="email"
                  placeholder="Email Address"
                />
                <span className="focus-input100"></span>
              </div>
              {/* <Phone label="phone" register={register} required /> */}
              <div
                className="wrap-input100 m-b-20 validate-input"
                data-validate="Phone is required: 0903450933"
              >
                <PhoneInputWithCountry
                  className="s2-txt1 placeholder0 input100"
                  placeholder="Enter phone number"
                  name="phone"
                  control={control}
                  rules={{ required: true }}
                />
                <span className="focus-input100"></span>
              </div>
              {/* <p>{data}</p> */}

              <div className="w-full">
                <button
                  type="submit"
                  disabled={isLoading || sent}
                  className="flex-c-m s2-txt2 size4 bg1 bor1 hov1 trans-04"
                >
                  {isLoading ? `Processing ...` : "Subscribe"}
                </button>
              </div>
            </form>
            <Yippey
              hidden={!sent}
              title="Subscribed"
              text={`${data.name} will be more than happy!`}
            />

            <p className="s2-txt3 p-t-18">
              And don’t worry, we hate spam too! You can unsubcribe at anytime.
            </p>
          </div>

          <div className="flex-w">
            <a
              href="https://www.facebook.com/newinerealty/"
              className="flex-c-m size5 bg3 how1 trans-04 m-r-5"
            >
              <i className="fa fa-facebook"></i>
            </a>

            <a
              href="https://www.instagram.com/newinerealty/"
              className="flex-c-m size5 bg5 how1 trans-04 m-r-5"
            >
              <i className="fa fa-instagram"></i>
            </a>

            <a
              href="https://www.linkedin.com/company/new-wine-realty/"
              className="flex-c-m size5 bg4 how1 trans-04 m-r-5"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
