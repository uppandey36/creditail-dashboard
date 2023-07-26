export interface sidebarCardInterface {
    name: string,
    route: string,
    onSelectIcon: File,
    onNonSelectIcon: File,
    onClick: Function
}

export interface sidebarCardStateInterface {
    name: string,
    route: string,
    onSelectIcon: File,
    onNonSelectIcon: File,
}

export interface generteReportsCardTemplate {
    id: string,
    label: string,
    content: string
}

export interface generteReportsCardPropsTemplate {
    id: string,
    label: string,
    content: string
    onClick: Function
}

export interface reportCardsContainerInterface {
    id: string,
    label: string,
    values: generteReportsCardTemplate[]
}

export interface reportCardsContainerPropInterface {
    id: string,
    label: string,
    values: generteReportsCardTemplate[],
    onClick: Function
}

export interface dateRangeInterface {
    startDate: Date,
    endDate: Date
}

export interface generatedReportsInterface {
    id: string,
    name: string,
    dateRange: dateRangeInterface,
    generatedAt: Date,
    brand: string
}