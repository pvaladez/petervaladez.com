import React from "react"
import styles from "../styles/pages/contact.module.scss"
import { Formik, Form, Field, ErrorMessage } from "formik"
import ReCAPTCHA from "react-google-recaptcha"

const ContactForm = () => {
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  const firstInputRef = React.useRef(null)
  React.useEffect(() => {
    firstInputRef.current.focus();
  },[firstInputRef])

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
        captcha: null,
      }}
      onSubmit={(values, actions) => {
        fetch("/contact", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": "contact",
            "g-recaptcha-response": values.captcha,
            ...values,
          }),
        })
          .then(() => {
            alert("Success")
            actions.resetForm()
          })
          .catch(() => {
            alert("Error")
          })
          .finally(() => actions.setSubmitting(false))
      }}
      validate={values => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        const errors = {}
        if (!values.name) {
          errors.name = "Name Required"
        }
        if (!values.email || !emailRegex.test(values.email)) {
          errors.email = "Valid Email Required"
        }
        if (!values.message) {
          errors.message = "Message Required"
        }
        if (values.captcha === null) {
          errors.captcha = "Please confirm you are not a spam bot 🤖💥"
        }
        return errors
      }}
    >
      {({ setFieldValue }) => (
        <Form name="contact" data-netlify={true} data-netlify-recaptcha={true}>
          <label htmlFor="name">Your Name: </label>
          <Field name="name" placeholder="WHAT.... is your naaame??? 🌉🧙" innerRef={firstInputRef} />
          <div className={styles.error}>
            <ErrorMessage name="name" />
          </div>

          <label htmlFor="email">Your Email: </label>
          <Field name="email" placeholder="your.email@emailprovider.yep" />
          <div className={styles.error}>
            <ErrorMessage name="email" />
          </div>

          <label htmlFor="message">Type Away!: </label>
          <Field
            name="message"
            component="textarea"
            placeholder="Hi!  It's a pleasure to meet you!"
          />
          <div className={styles.error}>
            <ErrorMessage name="message" />
          </div>

          <div className={styles.submit_row}>
            <div>
              {process.env.GATSBY_RECAPTCHA_KEY ? (
                <ReCAPTCHA
                  sitekey={process.env.GATSBY_RECAPTCHA_KEY}
                  onChange={token => {
                    setFieldValue("captcha", token)
                  }}
                />
              ) : (
                <h4  style={{marginTop: "1.1rem"}}>
                  reCaptcha Site Key missing... <br /> 
                  😔 Sorry the Contact Form won't work
                </h4>
              )}
              <div className={styles.error}>
                <ErrorMessage name="captcha" component="div" />
              </div>
            </div>
            <button type="submit" className={styles.submit}>
              Send
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm
