export interface Terms {
    termName: string;
    duration: Duration;
    startDate: Date;
    endDate: Date;
    planDueDate: Date;
    reportDueDate: Date;
    status: TermStatus;
}

export interface Duration {
    hours: number;
    minutes: number;
}

export enum TermStatus {
    New = 'New',
    InProgress = 'InProgress', 
    Closed = 'Closed'            
}
