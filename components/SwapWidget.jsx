'use client';
import { SquidWidget } from "@0xsquid/widget";

export default function SwapWidget() {
  return (
    <SquidWidget config={{
      "integratorId": "boisblue-581910cf-af4d-41d6-ba7c-3d0c50b0d9a0",
      "themeType": "dark",
      "apiUrl": "https://v2.api.squidrouter.com",
      "theme": {
        "borderRadius": {
          "button-lg-primary": "4.25rem",
          "button-lg-secondary": "2.75rem",
          "button-lg-tertiary": "2.95rem",
          "button-md-primary": "1.85rem",
          "button-md-secondary": "1.95rem",
          "button-md-tertiary": "1.25rem",
          "button-sm-primary": "2.15rem",
          "button-sm-secondary": "2.25rem",
          "button-sm-tertiary": "1.25rem",
          "container": "2.35rem",
          "input": "9999px",
          "menu-sm": "0.75rem",
          "menu-lg": "1.45rem",
          "modal": "2.45rem"
        },
        "fontSize": {
          "caption": "0.85rem",
          "body-small": "1.05rem",
          "body-medium": "1.35rem",
          "body-large": "1.95rem",
          "heading-small": "2.15rem",
          "heading-medium": 400,
          "heading-large": "4.15rem"
        },
        "fontWeight": {
          "caption": "0.85rem",
          "body-small": "1.05rem",
          "body-medium": "1.35rem",
          "body-large": "1.95rem",
          "heading-small": "2.15rem",
          "heading-medium": 400,
          "heading-large": "4.15rem"
        },
        "fontFamily": {
          "squid-main": "GeistVariable, sans-serif"
        },
        "boxShadow": {
          "container": "2.35rem", 0, 0, 0.20), 0px 5px 50px -1px rgba(0, 0, 0, 0.33)"
        },
        "color": {
          "grey-100": "#FBFBFD",
          "grey-200": "#EDEFF3",
          "grey-300": "#D1D6E0",
          "grey-400": "#A7ABBE",
          "grey-500": "#8A8FA8",
          "grey-600": "#676B7E",
          "grey-700": "#4C515D",
          "grey-800": "#292C32",
          "grey-900": "#17191C",
          "royal-300": "#E0C8FF",
          "royal-400": "#C8A8FF",
          "royal-500": "#A67BFF",
          "royal-600": "#6F3EBF",
          "royal-700": "#6B45A1",
          "status-positive": "#7AE870",
          "status-negative": "#FF4D5B",
          "status-partial": "#F3AF25",
          "highlight-700": "#E4FE53",
          "animation-bg": "#9E79D2",
          "animation-text": "#FBFBFD",
          "button-lg-primary-bg": "#7B4ED9",
          "button-lg-primary-text": "#FBFBFD",
          "button-lg-secondary-bg": "#FBFBFD",
          "button-lg-secondary-text": "#292C32",
          "button-lg-tertiary-bg": "#292C32",
          "button-lg-tertiary-text": "#D1D6E0",
          "button-md-primary-bg": "#9E79D2",
          "button-md-primary-text": "#FBFBFD",
          "button-md-secondary-bg": "#FBFBFD",
          "button-md-secondary-text": "#292C32",
          "button-md-tertiary-bg": "#292C32",
          "button-md-tertiary-text": "#D1D6E0",
          "button-sm-primary-bg": "#9E79D2",
          "button-sm-primary-text": "#FBFBFD",
          "button-sm-secondary-bg": "#FBFBFD",
          "button-sm-secondary-text": "#292C32",
          "button-sm-tertiary-bg": "#292C32",
          "button-sm-tertiary-text": "#D1D6E0",
          "input-bg": "#17191C",
          "input-placeholder": "#676B7E",
          "input-text": "#D1D6E0",
          "input-selection": "#D1D6E0",
          "menu-bg": "#17191CA8",
          "menu-text": "#FBFBFDA8",
          "menu-backdrop": "#FBFBFD1A",
          "modal-backdrop": "#17191C54"
        }
      },
      "tabs": {
        "swap": true,
        "buy": true,
        "send": false
      },
      "priceImpactWarnings": {
        "warning": 3,
        "critical": 6
      },
      "loadPreviousStateFromLocalStorage": true
    }} />
  );
}
