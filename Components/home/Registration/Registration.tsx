import React, { useState } from "react";
import { useForm, Path, UseFormRegister, SubmitHandler } from "react-hook-form";
// import PhoneInput from "react-phone-number-input";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import Yippey from "../Yippey/Yippey";

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

const Registration = () => {
  // const [state, setState] = useState({});
  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      propertyType: "",
      minPrice: "",
      maxPrice: "",
      propertyCounts: "",
    },
  });

  const [data, setData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      propertyType: "",
      minPrice: "",
      maxPrice: "",
      propertyCounts: "",
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
  <div id="contact" data-aos="flip-down" data-aos-delay="1000" className="container-fluid bg-registration py-5 my-[90px] mx-0">
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-7 mb-5 mb-lg-0">
          <div className="mb-4">
            <h6 className="text-primary text-uppercase tracking-[5px]">
              FOR ENQUIRY:
            </h6>
            <h1 className="text-white">
              <span className="text-primary">Got Any Inquiry?</span> 
            </h1>
          </div>
          <p className="text-white">
            For inquiries on our latest listing, kindly fill out the form
          </p>
          {/* <ul className="list-inline text-white m-0">
            <li className="py-2">
              <i className="fa fa-check text-primary mr-3"></i>Labore eos amet
              dolor amet diam
            </li>
            <li className="py-2">
              <i className="fa fa-check text-primary mr-3"></i>Etsea et sit
              dolor amet ipsum
            </li>
            <li className="py-2">
              <i className="fa fa-check text-primary mr-3"></i>Diam dolor diam
              elitripsum vero.
            </li>
          </ul> */}
        </div>
        <div className="col-lg-5">
          <div className="card border-0">
            {/* <div className="card-header bg-primary text-center p-4">
              <h1 className="text-white m-0">For Enquiries</h1>
            </div> */}
            <div className="card-body rounded-bottom bg-white p-5">
              <form hidden={sent}
              onSubmit={handleSubmit(onSubmit)}
              className="contact100-form validate-form">
                <div className="form-group">
                  <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control p-4"
                    placeholder="First name"
                    {...register("firstName")}
                    required
                  />
                  <input
                    type="text"
                    className="form-control p-4"
                    placeholder="Last name"
                    {...register("lastName")}
                    required
                  />
                  </div>

                </div>
                {/* <div className="form-group">
                  <input
                    type="text"
                    className="form-control p-4"
                    placeholder="Last name"
                    {...register("lastName")}
                    required
                  />
                </div> */}
                <div className="form-group" data-validate="Phone is required: 0903450933">
                  <PhoneInputWithCountry
                    className="s2-txt1 placeholder0 form-control p-4"
                    placeholder="Enter phone number"
                    name="phone"
                    control={control}
                    rules={{ required: true }}
                  />
                  <span className="focus-input100"></span>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control p-4"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <select className="custom-select px-4 h-[47px]" {...register("propertyType")}>
                    <option value="" selected>Select Property Type</option>
                    <option value="1">Flat</option>
                    <option value="2">Duplex</option>
                  </select>
                </div>
                <div className="form-group">
                  <div className="input-group mb-3">
                  <input
                    type="number"
                    className="form-control p-4"
                    placeholder="Min Price"
                    {...register("minPrice")}
                    required
                  />

                  <input
                    type="number"
                    className="form-control p-4"
                    placeholder="Max Price"
                    {...register("maxPrice")}
                    required
                  />
                  </div>
                </div>
                {/* <div className="form-group">
                  <input
                    type="number"
                    className="form-control p-4"
                    placeholder="Max Price"
                    {...register("maxPrice")}
                    required
                  />
                </div> */}
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control p-4"
                    placeholder="Number of Beds"
                    {...register("propertyCounts")}
                    required
                  />
                </div>
                <div>
                  <button
                    className="btn btn-primary btn-block py-3"
                    type="submit"
                  >
                    {isLoading ? `Submitting ...` : "Submit"}
                  </button>
                </div>
              </form>
              <Yippey
                hidden={!sent}
                title="Awesome"
                text={`You have reached us successfully! expect feedback soon`}
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default Registration;
