import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "./Schedule.module.css";

const Schedule = () => {
  return (
    <>
      <Navbar />
      <Footer />
      <div
        className="mt-[20px] mb-[80px]"
        style={{
          height: "100%",
        }}
      >
        <div className={styles.scheduleContainer}>
          <div className={styles.dayContainer}>
            <div className={styles.scheduleHeader}>
              PRE REVELS 2024: DAY 0 (MARCH 2, 2024)
            </div>

            <div className={styles.scheduleTableContainer}>
              <table className={styles.scheduleTable}>
                <thead>
                  <tr className={styles.rowDivider}>
                    <th className={styles.columnDivider}>Event</th>
                    <th className={styles.columnDivider}>Venue</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={styles.columnDivider}>ACOUSTIC NIGHT</td>
                    <td className={styles.columnDivider}>
                      Student Plaza Stage
                    </td>
                    <td>7:00pm-10:00pm</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>ORIGAMI</td>
                    <td className={styles.columnDivider}>AB-3 104</td>
                    <td>5:30pm-7:30pm</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>CHILDHOOD GAMES</td>
                    <td className={styles.columnDivider}>Student Plaza</td>
                    <td>5:30pm-7:30pm</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>KANNADA WORKSHOP</td>
                    <td className={styles.columnDivider}>AB-3 103</td>
                    <td>5:30pm-7:30pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Day 0 */}
          <div className={styles.dayContainer}>
            <div className={`${styles.scheduleHeader}`}>
              PRE REVELS 2024: DAY 1 (MARCH 3, 2024)
            </div>

            <div className={styles.scheduleTableContainer}>
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
                    <td className={styles.columnDivider}>
                      HUMAN RESOURCE DEPARTMENT
                    </td>
                    <td className={styles.columnDivider}>MOVIE NIGHT</td>
                    <td className={styles.columnDivider}>Amphitheatre</td>
                    <td>9:00-11:30</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>DRAMEBAAZ</td>
                    <td className={styles.columnDivider}>
                      CURTAIN CALL - ROUND 1
                    </td>
                    <td className={styles.columnDivider}>Library Auditorium</td>
                    <td>5:30-8:30</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>CRESCENDO</td>
                    <td className={styles.columnDivider}>ROCK MOB</td>
                    <td className={styles.columnDivider}>Student Plaza</td>
                    <td>8:00-9:30</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}></td>
                    <td className={styles.columnDivider}>TRIP PLANNING</td>
                    <td className={styles.columnDivider}>AB-3 103</td>
                    <td>9:00am-11:30am</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}></td>
                    <td className={styles.columnDivider}>BALL DANCING</td>
                    <td className={styles.columnDivider}>AB-5 ECE Foyer</td>
                    <td>7:00pm-9:30pm</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}></td>
                    <td className={styles.columnDivider}>CALLIGRAPHY</td>
                    <td className={styles.columnDivider}>AB-3 104</td>
                    <td>3:00pm-5:00pm</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}></td>
                    <td className={styles.columnDivider}>ASTROPHOTOGRAPHY</td>
                    <td className={styles.columnDivider}>MIT Ground</td>
                    <td>9:00pm-12:00am</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={styles.dayContainer}>
            <div className={`${styles.scheduleHeader}`}>
              PRE REVELS 2024: DAY 2 (MARCH 4, 2024)
            </div>
            <div className={styles.scheduleTableContainer}>
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
                    <td className={styles.columnDivider}>
                      HUMAN RESOURCE DEPARTMENT
                    </td>
                    <td className={styles.columnDivider}>CC NIGHT</td>
                    <td className={styles.columnDivider}>AB-1 Quadrangle</td>
                    <td>6:30-9:00</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className={styles.columnDivider}>STANDUP WORKSHOP</td>
                    <td className={styles.columnDivider}>MV Seminar Hall</td>
                    <td>6:30-9:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Day 2 */}
          <div className={styles.dayContainer}>
            <div className={styles.scheduleHeader}>
              PRE REVELS 2024: DAY 3 (MARCH 5, 2024)
            </div>
            <div className={styles.scheduleTableContainer}>
              <table className={styles.scheduleTable}>
                <thead>
                  <tr className={styles.rowDivider}>
                    <th className={styles.columnDivider}>Event</th>
                    <th className={styles.columnDivider}>Venue</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={styles.columnDivider}>CULTURAL PARADE</td>
                    <td className={styles.columnDivider}>
                      Chemical Block Lane
                    </td>
                    <td className={styles.columnDivider}>5:00-6:15</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>REVELS INAUGURAL</td>
                    <td className={styles.columnDivider}>AB1 Quadrangle</td>
                    <td className={styles.columnDivider}>6:30-8:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Day 3 */}
          <div className={styles.dayContainer}>
            <div className={styles.scheduleHeader}>
              REVELS 2024: DAY 1 (MARCH 6, 2024)
            </div>
            <div className={styles.scheduleTableContainer}>
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
                    <td className={styles.columnDivider}>
                      BACK TO FUTURE - ROUND 1
                    </td>
                    <td className={styles.columnDivider}>AB-5 206</td>
                    <td>1:00-3:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>ANIMANIA</td>
                    <td className={styles.columnDivider}>
                      CHUNIN EXAM - ROUND 1
                    </td>
                    <td className={styles.columnDivider}>AB-3 203</td>
                    <td>1:00-4:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider} rowSpan="3">
                      ANUBHUTI
                    </td>
                    <td className={styles.columnDivider}>
                      ANTAKSHARI - ROUND 1
                    </td>
                    <td className={styles.columnDivider}>AB-3 303</td>
                    <td>1:00-2:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      ANTAKSHARI - ROUND 2
                    </td>
                    <td className={styles.columnDivider}>AB-3 303</td>
                    <td>2:30-4:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>LEHZA - ROUND 1</td>
                    <td className={styles.columnDivider}>AB-3 304, 305</td>
                    <td className={styles.columnDivider}>2:00-3:30</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>CRESCENDO</td>
                    <td className={styles.columnDivider}>
                      BIG BAND THEORY - ROUND 1
                    </td>
                    <td className={styles.columnDivider}>
                      Student Plaza Stage
                    </td>
                    <td>1:00-4:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider} rowSpan="3">
                      DRAMEBAAZ
                    </td>
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
                    <td className={styles.columnDivider}>UNPLUGGED</td>
                    <td className={styles.columnDivider}>
                      Student Plaza Stage
                    </td>
                    <td className={styles.columnDivider}>4:00pm-7:00pm</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider} rowSpan="7">
                      ERGO
                    </td>
                    <td className={styles.columnDivider}>
                      JUST A MINUTE - ROUND 1
                    </td>
                    <td className={styles.columnDivider} rowSpan="2">
                      AB-3 405
                    </td>
                    <td>1:00-2:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      JUST A MINUTE - ROUND 2
                    </td>
                    <td>2:00-3:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      POTPOURRI - ROUND 1
                    </td>
                    <td className={styles.columnDivider} rowSpan="2">
                      AB-3 403
                    </td>
                    <td className={styles.columnDivider}>2:00-3:30</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      POTPOURRI - ROUND 2
                    </td>
                    <td>3:30-5:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      DEBATE TOURNAMENT - ROUND 1
                    </td>
                    <td className={styles.columnDivider} rowSpan="3">
                      AB-3 404
                    </td>
                    <td className={styles.columnDivider} rowSpan="3">
                      1:00-5:00
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      DEBATE TOURNAMENT - ROUND 2
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      DEBATE TOURNAMENT - ROUND 3
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider} rowSpan="2">
                      HAUTE COUTURE
                    </td>
                    <td className={styles.columnDivider}>
                      REVELS ROYALTY - ROUND 1
                    </td>
                    <td className={styles.columnDivider} rowSpan="2">
                      MV Seminar Hall
                    </td>
                    <td className={styles.columnDivider} rowSpan="2">
                      1:00pm-6:00pm
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      REVELS ROYALTY - ROUND 2
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider} rowSpan="2">
                      FOOTLOOSE
                    </td>
                    <td className={styles.columnDivider}>
                      SOLO DANCE-WESTERN ROUND 1
                    </td>
                    <td className={styles.columnDivider} rowSpan="2">
                      Library Auditorium
                    </td>
                    <td>1:00-2:30</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      SOLO DANCE-EASTERN ROUND 1
                    </td>
                    <td>2:30-4:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider} rowSpan="2">
                      IRIDESCENT
                    </td>
                    <td className={styles.columnDivider}>JEOPARDY - ROUND 1</td>
                    <td className={styles.columnDivider}>AB-5 209, 210</td>
                    <td>4:00-5:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      NETFLIX AND NO CHILL - ROUND 1
                    </td>
                    <td className={styles.columnDivider}>AB-5 204, 205</td>
                    <td className={styles.columnDivider}>2:00-3:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider} rowSpan="5">
                      KALAKRITI
                    </td>
                    <td className={styles.columnDivider}>
                      SKETCHORAMA - ROUND 1
                    </td>
                    <td className={styles.columnDivider} rowSpan="4">
                      AB-5 207
                    </td>
                    <td>1:00-1:30</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      SKETCHORAMA - ROUND 2
                    </td>
                    <td>1:30-2:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      SKETCHORAMA - ROUND 3
                    </td>
                    <td>2:00-2:30</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      SKETCHORAMA - ROUND 4
                    </td>
                    <td>2:30-3:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>PIXELQUEST</td>
                    <td className={styles.columnDivider}>AB-5 211</td>
                    <td className={styles.columnDivider}>2:00-4:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider} rowSpan="2">
                      LENSATION
                    </td>
                    <td className={styles.columnDivider}>PHOTO STORIES</td>
                    <td className={styles.columnDivider}>AB-3 204, 205</td>
                    <td>1:00-3:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      PHOTO EXHIBIT - ROUND 1
                    </td>
                    <td className={styles.columnDivider}>AB-3 lobby</td>
                    <td className={styles.columnDivider}>1:00-5:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider} rowSpan="2">
                      XVENTURE
                    </td>
                    <td className={styles.columnDivider}>
                      HURDLE HAVEN - DAY 1
                    </td>
                    <td className={styles.columnDivider}>
                      NCC Ground Behind 10th Block
                    </td>
                    <td>1:00-5:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      LIGHT STRIKE - DAY 1
                    </td>
                    <td className={styles.columnDivider}>AB-5 310B</td>
                    <td className={styles.columnDivider}>1:00-5:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={styles.dayContainer}>
            <div className={styles.scheduleHeader}>
              REVELS 2024: DAY 2 (MARCH 7, 2024)
            </div>
            <div className={styles.scheduleTableContainer}>
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
                    <td className={styles.columnDivider} rowSpan="2">
                      AMPERSAND
                    </td>
                    <td className={styles.columnDivider}>AIRCRASH - ROUND 1</td>
                    <td className={styles.columnDivider}>AB-3 202</td>
                    <td>1:00-2:30</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      BACK TO FUTURE - ROUND 2
                    </td>
                    <td className={styles.columnDivider}>AB-5 206</td>
                    <td>2:30-4:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider} rowSpan="2">
                      ANIMANIA
                    </td>
                    <td className={styles.columnDivider}>
                      CHUNIN EXAM - ROUND 2
                    </td>
                    <td className={styles.columnDivider}>AB-3 203</td>
                    <td>1:00-3:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      SQUID GAMES ROUND 1
                    </td>
                    <td className={styles.columnDivider}>Student Plaza</td>
                    <td>1:00-5:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider} rowSpan="2">
                      ANUBHUTI
                    </td>
                    <td className={styles.columnDivider}>
                      ANTAKSHARI - ROUND 2
                    </td>
                    <td className={styles.columnDivider}>AB-3 303</td>
                    <td>1:00-3:30</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      TARK VITARK - ROUND 1
                    </td>
                    <td className={styles.columnDivider}>AB-3 302</td>
                    <td>3:30-4:30</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>CRESCENDO</td>
                    <td className={styles.columnDivider}>
                      BIG BAND THEORY-ROUND 2
                    </td>
                    <td className={styles.columnDivider}>AB1- Quadrangle</td>
                    <td>4:00pm-5:30pm</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>DRAMEBAAZ</td>
                    <td className={styles.columnDivider}>
                      CURTAIN CALL - ROUND 2
                    </td>
                    <td className={styles.columnDivider}>Library Auditorium</td>
                    <td>1:00-6:00</td>
                  </tr>
                  <tr></tr>
                  {/* ERGO */}
                  <tr>
                    <td className={styles.columnDivider} rowSpan="2">
                      ERGO
                    </td>
                    <td className={styles.columnDivider}>
                      THE ENIGMA QUIZ - ROUND 1
                    </td>
                    <td className={styles.columnDivider} rowSpan="2">
                      KEF
                    </td>
                    <td>1:00-2:30</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      THE ENIGMA QUIZ - ROUND 2
                    </td>
                    <td>3:00-5:00</td>
                  </tr>

                  {/* FOOTLOOSE */}
                  <tr>
                    <td className={styles.columnDivider}>FOOTLOOSE</td>
                    <td className={styles.columnDivider}>GROUP DANCE</td>
                    <td className={styles.columnDivider}>AB-1 Quadrangle</td>
                    <td>4:00-6:00</td>
                  </tr>

                  {/* HAUTE COUTURE */}
                  <tr>
                    <td className={styles.columnDivider}>HAUTE COUTURE</td>
                    <td className={styles.columnDivider}>
                      THEME VOGUE BLITZ( Fashion show)
                    </td>
                    <td className={styles.columnDivider}>AB-1 Quadrangle</td>
                    <td>7:30-9:00</td>
                  </tr>

                  {/* IRIDESCENT */}
                  <tr>
                    <td className={styles.columnDivider} rowSpan="2">
                      IRIDESCENT
                    </td>
                    <td className={styles.columnDivider}>JEOPARDY - ROUND 2</td>
                    <td className={styles.columnDivider}>AB-5 209, 210</td>
                    <td>4:00-5:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      NETFLIX AND NO CHILL - ROUND 2
                    </td>
                    <td className={styles.columnDivider}>AB-5 204, 205</td>
                    <td className={styles.columnDivider}>2:00-3:00</td>
                  </tr>

                  {/* KALAKRITI */}
                  <tr>
                    <td className={styles.columnDivider} rowSpan="2">
                      KALAKRITI
                    </td>
                    <td className={styles.columnDivider}>ALPANA</td>
                    <td className={styles.columnDivider}>Outside FC-1</td>
                    <td className={styles.columnDivider}>2:00-4:30</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      ABSTRACT ART COMPETITION
                    </td>
                    <td className={styles.columnDivider}>AB-3 402</td>
                    <td className={styles.columnDivider}>2:00-4:30</td>
                  </tr>

                  {/* LENSATION */}
                  <tr>
                    <td className={styles.columnDivider} rowSpan="2">
                      LENSATION
                    </td>
                    <td className={styles.columnDivider}>
                      PRODUCT PHOTOGRAPHY
                    </td>
                    <td className={styles.columnDivider}>AB-3 204</td>
                    <td className={styles.columnDivider}>2:00-4:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      PHOTO EXHIBIT - ROUND 2
                    </td>
                    <td className={styles.columnDivider}>AB-3 lobby</td>
                    <td className={styles.columnDivider}>1:00-6:00</td>
                  </tr>

                  {/* XVENTURE */}
                  <tr>
                    <td className={styles.columnDivider} rowSpan="3">
                      XVENTURE
                    </td>
                    <td className={styles.columnDivider}>
                      HURDLE HAVEN - DAY 2
                    </td>
                    <td className={styles.columnDivider}>
                      NCC Ground Behind 10th Block
                    </td>
                    <td className={styles.columnDivider}>1:00-6:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      TRAIL AND TAIL HUNT - DAY 1
                    </td>
                    <td className={styles.columnDivider}>Across Campus</td>
                    <td className={styles.columnDivider}>1:00-6:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      LIGHT STRIKE - DAY 2
                    </td>
                    <td className={styles.columnDivider}>AB-5 310B</td>
                    <td className={styles.columnDivider}>1:00-6:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Day 5*/}
          <div className={styles.dayContainer}>
            <div className={styles.scheduleHeader}>
              REVELS 2024 : DAY 3 (MARCH 8, 2024)
            </div>
            <div className={styles.scheduleTableContainer}>
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
                  {/* ANIMANIA */}
                  <tr>
                    <td className={styles.columnDivider} rowSpan="2">
                      ANIMANIA
                    </td>
                    <td className={styles.columnDivider}>
                      SQUID GAMES - ROUND 2(8th)
                    </td>
                    <td className={styles.columnDivider}>Student Plaza</td>
                    <td className={styles.columnDivider}>1:00-3:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      CHUNIN EXAM - ROUND 3
                    </td>
                    <td className={styles.columnDivider}>AB-3 203</td>
                    <td className={styles.columnDivider}>2:00-4:00</td>
                  </tr>

                  {/* ANUBHUTI */}
                  <tr>
                    <td className={styles.columnDivider}>ANUBHUTI</td>
                    <td className={styles.columnDivider}>
                      TARK VITARK - ROUND 2
                    </td>
                    <td className={styles.columnDivider}>AB-3 302</td>
                    <td className={styles.columnDivider}>3:30-4:30</td>
                  </tr>

                  {/* CRESCENDO */}
                  <tr>
                    <td className={styles.columnDivider} rowSpan="2">
                      CRESCENDO
                    </td>
                    <td className={styles.columnDivider}>REVELS IDOL</td>
                    <td className={styles.columnDivider} rowSpan="2">
                      Library Auditorium
                    </td>
                    <td className={styles.columnDivider}>4:00-7:00</td>
                  </tr>

                  {/* ZAMIR */}
                  <tr>
                    <td className={styles.columnDivider}>ZAMIR</td>
                    <td className={styles.columnDivider}>1:00-4:00</td>
                  </tr>

                  {/* DRAMEBAAZ */}
                  <tr>
                    <td className={styles.columnDivider}>DRAMEBAAZ</td>
                    <td className={styles.columnDivider}>NUKKAD NATAK</td>
                    <td className={styles.columnDivider}>In front of AB-3</td>
                    <td className={styles.columnDivider}>2:00-6:00</td>
                  </tr>

                  {/* ERGO */}
                  <tr>
                    <td className={styles.columnDivider} rowSpan="5">
                      ERGO
                    </td>
                    <td className={styles.columnDivider}>
                      GENERAL QUIZ - ROUND 1
                    </td>
                    <td className={styles.columnDivider} rowSpan="2">
                      KEF Center
                    </td>
                    <td className={styles.columnDivider}>1:00-5:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      GENERAL QUIZ - ROUND 2
                    </td>
                    <td className={styles.columnDivider}>1:00-5:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      DEBATE TOURNAMENT-ROUND 7
                    </td>
                    <td className={styles.columnDivider} rowSpan="3">
                      AB3 404
                    </td>
                    <td className={styles.columnDivider} rowSpan="3">
                      1:00-5:00
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      DEBATE TOURNAMENT-ROUND 8
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      DEBATE TOURNAMENT-ROUND 9
                    </td>
                  </tr>

                  {/* FOOTLOOSE */}
                  <tr>
                    <td className={styles.columnDivider} rowSpan="4">
                      FOOTLOOSE
                    </td>
                    <td className={styles.columnDivider}>
                      STREET DANCE BATTLE- ROUND 1
                    </td>
                    <td className={styles.columnDivider} rowSpan="3">
                      Student Plaza
                    </td>
                    <td className={styles.columnDivider} rowSpan="3">
                      4:00-6:30
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      STREET DANCE BATTLE- ROUND 2
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      STREET DANCE BATTLE- ROUND 3
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>GROUP DANCE</td>
                    <td className={styles.columnDivider}>AB1 Quadrangle</td>
                    <td className={styles.columnDivider}>7:00pm - 9:30pm</td>
                  </tr>

                  {/* HAUTE COUTURE */}
                  <tr>
                    <td className={styles.columnDivider}>HAUTE COUTURE</td>
                    <td className={styles.columnDivider}>
                      REVELS ROYALTY - ROUND 3
                    </td>
                    <td className={styles.columnDivider}>MV Seminar Hall</td>
                    <td className={styles.columnDivider}>1:00-7:00</td>
                  </tr>

                  {/* LENSATION */}
                  <tr>
                    <td className={styles.columnDivider}>LENSATION</td>
                    <td className={styles.columnDivider}>
                      PHOTO EXHIBIT - ROUND 3
                    </td>
                    <td className={styles.columnDivider}>AB-3 lobby</td>
                    <td className={styles.columnDivider}>1:00-7:00</td>
                  </tr>

                  {/* XVENTURE */}
                  <tr>
                    <td className={styles.columnDivider} rowSpan="3">
                      XVENTURE
                    </td>
                    <td className={styles.columnDivider}>
                      TRAIL AND TAIL HUNT- DAY 2
                    </td>
                    <td className={styles.columnDivider}>Across Campus</td>
                    <td className={styles.columnDivider}>1:00-5:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      LIGHT STRIKE- DAY 3
                    </td>
                    <td className={styles.columnDivider}>AB-5 310B</td>
                    <td className={styles.columnDivider}>1:00-7:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>Foodathon</td>
                    <td className={styles.columnDivider}>AB-5 301 to 306</td>
                    <td className={styles.columnDivider}>2:00pm-5:00pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Day 6 */}
          <div className={styles.dayContainer}>
            <div className={styles.scheduleHeader}>
              REVELS 2024 : DAY 3 (MARCH 9, 2024)
            </div>
            <div className={styles.scheduleTableContainer}>
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
                  {/* AMPERSAND */}
                  <tr>
                    <td className={styles.columnDivider}>AMPERSAND</td>
                    <td className={styles.columnDivider}>AIRCRASH - ROUND 2</td>
                    <td className={styles.columnDivider}>AB-3 202</td>
                    <td className={styles.columnDivider}>2:00-3:30</td>
                  </tr>

                  {/* ANIMANIA */}
                  <tr>
                    <td className={styles.columnDivider}>ANIMANIA</td>
                    <td className={styles.columnDivider}>
                      SQUID GAMES - ROUND 3
                    </td>
                    <td className={styles.columnDivider}>Student Plaza</td>
                    <td className={styles.columnDivider}>2:30-3:30</td>
                  </tr>

                  {/* ANUBHUTI */}
                  <tr>
                    <td className={styles.columnDivider}>ANUBHUTI</td>
                    <td className={styles.columnDivider}>LEHZA - ROUND 2</td>
                    <td className={styles.columnDivider}>AB-3 304, 305</td>
                    <td className={styles.columnDivider}>2:00-2:30</td>
                  </tr>

                  {/* FOOTLOOSE */}
                  <tr>
                    <td className={styles.columnDivider} rowSpan="2">
                      FOOTLOOSE
                    </td>
                    <td className={styles.columnDivider}>
                      SOLO DANCE-WESTERN ROUND 2
                    </td>
                    <td className={styles.columnDivider} rowSpan="2">
                      Library Auditorium
                    </td>
                    <td className={styles.columnDivider}>1:00-1:45</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      SOLO DANCE-EASTERN ROUND 2
                    </td>
                    <td className={styles.columnDivider}>2:00-2:45</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>SPOTLIGHT</td>
                    <td className={styles.columnDivider}>SPOTLIGHT</td>
                    <td className={styles.columnDivider}>AB-3 204</td>
                    <td className={styles.columnDivider}>2:00-2:45</td>
                  </tr>

                  {/* IRIDESCENT */}
                  <tr>
                    <td className={styles.columnDivider} rowSpan="2">
                      IRIDESCENT
                    </td>
                    <td className={styles.columnDivider}>JEOPARDY - ROUND 3</td>
                    <td className={styles.columnDivider}>AB-5 209, 210</td>
                    <td className={styles.columnDivider}>1:00-2:00</td>
                  </tr>
                  <tr>
                    <td className={styles.columnDivider}>
                      NETFLIX AND NO CHILL - ROUND 3
                    </td>
                    <td className={styles.columnDivider}>AB-5 204, 205</td>
                    <td className={styles.columnDivider}>2:00-3:00</td>
                  </tr>

                  {/* KALAKRITI */}
                  <tr>
                    <td className={styles.columnDivider}>KALAKRITI</td>
                    <td className={styles.columnDivider}>COLLAGE</td>
                    <td className={styles.columnDivider}>AB-3 402</td>
                    <td className={styles.columnDivider}>1:00-3:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
