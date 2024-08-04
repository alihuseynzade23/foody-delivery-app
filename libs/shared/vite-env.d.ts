interface ImportMetaEnv {
    readonly VITE_PROJECT_ID: string;
    readonly VITE_PROJECT_ENDPOINT: string;
   
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }