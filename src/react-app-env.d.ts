/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "dev" | "prod";
    REACT_APP_API_BASE_URL: string;
    REACT_APP_OAUTH2_REDIRECT_URI: string;
  }
}
