import { FieldArray, FormikProvider, useFormik } from "formik";
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
} from "@/utils/constants";
import type { SetDetails } from "@/types/LogFormTypes";

const LogForm = () => {
	const validationSchema = Yup.object({
		date: Yup.date().required("date_is_required"),
		bodyPart: Yup.string().required("body_part_is_required"),
		sets: Yup.number().required("sets_is_required"),
	});

	const setDetail: SetDetails = {
		setNumber: undefined,
		weight: undefined,
		reps: undefined,
		weightMetric: "kg",
	};
	const formik = useFormik({
		initialValues: {
			date: undefined,
			bodyPart: "",

			exercises: [
				{
					name: "",
					sets: undefined,
					setDetails: [],
				},
			],
		},
		validationSchema,
		onSubmit: (_, { resetForm }) => {
			resetForm();
		},
	});

	const { values, errors, touched, handleSubmit, setFieldValue } = formik;

	const filteredExercisesOptions = exercisesOptions.filter((opt) =>
		values.bodyPart ? opt.bodyPart === values.bodyPart : true
	);
	return (
		<FormikProvider value={formik}>
			<form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
				<div className='flex gap-4'>
					{/* Date */}
					<div className='flex flex-col space-y-1'>
						<DatePicker
							value={values.date}
							onChange={(value) => setFieldValue("date", value)}
						/>
						{touched.date && errors?.date && (
							<span className='text-red-500 text-xs'>{errors.date}</span>
						)}
					</div>
					{/* Body Part */}
					<div className='flex flex-col space-y-1'>
						<Select
							value={values.bodyPart}
							onValueChange={(value) => setFieldValue("bodyPart", value)}
						>
							<SelectTrigger className='w-[200px]'>
								<SelectValue placeholder='select_body_part' />
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
							<span className='text-red-500 text-xs'>{errors.bodyPart}</span>
						)}
					</div>
					<Button type='submit'>submit</Button>
				</div>
				<div className='flex gap-4'>
					{/* Exercises */}
					<FieldArray name={"exercises"}>
						{({ remove, push }) => (
							<div>
								{values.exercises.map((exercise, index) => {
									console.log(
										"🚀 ~ {values.exercises.map ~ exercise:",
										exercise
									);
									return (
										<div className='flex items-center space-y-1' key={index}>
											<Select
												value={exercise.name}
												onValueChange={(value) =>
													setFieldValue(`exercises.${index}.name`, value)
												}
											>
												<SelectTrigger className='w-[200px]'>
													<SelectValue placeholder='select_exercises' />
												</SelectTrigger>
												<SelectContent>
													{filteredExercisesOptions.map((opt) => (
														<SelectItem key={opt.value} value={`${opt.value}`}>
															{opt.label}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
											{touched.bodyPart && errors.bodyPart && (
												<span className='text-red-500 text-xs'>
													{errors.bodyPart}
												</span>
											)}
											<div className='flex mx-4'>
												<Select
													value={exercise.sets}
													onValueChange={(value) => {
														setFieldValue(`exercise.${index}.sets`, value);
														const setDetails: SetDetails[] = [];
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
													<SelectTrigger className='w-[200px]'>
														<SelectValue placeholder='select_sets' />
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
													<span className='text-red-500 text-xs'>
														{errors.bodyPart}
													</span>
												)}
											</div>
											<FieldArray name={`exercises.${index}.setDetails`}>
												{() => (
													<div>
														{exercise.setDetails.map((set, setIndex) => {
															return (
																<div className='flex gap-4' key={setIndex}>
																	<div className='flex'>
																		<Input
																			type='number'
																			name={String(setDetail.weight)}
																			placeholder='weight'
																			className='w-[100px]'
																			min={1}
																		/>
																		{touched.bodyPart && errors.bodyPart && (
																			<span className='text-red-500 text-xs'>
																				{errors.bodyPart}
																			</span>
																		)}
																	</div>
																	<div className='flex   space-y-1'>
																		<Input
																			type='number'
																			placeholder='reps'
																			className='w-[100px]'
																			min={1}
																		/>
																		{touched.bodyPart && errors.bodyPart && (
																			<span className='text-red-500 text-xs'>
																				{errors.bodyPart}
																			</span>
																		)}
																	</div>
																</div>
															);
														})}
													</div>
												)}
											</FieldArray>
											<Button className='mx-4' onClick={() => remove(index)}>
												{" "}
												- remove_exercise
											</Button>
										</div>
									);
								})}
								<Button
									type='button'
									onClick={() =>
										push({
											name: "",
											sets: undefined,
											setDetails: [],
										})
									}
								>
									+ add_exercise
								</Button>
							</div>
						)}
					</FieldArray>

					{/* Sets */}
					{/* <div className='flex flex-col space-y-1'>
					<Select
						value={String(values.sets)}
						onValueChange={(value) => setFieldValue("sets", value)}
					>
						<SelectTrigger className='w-[200px]'>
							<SelectValue placeholder='select_sets' />
						</SelectTrigger>
						<SelectContent>
							{setOptions.map((opt) => (
								<SelectItem key={opt.value} value={`${opt.value}`}>
									{opt.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					{touched.bodyPart && errors.bodyPart && (
						<span className='text-red-500 text-xs'>{errors.bodyPart}</span>
					)}
				</div> */}
					{/* Weights and Reps */}
					{/* {Array.from(
					{ length: Number(values.sets) },
					(_, index) => index + 1
				).map((set) => (
					<div key={set}>
						<div className='flex flex-col space-y-1'>
							<Input
								type='number'
								placeholder='weight'
								className='w-[100px]'
								min={1}
							/>
							{touched.bodyPart && errors.bodyPart && (
								<span className='text-red-500 text-xs'>{errors.bodyPart}</span>
							)}
						</div>{" "}
						<div className='flex flex-col space-y-1'>
							<Input
								type='number'
								placeholder='reps'
								className='w-[100px]'
								min={1}
							/>
							{touched.bodyPart && errors.bodyPart && (
								<span className='text-red-500 text-xs'>{errors.bodyPart}</span>
							)}
						</div>
					</div>
				))} */}
				</div>
			</form>
		</FormikProvider>
	);
};

export default LogForm;
