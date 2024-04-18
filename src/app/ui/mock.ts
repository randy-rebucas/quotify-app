export const common = {
    company: 'Mmoser',
    appName: 'quotify',
    currentDate: new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(Date.now()).toString()
};


export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
  };