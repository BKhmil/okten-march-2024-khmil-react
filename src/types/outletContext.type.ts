import {IDisablingValues} from "../models/utils/disablingValues.interface";

export type TOutletContext = {
    getDisablingValues: (data: IDisablingValues) => void;
    disablingValues: IDisablingValues;
};