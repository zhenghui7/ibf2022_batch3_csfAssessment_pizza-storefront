export interface orderData {
    name: string;
    email: string;
    size: string;
    base: string;
    sauce: string;
    toppings: string[];
    comments: string;
}

export interface returnData {
    orderId: string;
    date: string;
    name: string;
    email: string;
    total: string;
}

export interface apiReturnData {
    orderId: string;
    date: string;
    total: string
}