import { Field, FieldArray, Form, Formik, type FieldProps } from "formik";
import * as Yup from "yup";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { DatePicker } from "../ui/DatePicker";
import { Input } from "../ui/input";
import {
  bodyPartsOptions,
  exercisesOptions,
  setOptions,
  weightMetricOptions,
} from "@/utils/constants";
import type { SetData, WorkoutData } from "@/types/LogTableTypes";
import type { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  setFormValues: Dispatch<SetStateAction<WorkoutData[]>>;
}
const LogForm = ({ setFormValues }: Props) => {
  const { t } = useTranslation();
  const validationSchema = Yup.object({
    date: Yup.date().required(t("date_is_required")),
    bodyPart: Yup.string().required(t("body_part_is_required")),
    exercises: Yup.array().of(
      Yup.object({
        name: Yup.string().required(t("exercise_name_is_required")),
        weightMetric: Yup.string().required(t("weight_metric_is_required")),
        sets: Yup.number().required(t("number_of_sets_is_required")),
        setDetails: Yup.array().of(
          Yup.object({
            setNumber: Yup.number().required(t("set_number_is_required")),
            weight: Yup.number()
              .required(t("weight_is_required"))
              .min(1, t("weight_must_be_positive")),
            reps: Yup.number()
              .required(t("reps_are_required"))
              .min(1, t("reps_must_be_positive")),
          })
        ),
      })
    ),
  });

  const setDetail: SetData = {
    setNumber: undefined,
    weight: undefined,
    reps: undefined,
  };

  return (
    <Formik
      initialValues={{
        date: new Date(),
        bodyPart: "",
        exercises: [
          {
            name: "",
            weightMetric: "kg",
            sets: undefined,
            setDetails: [setDetail],
          },
        ],
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
				console.log("Form submitted with values:", values);
        setFormValues((prev: WorkoutData[]) => [
          ...prev,
          values as WorkoutData,
        ]);
        resetForm();
      }}
    >
      {({ values, errors, touched, setFieldValue }) => {
        const filteredExercisesOptions = exercisesOptions.filter((opt) =>
          values.bodyPart ? opt.bodyPart === values.bodyPart : true
        );
        return (
          <Form className="flex flex-col gap-4 ">
            <div className="flex gap-4">
              {/* Date */}
              <div className="flex flex-col space-y-1">
                <DatePicker
                  value={values.date}
                  onChange={(value) => setFieldValue("date", value)}
                />
                {touched.date && errors?.date && (
                  <span className="text-red-500 text-xs">
                    {String(errors.date)}
                  </span>
                )}
              </div>
              {/* Body Part */}
              <div className="flex flex-col space-y-1">
                <Select
                  value={values.bodyPart}
                  onValueChange={(value) => setFieldValue("bodyPart", value)}
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder={t("select_body_part")} />
                  </SelectTrigger>
                  <SelectContent>
                    {bodyPartsOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {touched.bodyPart && errors.bodyPart && (
                  <span className="text-red-500 text-xs">
                    {errors.bodyPart}
                  </span>
                )}
              </div>
              <Button type="submit">{t("submit")}</Button>
            </div>
            <div className="flex gap-4">
              {/* Exercises */}
              <FieldArray name={"exercises"}>
                {({ remove, push }) => (
                  <div>
                    {values.exercises.map((exercise, index) => {
                      return (
                        <div
                          className="flex items-center space-y-4"
                          key={index}
                        >
                          <Select
                            value={exercise.name}
                            onValueChange={(value) =>
                              setFieldValue(`exercises.${index}.name`, value)
                            }
                          >
                            <SelectTrigger className="w-[200px]">
                              <SelectValue
                                placeholder={t("select_exercises")}
                              />
                            </SelectTrigger>
                            <SelectContent>
                              {filteredExercisesOptions.map((opt) => (
                                <SelectItem
                                  key={opt.value}
                                  value={`${opt.value}`}
                                >
                                  {opt.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {touched.bodyPart && errors.bodyPart && (
                            <span className="text-red-500 text-xs">
                              {errors.bodyPart}
                            </span>
                          )}
                          <div className="flex mx-4">
                            <Select
                              value={String(exercise.sets ?? "")}
                              onValueChange={(value) => {
                                setFieldValue(
                                  `exercises.${index}.sets`,
                                  Number(value)
                                );
                                const setDetails: SetData[] = [];
                                Array.from({ length: Number(value) }).forEach(
                                  (_, i) => {
                                    setDetails.push({
                                      ...setDetail,
                                      setNumber: i + 1,
                                    });
                                  }
                                );
                                setFieldValue(
                                  `exercises.${index}.setDetails`,
                                  setDetails
                                );
                              }}
                            >
                              <SelectTrigger className="w-[150px]">
                                <SelectValue placeholder={t("select_sets")} />
                              </SelectTrigger>
                              <SelectContent>
                                {setOptions.map((opt) => (
                                  <SelectItem
                                    key={opt.value}
                                    value={`${opt.value}`}
                                  >
                                    {opt.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {touched.bodyPart && errors.bodyPart && (
                              <span className="text-red-500 text-xs">
                                {errors.bodyPart}
                              </span>
                            )}
                          </div>
                          <div className="flex mr-4">
                            <Select
                              value={exercise.weightMetric}
                              onValueChange={(value) => {
                                setFieldValue(
                                  `exercises.${index}.weightMetric`,
                                  value
                                );
                              }}
                            >
                              <SelectTrigger className="w-[100px]">
                                <SelectValue
                                  placeholder={t("select_weight_metric")}
                                />
                              </SelectTrigger>
                              <SelectContent>
                                {weightMetricOptions.map((opt) => (
                                  <SelectItem
                                    key={opt.value}
                                    value={`${opt.value}`}
                                  >
                                    {opt.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            {touched.bodyPart && errors.bodyPart && (
                              <span className="text-red-500 text-xs">
                                {errors.bodyPart}
                              </span>
                            )}
                          </div>
                          <FieldArray name={`exercises.${index}.setDetails`}>
                            {() => (
                              <div>
                                {exercise.setDetails.map((_, setIndex) => {
                                  return (
                                    <div className="flex gap-4" key={setIndex}>
                                      <div className="flex">
                                        <Field
                                          name={`exercises.${index}.setDetails.${setIndex}.weight`}
                                        >
                                          {({ field, meta }: FieldProps) => {
                                            return (
                                              <div>
                                                <Input
                                                  type="number"
                                                  placeholder={t("weight")}
                                                  className="w-[100px]"
                                                  min={1}
                                                  {...field}
                                                />
                                                {meta.touched && meta.error && (
                                                  <span className="text-red-500 text-xs">
                                                    {meta.error}
                                                  </span>
                                                )}
                                              </div>
                                            );
                                          }}
                                        </Field>
                                      </div>
                                      <div className="flex   space-y-1">
                                        <Field
                                          name={`exercises.${index}.setDetails.${setIndex}.reps`}
                                        >
                                          {({ field, meta }: FieldProps) => {
                                            return (
                                              <div>
                                                <Input
                                                  type="number"
                                                  placeholder={t("reps")}
                                                  className="w-[100px]"
                                                  min={1}
                                                  {...field}
                                                />
                                                {meta.touched && meta.error && (
                                                  <span className="text-red-500 text-xs">
                                                    {meta.error}
                                                  </span>
                                                )}
                                              </div>
                                            );
                                          }}
                                        </Field>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </FieldArray>
                          <Button
                            type="button"
                            className="mx-4"
                            onClick={() => remove(index)}
                          >
                            {" "}
                            -{t("remove_exercise")}
                          </Button>
                        </div>
                      );
                    })}
                    <Button
                      className="my-4"
                      type="button"
                      onClick={() =>
                        push({
                          name: "",
                          sets: undefined,
                          setDetails: [],
                        })
                      }
                    >
                      + {t("add_exercise")}
                    </Button>
                  </div>
                )}
              </FieldArray>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LogForm;
