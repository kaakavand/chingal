import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ValidationInput from "../../../core/ValidationInput";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import RouteConfig from "./../../../config/router.json";

interface IFormInput {
  age: number;
  avatar: string;
  city: string;
  company: string;
  country: string;
  email: string;
  id: number;
  name: string;
  phoneNumber: string;
  street: string;
  zipcode: string;
  userName: string;
}

const profile = require("./../../../assets/images/image.png") as string;

const Form = ({ data }: any) => {
  const { register, handleSubmit, setValue, formState, getValues } =
    useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => mutate();
  const { id } = useParams();

  useEffect(() => {
    setValue("age", data?.data.age);
    setValue("name", data?.data.name);
    setValue("email", data?.data.email);
    setValue("phoneNumber", data?.data.phoneNumber);
    setValue("country", data?.data.country);
    setValue("city", data?.data.city);
    setValue("street", data?.data.street);
    setValue("zipcode", data?.data.zipcode);
    setValue("company", data?.data.company);
  }, [data]);

  const { mutate } = useMutation({
    mutationFn: (newTodo) => {
      // const formData = new FormData()
      // formData.append()
      return axios.put(RouteConfig.baseUrl + "users/" + id, getValues());
    },
  });

  const { mutate: deleteMethod } = useMutation({
    mutationFn: (newTodo) => {
      return axios.delete(RouteConfig.baseUrl + "users/" + id);
    },
  });

  return (
    <div className="w-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="bg-surface-100 shadow-surface-700 border rounded-2xl border-surface-300 md:w-[30rem] py-8 px-10"
      >
        <h3 className="text-surface-900 border-b-2 border-b-surface-300 pb-2 text-xl">
          ویرایش کاربر
        </h3>
        <figure className="w-28 h-28 rounded-full border-2 border-primary p-1 bg-surface-300 my-4 mx-auto">
          <img src={profile} alt="" />
        </figure>
        <div className="flex gap-4 mb-6">
          <ValidationInput
            register={register}
            label={"نام کاربری"}
            id={"name"}
            errors={formState.errors}
          />
          <ValidationInput
            register={register}
            label={"سن"}
            id={"age"}
            errors={formState.errors}
          />
        </div>
        <div className="flex gap-4 mb-6">
          <ValidationInput
            register={register}
            label={"ایمیل"}
            id={"email"}
            errors={formState.errors}
          />
          <ValidationInput
            register={register}
            label={"شماره تلفن"}
            id={"phoneNumber"}
            errors={formState.errors}
          />
        </div>
        <div className="sm:flex gap-4">
          <div className="flex gap-4 mb-6">
            <ValidationInput
              register={register}
              label={"کشور"}
              id={"country"}
              errors={formState.errors}
            />
            <ValidationInput
              register={register}
              label={"شهر"}
              id={"city"}
              errors={formState.errors}
            />
          </div>
          <div className="flex gap-4 mb-6">
            <ValidationInput
              register={register}
              label={"خیابان"}
              id={"street"}
              errors={formState.errors}
            />
            <ValidationInput
              register={register}
              label={"کد پستی"}
              id={"zipcode"}
              errors={formState.errors}
            />
          </div>
        </div>
        <div className="flex gap-4 mb-6">
          <ValidationInput
            register={register}
            label={"شرکت"}
            id={"company"}
            errors={formState.errors}
          />
        </div>
        <div className="flex gap-4 mb-6">
          <button
            type="submit"
            className="rounded-xl bg-primary text-surface-900 shadow shadow-primary w-full p-2"
          >
            ویرایش
          </button>
          <button
            className="rounded-xl bg-red text-surface-900 shadow shadow-red w-full p-2"
            onClick={() => deleteMethod()}
          >
            حذف
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
