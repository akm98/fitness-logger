import {
	ErrorMessage,
	Field,
	FieldArray,
	Form,
	Formik,
	type FieldProps,
} from "formik";
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
} from "@/utils/Constants/staticOptions";
import type { SetData, WorkoutData } from "@/types/WorkoutTableTypes";
import { useTranslation } from "react-i18next";
import { useAuth } from "@clerk/clerk-react";
import { workoutDataValidationSchema } from "@/utils/schema";
import { useMutation } from "@tanstack/react-query";
import { createWorkout } from "@/services";
import { toast } from "sonner";

const WorkoutForm = () => {
	const { t } = useTranslation();
	const { userId } = useAuth();

	const setDetail: SetData = {
		setNumber: undefined,
		weight: undefined,
		reps: undefined,
	};

	const { error, isPending, mutate, isSuccess } = useMutation({
		mutationFn: createWorkout,
	});

	if (isSuccess) {
		toast.success(t("workout_created_successfully"));
	}
	if (error) {
		toast.error(t("error_creating_workout"));
	}
	if (isPending) {
		toast.info(t("creating_workout"));
	}
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
			validationSchema={workoutDataValidationSchema}
			onSubmit={(values, { resetForm }) => {
				const payload = {
					...(values as WorkoutData),
					user: userId ?? "Yaahiko",
				};
				console.log("Form submitted with values:", payload);
				mutate(payload);
				resetForm();
			}}
		>
			{({ values, errors, touched, setFieldValue }) => {
				const filteredExercisesOptions = exercisesOptions.filter((opt) =>
					values.bodyPart ? opt.bodyPart === values.bodyPart : true
				);
				return (
					<Form className='flex flex-col gap-4 '>
						<div className='flex gap-4'>
							{/* Date */}
							<div className='flex flex-col space-y-1'>
								<DatePicker
									value={values.date}
									onChange={(value) => setFieldValue("date", value)}
								/>
								{touched.date && errors?.date && (
									<span className='text-red-500 text-xs'>
										{String(errors.date)}
									</span>
								)}
							</div>
							{/* Body Part */}
							<div className='flex flex-col space-y-1'>
								<Select
									value={values.bodyPart}
									onValueChange={(value) => setFieldValue("bodyPart", value)}
								>
									<SelectTrigger className='w-[200px]'>
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
								<ErrorMessage
									component='p'
									className='text-red-500 text-xs'
									name={"bodyPart"}
								/>
							</div>
							<Button type='submit'>{t("submit")}</Button>
						</div>
						<div className='flex gap-4'>
							{/* Exercises */}
							<FieldArray name={"exercises"}>
								{({ remove, push }) => (
									<div>
										{values.exercises.map((exercise, index) => {
											return (
												<div
													className='flex items-center space-y-4'
													key={index}
												>
													<Field name={`exercises.${index}.name`}>
														{({ field }: FieldProps) => (
															<div>
																<Select
																	value={exercise.name}
																	onValueChange={(value) =>
																		setFieldValue(
																			`exercises.${index}.name`,
																			value
																		)
																	}
																>
																	<SelectTrigger className='w-[200px]'>
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
																<ErrorMessage
																	component='p'
																	className='text-red-500 text-xs'
																	name={field.name}
																/>
															</div>
														)}
													</Field>
													<Field name={`exercises.${index}.sets`}>
														{({ field }: FieldProps) => (
															<div className='mx-4'>
																<Select
																	value={String(exercise.sets ?? "")}
																	onValueChange={(value) => {
																		setFieldValue(
																			`exercises.${index}.sets`,
																			Number(value)
																		);
																		const setDetails: SetData[] = [];
																		Array.from({
																			length: Number(value),
																		}).forEach((_, i) => {
																			setDetails.push({
																				...setDetail,
																				setNumber: i + 1,
																			});
																		});
																		setFieldValue(
																			`exercises.${index}.setDetails`,
																			setDetails
																		);
																	}}
																>
																	<SelectTrigger className='w-[150px]'>
																		<SelectValue
																			placeholder={t("select_sets")}
																		/>
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
																<ErrorMessage
																	component='p'
																	className='text-red-500 text-xs'
																	name={field.name}
																/>
															</div>
														)}
													</Field>
													<Field name={`exercises.${index}.weightMetric`}>
														{({ field }: FieldProps) => (
															<div className='flex mr-4'>
																<Select
																	value={exercise.weightMetric}
																	onValueChange={(value) => {
																		setFieldValue(
																			`exercises.${index}.weightMetric`,
																			value
																		);
																	}}
																>
																	<SelectTrigger className='w-[100px]'>
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
																<ErrorMessage
																	component='p'
																	className='text-red-500 text-xs'
																	name={field.name}
																/>
															</div>
														)}
													</Field>

													<FieldArray name={`exercises.${index}.setDetails`}>
														{() => (
															<div>
																{exercise.setDetails.map((_, setIndex) => {
																	return (
																		<div className='flex gap-4' key={setIndex}>
																			<div className='flex'>
																				<Field
																					name={`exercises.${index}.setDetails.${setIndex}.weight`}
																				>
																					{({ field }: FieldProps) => {
																						return (
																							<div>
																								<Input
																									type='number'
																									placeholder={t("weight")}
																									className='w-[100px]'
																									min={1}
																									{...field}
																								/>
																								<ErrorMessage
																									name={field.name}
																									component='p'
																									className='text-red-500 text-xs'
																								/>
																							</div>
																						);
																					}}
																				</Field>
																			</div>
																			<div className='flex   space-y-1'>
																				<Field
																					name={`exercises.${index}.setDetails.${setIndex}.reps`}
																				>
																					{({ field }: FieldProps) => {
																						return (
																							<div>
																								<Input
																									type='number'
																									placeholder={t("reps")}
																									className='w-[100px]'
																									min={1}
																									{...field}
																								/>
																								<ErrorMessage
																									name={field.name}
																									component='p'
																									className='text-red-500 text-xs'
																								/>
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
														type='button'
														className='mx-4'
														onClick={() => remove(index)}
													>
														{" "}
														-{t("remove_exercise")}
													</Button>
												</div>
											);
										})}
										<Button
											className='my-4'
											type='button'
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

export default WorkoutForm;
