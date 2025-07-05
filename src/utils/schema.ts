import i18n from "i18next";
import * as Yup from "yup";

const { t } = i18n;

export const workoutDataValidationSchema = Yup.object({
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
