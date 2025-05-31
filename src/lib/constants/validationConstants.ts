import * as Yup from "yup"

export const TODO_VALIDATION = Yup.object().shape({
    title: Yup.string()
      .required("Please provide title"),
    description: Yup.string()
      .min(10, "Description is too short- should be 10 chars minimum.")
      .required("Please provide Description"),
  });