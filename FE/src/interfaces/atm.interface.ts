export interface AtmProps {
    id: string,
    name: string,
    status: string,
    transaction: number,
    client: string,
}

export interface Queue {
    name: string,
    transaction: number
}