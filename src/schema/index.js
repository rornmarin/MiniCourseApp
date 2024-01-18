import * as Yup from 'yup'


export const validateCourse = Yup.object().shape({
    name: Yup.string()
        .min(1, "Name must be at least 3 character ")
        .required(" Course Name is Required *"),
    summary: Yup.string()
        .min(1, "summary must be at least 5 character ")
        .required(" Course Summary is Required *"),
    category_id: Yup.string().required(" Course Category is Required *"),
    chapters: Yup.array().of(
        Yup.object().shape({
        name: Yup.string().required(" Chapters Name is Required *"),
        summary: Yup.string().required("Chapters  Summary is Required *"),
        lessons: Yup.array().of(
            Yup.object().shape({
            name: Yup.string().required(" Lesson Name is Required *"),
            summary: Yup.string().required("Lesson Summary is Required *"),
            })
        ),
        })
  ),
})

export const validationCategory = Yup.object({
    name:Yup.string()
    .min(1, "Name must be at least 3 chapter ")
    .required('Category name is required *'),
    code: Yup.number().required('Code is required *'),
  });