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
          "button-lg-primary": "3.15rem",
          "button-lg-secondary": "2.75rem",
          "button-lg-tertiary": "2.95rem",
          "button-md-primary": "1.85rem",
          "button-md-secondary": "1.95rem",
          "button-md-tertiary": "1.25rem",
          "button-sm-primary": "1.75rem",
          "button-sm-secondary": "1.65rem",
          "button-sm-tertiary": "1.25rem",
          "container": "1.25rem",
          "input": "1.75rem",
          "menu-sm": "0.95rem",
          "menu-lg": "1.45rem",
          "modal": "1.55rem"
        },
        "fontSize": {
          "caption": "0.85rem",
          "body-small": "1.25rem",
          "body-medium": "1.55rem",
          "body-large": "1.75rem",
          "heading-small": "2.15rem",
          "heading-medium": "3.25rem",
          "heading-large": "4.15rem"
        },
        "fontWeight": {
          "caption": "0.85rem",
          "body-small": "1.25rem",
          "body-medium": "1.55rem",
          "body-large": "1.75rem",
          "heading-small": "2.15rem",
          "heading-medium": "3.25rem",
          "heading-large": "4.15rem"
        },
        "fontFamily": {
          "squid-main": "GeistVariable, sans-serif"
        },
        "boxShadow": {
          "container": "1.25rem", 0, 0, 0.20), 0px 5px 50px -1px rgba(0, 0, 0, 0.33)"
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
          "royal-300": "#D9BEF4",
          "royal-400": "#C8A8FF",
          "royal-500": "#7B4ED9",
          "royal-600": "#8353C5",
          "royal-700": "#5A2E9E",
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
        "critical": 8
      },
      "loadPreviousStateFromLocalStorage": true
    }} />
  );
}
