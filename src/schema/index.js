import * as yup from 'yup'


export const CourseSchema = yup.object().shape({
    name:yup.string().required('required'),
    // category_id:yup.number().positive().required('required'),
    summary:yup.string().required('required')
})

export const validationCategory = yup.object({
    name:yup.string().required('Category name is required'),
    code: yup.string().required('Code is required'),
  });