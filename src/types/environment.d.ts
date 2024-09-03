namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    AUTH_SECRET: string;
    AUTH_GOOGLE_ID: string;
    AUTH_GOOGLE_SECRET: string;
    SESSION_SECRET: string;
    MONGODB_URI: string;
    NEXTAUTH_URL: string;
    NEXT_PUBLIC_MAPS_MODE: string;
    NEXT_PUBLIC_MAPS_API_KEY: string;
    NEXT_PUBLIC_AUTH_URL: string;
    SMTP_FROM: string;
    SMTP_PORT: string;
    SMTP_HOST: string;
    SMTP_PASSWORD: string;
    SMTP_USER: string;
  }
}
