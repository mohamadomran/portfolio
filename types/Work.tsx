export type Work = {
  company: string;
  title: string;
  start: {
    label: string;
    dateTime: string;
  };
  end: {
    label: string;
    dateTime: string;
  };
  companyURL?: string;
  tasks: string[];
};
