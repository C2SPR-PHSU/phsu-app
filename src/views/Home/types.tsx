export interface IUserServicesResponse {
    code: string;
    message: string;
    data: IUserServicesData;
}

export interface IUserServicesData {
    service: string;
    campus_id: string;
    campus_name: string;
    status: string;
    created: string;
    status_desc: string;
}
