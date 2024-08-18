
  
  
  export enum TermStatus {
    New = 'New',
    InProgress = 'InProgress',
    Closed = 'Closed'
  }
  
  export enum Duration {
    Monthly = 'Monthly',
    Quarterly = 'Quarterly',
    HalfYear = 'HalfYear'
  }
  
  export interface Term {
    id: string;
    termName: string;
    duration: Duration;
    startDate: Date;
    endDate: Date;
    planDueDate: Date;
    reportDueDate: Date;
    status: TermStatus;
  }
    