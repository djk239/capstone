import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from  "./Reservation.module.css";

function Reservation() {
  const formik = useFormik({
    initialValues: {
      date: "",
      time: "5:00pm",
      guests: 1,
      occasion: "Birthday",
      reservationName: "",
    },
    validationSchema: Yup.object({
      date: Yup.date().required("Date is required"),
      time: Yup.string().required("Time is required"),
      guests: Yup.number().required("Number of guests is required").min(1, "Must be at least 1").max(10, "Cannot bring more than 10 guests"),
      occasion: Yup.string().required("Occasion is required"),
      reservationName: Yup.string().required("Name for reservation is required"),
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.head}>Book a Reservation</h1>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <label htmlFor="date">Select a date: </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.date && formik.errors.date ? (
          <div className={styles.error}>{formik.errors.date}</div>
        ) : null}

        <label htmlFor="time">Time</label>
        <select
          id="time"
          name="time"
          value={formik.values.time}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option>5:00pm</option>
          <option>6:00pm</option>
          <option>7:00pm</option>
          <option>8:00pm</option>
          <option>9:00pm</option>
          <option>10:00pm</option>
        </select>
        {formik.touched.time && formik.errors.time ? (
          <div className={styles.error}>{formik.errors.time}</div>
        ) : null}

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          placeholder="1"
          min="1"
          max="10"
          value={formik.values.guests}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.guests && formik.errors.guests ? (
          <div className={styles.error}>{formik.errors.guests}</div>
        ) : null}

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formik.values.occasion}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Other</option>
        </select>
        {formik.touched.occasion && formik.errors.occasion ? (
          <div className={styles.error}>{formik.errors.occasion}</div>
        ) : null}

        <label htmlFor="reservationName">Name for reservation</label>
        <input
          type="text"
          id="reservationName"
          name="reservationName"
          value={formik.values.reservationName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.reservationName && formik.errors.reservationName ? (
          <div className={styles.error}>{formik.errors.reservationName}</div>
        ) : null}

        <button className={styles.button} type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Reservation;
