import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const TaskForm = () => {
  const initialValues = {
    title: '',
    description: '',
    dueDate: '',
    priority: ''
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .required('Title is required'),
    description: Yup.string()
      .required('Description is required'),
    dueDate: Yup.date()
      .required('Due date is required'),
    priority: Yup.string()
      .oneOf(['low', 'medium', 'high'], 'Invalid priority')
      .required('Priority is required')
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="title">Title</label>
            <Field type="text" id="title" name="title" />
            <ErrorMessage name="title" />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <Field type="text" id="description" name="description" />
            <ErrorMessage name="description" />
          </div>
          <div>
            <label htmlFor="dueDate">Due Date</label>
            <Field type="date" id="dueDate" name="dueDate" />
            <ErrorMessage name="dueDate" />
          </div>
          <div>
            <label htmlFor="priority">Priority</label>
            <Field as="select" id="priority" name="priority">
              <option value="">Select a priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Field>
            <ErrorMessage name="priority" />
          </div>
          <button type="submit" disabled={isSubmitting}>Create Task</button>
        </Form>
      )}
    </Formik>
  );
}

export default TaskForm;
