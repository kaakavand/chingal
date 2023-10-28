import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ValidationInput from "../../../core/ValidationInput";

interface IFormInput {
  firstName: string;
  userName: string;
}

const Form = ({ data }: any) => {
  const { register, handleSubmit, setValue, formState } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  useEffect(() => {}, [data]);


  return (
    <div className="w-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="bg-surface-100 shadow-surface-700 border rounded-2xl border-surface-300 w-2/6 py-8 px-10"
      >
        <h3 className="text-surface-900 border-b-2 border-b-surface-300 pb-2 text-xl">
          ویرایش کاربر
        </h3>
        <figure className="w-28 h-28 rounded-full bg-surface-300 my-4">
          <img src="" alt="" />
        </figure>
        <div className="flex gap-4 mb-6">
          <ValidationInput
            value={""}
            register={register}
            label={"نام کاربری"}
            id={"userName"}
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
          <button className="rounded-xl bg-red text-surface-900 shadow shadow-red w-full p-2">
            حذف
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
