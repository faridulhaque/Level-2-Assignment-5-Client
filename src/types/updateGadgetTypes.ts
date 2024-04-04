import { TGadget } from "./addGadgetTypes";

export interface TGadgetUpdate extends TGadget {
    id?: string
}

export type TGadgetSingleFormComponent = {
    item: Partial<TGadget>,
    // item: any,
    duplicate: boolean
    id: string
}