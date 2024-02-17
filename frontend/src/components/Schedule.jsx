<<<<<<< HEAD
import React from 'react';
import styles from './Schedule.module.css';

const Schedule = () => {
  return (
    <div className={styles.scheduleContainer}>
      {/* Day 0 */}
      <div className={styles.scheduleHeader}>
        PRE REVELS 2024: DAY 0 (MARCH 3, 2024)
      </div>
      <table className={styles.scheduleTable}>
        <thead>
          <tr className={styles.rowDivider}>
            <th className={styles.columnDivider}>Category</th>
            <th className={styles.columnDivider}>Event</th>
            <th className={styles.columnDivider}>Venue</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.columnDivider}>HUMAN RESOURCE DEPARTMENT</td>
            <td className={styles.columnDivider}>MOVIE NIGHT</td>
            <td className={styles.columnDivider}>Amphitheatre</td>
            <td>9:00-11:30</td>
          </tr>
          <tr>
            <td className={styles.columnDivider}>DRAMEBAAZ</td>
            <td className={styles.columnDivider}>CURTAIN CALL - ROUND 1</td>
            <td className={styles.columnDivider}>Library Auditorium</td>
            <td>5:30-8:30</td>
          </tr>
          <tr>
            <td className={styles.columnDivider}>CRESCENDO</td>
            <td className={styles.columnDivider}>ROCK MOB</td>
            <td className={styles.columnDivider}>Student Plaza</td>
            <td>8:00-9:30</td>
          </tr>
        </tbody>
      </table>

      {/* Day 1 */}
      <div className={styles.scheduleHeader}>
        PRE REVELS 2024: DAY 1 (MARCH 4, 2024)
      </div>
      <table className={styles.scheduleTable}>
        <thead>
          <tr className={styles.rowDivider}>
            <th className={styles.columnDivider}>Category</th>
            <th className={styles.columnDivider}>Event</th>
            <th className={styles.columnDivider}>Venue</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.columnDivider}>HUMAN RESOURCE DEPARTMENT</td>
            <td className={styles.columnDivider}>CC NIGHT</td>
            <td className={styles.columnDivider}>AB-1 Quadrangle</td>
            <td>6:30-9:00</td>
          </tr>
          {/* Add more Day 1 events here */}
        </tbody>
      </table>

      {/* Day 2 */}
      <div className={styles.scheduleHeader}>
        PRE REVELS 2024: DAY 2 (MARCH 5, 2024)
      </div>
      <table className={styles.scheduleTable}>
        <thead>
          <tr className={styles.rowDivider}>
            <th className={styles.columnDivider}>Category</th>
            <th className={styles.columnDivider}>Event</th>
            <th className={styles.columnDivider}>Venue</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.columnDivider}></td>
            <td className={styles.columnDivider}>CULTURAL PARADE</td>
            <td className={styles.columnDivider}>Chemical Block Lane</td>
            <td className={styles.columnDivider}>5:00-6:15</td>
          </tr>
          <tr>
            <td className={styles.columnDivider}></td>
            <td className={styles.columnDivider}>REVELS INAUGURAL</td>
            <td className={styles.columnDivider}>AB1 Quadrangle</td>
            <td className={styles.columnDivider}>6:30-8:00</td>
          </tr>
        </tbody>
      </table>

      {/* Day 3 */}
      <div className={styles.scheduleHeader}>
        REVELS 2024: DAY 1 (MARCH 6, 2024)
      </div>
      <table className={styles.scheduleTable}>
        <thead>
          <tr className={styles.rowDivider}>
            <th className={styles.columnDivider}>Category</th>
            <th className={styles.columnDivider}>Event</th>
            <th className={styles.columnDivider}>Venue</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.columnDivider}>AMPERSAND</td>
            <td className={styles.columnDivider}>BACK TO FUTURE - ROUND 1</td>
            <td className={styles.columnDivider}>AB-5 206</td>
            <td>1:00-3:00</td>
          </tr>
          <tr>
            <td className={styles.columnDivider}>ANIMANIA</td>
            <td className={styles.columnDivider}>CHUNIN EXAM - ROUND 1</td>
            <td className={styles.columnDivider}>AB-3 203</td>
            <td>1:00-4:00</td>
          </tr>
          <tr>
            <td className={styles.columnDivider}rowSpan="2">ANUBHUTI</td>
            <td className={styles.columnDivider}>ANTAKSHARI - ROUND 1</td>
            <td className={styles.columnDivider}>AB-3 303</td>
            <td>1:00-2:00</td>
          </tr>
          <tr>
            <td className={styles.columnDivider}>LEHZA - ROUND 1</td>
            <td className={styles.columnDivider}>AB-3 304, 305</td>
            <td className={styles.columnDivider}>2:00-3:30</td>
          </tr>
          <tr>
            <td className={styles.columnDivider}>CRESCENDO</td>
            <td className={styles.columnDivider}>BIG BAND THEORY - ROUND 1</td>
            <td className={styles.columnDivider}>Student Plaza Stage</td>
            <td>1:00-4:00</td>
          </tr>
          <tr>
            <td className={styles.columnDivider}rowSpan="2">DRAMEBAAZ</td>
            <td className={styles.columnDivider}>CHARADES</td>
            <td className={styles.columnDivider}>AB-3 202</td>
            <td>1:00-3:00</td>
          </tr>
          <tr>
            <td className={styles.columnDivider}>MAD ADS</td>
            <td className={styles.columnDivider}>AB-3 303</td>
            <td className={styles.columnDivider}>3:00-5:00</td>
          </tr>
          <tr>
            <td className={styles.columnDivider}rowSpan="7">ERGO</td>
            <td className={styles.columnDivider}>JUST A MINUTE - ROUND 1</td>
            <td className={styles.columnDivider}>AB-3 405</td>
            <td>1:00-2:00</td>
          </tr>
          <tr>
            <td className={styles.columnDivider}>JUST A MINUTE - ROUND 2</td>
            <td className={styles.columnDivider}>AB-3 405</td>
            <td>2:00-3:00</td>
          </tr>
          <tr>
            <td className={styles.columnDivider}>POTPOURRI - ROUND 1</td>
            <td className={styles.columnDivider}>AB-3 403</td>
            <td className={styles.columnDivider}>2:00-3:30</td>
          </tr>
          <tr>
            <td className={styles.columnDivider}>POTPOURRI - ROUND 2</td>
            <td className={styles.columnDivider}>AB-3 403</td>
            <td>3:30-5:00</td>
          </tr>
          <tr>
            <td className={styles.columnDivider}>DEBATE TOURNAMENT - ROUND 1</td>
            <td className={styles.columnDivider}>AB-3 404</td>
            <td className={styles.columnDivider}>1:00-5:00</td>
          </tr>
          <tr>
            <td className={styles.columnDivider}>DEBATE TOURNAMENT - ROUND 2</td>
            <td className={styles.columnDivider}>AB-3 404</td>
            <td className={styles.columnDivider}>1:00-5:00</td>
          </tr>
          <tr>
            <td className={styles.columnDivider}>DEBATE TOURNAMENT - ROUND 3</td>
            <td className={styles.columnDivider}>AB-3 404</td>
            <td className={styles.columnDivider}>1:00-5:00</td>
          </tr>
          <tr>
            <td className={styles.columnDivider}rowSpan="2">FOOTLOOSE</td>
            <td className={styles.columnDivider}>SOLO DANCE-WESTERN ROUND 1</td>
            <td className={styles.columnDivider}>Library Auditorium</td>
            <td>1:00-2:30</td>
          </tr>
          <tr>
            <td className={styles.columnDivider}>SOLO DANCE-EASTERN ROUND 1</td>
            <td className={styles.columnDivider}>Library Auditorium</td>
            <td>2:30-4:00</td>
          </tr>
          <tr>
            <td className={styles.columnDivider}rowSpan="2">IRIDESCENT</td>
            <td className={styles.columnDivider}>JEOPARDY - ROUND 1</td>
            <td className={styles.columnDivider}>AB-5 209, 210</td>
            <td>4:00-5:00</td>
          </tr>
          <tr>
            <td className={styles.columnDivider}>NETFLIX AND NO CHILL - ROUND 1</td>
            <td className={styles.columnDivider}>AB-5 204, 205</td>
            <td className={styles.columnDivider}>2:00-3:00</td>
          </tr>
          <tr>
            <td className={styles.columnDivider}rowSpan="5">KALAKRITI</td>
            <td className={styles.columnDivider}>SKETCHORAMA - ROUND 1</td>
            <td className={styles.columnDivider}>AB-5 207</td>
            <td>1:00-1:30</td>
          </tr>
          <tr>
            <td className={styles.columnDivider}>SKETCHORAMA - ROUND 2</td>
            <td className={styles.columnDivider}>AB-5 207</td>
            <td>1:30-2:00</td>
          </tr>
          <tr>
            <td className={styles.columnDivider}>SKETCHORAMA - ROUND 3</td>
            <td className={styles.columnDivider}>AB-5 207</td>
            <td>2:00-2:30</td>
          </tr>
          <tr>
            <td className={styles.columnDivider}>SKETCHORAMA - ROUND 4</td>
            <td className={styles.columnDivider}>AB-5 207</td>
            <td>2:30-3:00</td>
          </tr>
          <tr>
            <td className={styles.columnDivider}>PIXELQUEST</td>
            <td className={styles.columnDivider}>AB-5 211</td>
            <td className={styles.columnDivider}>2:00-4:00</td>
          </tr>
          <tr>
            <td className={styles.columnDivider}rowSpan="2">LENSATION</td>
            <td className={styles.columnDivider}>PHOTO STORIES</td>
            <td className={styles.columnDivider}>AB-3 204, 205</td>
            <td>1:00-3:00</td>
          </tr>
          <tr>
            <td className={styles.columnDivider}>PHOTO EXHIBIT - ROUND 1</td>
            <td className={styles.columnDivider}>AB-3 lobby</td>
            <td className={styles.columnDivider}>1:00-5:00</td>
          </tr>
          <tr>
            <td className={styles.columnDivider}rowSpan="2">XVENTURE</td>
            <td className={styles.columnDivider}>HURDLE HAVEN - DAY 1</td>
            <td className={styles.columnDivider}>NCC Ground Behind 10th Block</td>
            <td>1:00-5:00</td>
          </tr>
          <tr>
            <td className={styles.columnDivider}>LIGHT STRIKE - DAY 1</td>
            <td className={styles.columnDivider}>AB-5 310B</td>
            <td className={styles.columnDivider}>1:00-5:00</td>
          </tr>
        </tbody>

      </table>

      {/* Day 4 */}
      <div className={styles.scheduleHeader}>
        REVELS 2024: DAY 2 (MARCH 7, 2024)
      </div>
      <table className={styles.scheduleTable}>
        <thead>
          <tr className={styles.rowDivider}>
            <th className={styles.columnDivider}>Category</th>
            <th className={styles.columnDivider}>Event</th>
            <th className={styles.columnDivider}>Venue</th>
            <th>Time</th>
          </tr>
        </thead>
      </table>

    </div>
  );
=======
import React from "react";

const Schedule = () => {
  return <div>Schedule</div>;
>>>>>>> 7ed8d05ba70f42f3cf6e79d6610b9002658b8fed
};

export default Schedule;
