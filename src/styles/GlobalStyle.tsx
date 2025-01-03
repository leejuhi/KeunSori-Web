import { Global, css } from "@emotion/react";
import fonts from "../assets/font/font.ts";
const GlobalStyle = () => (
  <Global
    styles={css`
      ${fonts}
      * {
        box-sizing: border-box;
        font-family: "Nanum Gothic", "sans-serif";
        font-size: 15px;
        font-weight: 300;
        color: black;
      }
      body {
        margin: 0px;
        padding: 0;
        font-size: 15px;
        font-weight: 300;
        box-sizing: border-box;
        word-break: keep-all;
      }

      input:focus {
        outline: none;
        border-bottom: 1px solid #037ffc;
      }
      a {
        text-decoration: none;
        color: inherit;
      }

      a:visited {
        color: inherit;
      }
      button {
        border: none;
      }
      html {
        scroll-behavior: smooth;
      }
      .react-calendar {
        width: 380px !important;
        max-width: 100%;
        background: white;
        padding: 20px;
        border: none !important;
        border-radius: 20px;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
        font-family: "Nanum Gothic", "sans-serif" !important;
        font-size: 10px;
        line-height: 1.3 !important;
      }

      .react-calendar--doubleView {
        width: 700px;
      }

      .react-calendar--doubleView .react-calendar__viewContainer {
        display: flex;
        margin: -0.5em;
      }

      .react-calendar--doubleView .react-calendar__viewContainer > * {
        width: 50%;
        margin: 0.5em;
      }

      .react-calendar,
      .react-calendar *,
      .react-calendar *:before,
      .react-calendar *:after {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }

      .react-calendar button {
        margin: 0;
        border: 0;
        outline: none;
        border-radius: 10px;
      }

      .react-calendar button:enabled:hover {
        cursor: pointer;
      }

      .react-calendar__navigation {
        display: flex;
        height: 44px;
        margin-bottom: 1em;
      }

      .react-calendar__navigation button {
        min-width: 44px;
        background: none;
      }

      .react-calendar__navigation button:disabled {
        background-color: #f0f0f0;
      }

      .react-calendar__navigation button:enabled:hover,
      .react-calendar__navigation button:enabled:focus {
        background-color: white !important;
      }

      .react-calendar__month-view__weekdays {
        text-align: center;
        text-transform: uppercase;
        font: inherit;
        font-size: 0.75em;
        font-weight: bold;
      }

      .react-calendar__month-view__weekdays__weekday {
        padding: 0.5em;
        text-decoration: none !important;
        border: none !important;
      }

      .react-calendar__month-view__weekNumbers .react-calendar__tile {
        display: flex;
        align-items: center;
        justify-content: center;
        font: inherit;
        font-size: 0.75em;
        font-weight: bold;
      }

      .react-calendar__month-view__days__day--weekend {
        color: #d10000;
      }

      .react-calendar__month-view__days__day--neighboringMonth,
      .react-calendar__decade-view__years__year--neighboringDecade,
      .react-calendar__century-view__decades__decade--neighboringCentury {
        color: #757575;
      }

      .react-calendar__year-view .react-calendar__tile,
      .react-calendar__decade-view .react-calendar__tile,
      .react-calendar__century-view .react-calendar__tile {
        padding: 2em 0.5em;
      }

      .react-calendar__tile {
        max-width: 100%;
        padding: 10px 6.6667px;
        background: none;
        text-align: center;
        font: inherit;
        font-size: 0.833em;
      }

      .react-calendar__tile:disabled {
        background-color: #f0f0f0;
        color: #ababab;
      }

      .react-calendar__month-view__days__day--neighboringMonth:disabled,
      .react-calendar__decade-view__years__year--neighboringDecade:disabled,
      .react-calendar__century-view__decades__decade--neighboringCentury:disabled {
        color: #cdcdcd;
      }

      .react-calendar__tile:enabled:hover,
      .react-calendar__tile:enabled:focus {
        background-color: #e6e6e6;
      }

      .react-calendar__tile--now {
        background: #f1f1f1 !important;
      }

      .react-calendar__tile--now:enabled:hover,
      .react-calendar__tile--now:enabled:focus {
        background: #bcec7d;
      }

      .react-calendar__tile--hasActive {
        background: #bcec7d;
      }

      .react-calendar__tile--hasActive:enabled:hover,
      .react-calendar__tile--hasActive:enabled:focus {
        background: #bcec7d;
      }

      .react-calendar__tile--active {
        background: #bcec7d !important;
        color: white;
      }

      .react-calendar__tile--active:enabled:hover,
      .react-calendar__tile--active:enabled:focus {
        background: #bcec7d !important;
      }

      .react-calendar--selectRange .react-calendar__tile--hover {
        background-color: #e6e6e6;
      }
      .react-calendar__month-view__days__day--neighboringMonth {
        visibility: hidden !important;
      }
    `}
  />
);

export default GlobalStyle;
