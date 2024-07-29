import { Field, Formik,Form } from "formik";


const MoviesPage = () => {
    const handleBtn={

    }
  return (
    <Formik onSubmit={handleBtn}>
        <Form>
            <Field name="text" type="search"></Field>
            <button>Search</button>
        </Form>
    </Formik>
  )
};

export default MoviesPage;
