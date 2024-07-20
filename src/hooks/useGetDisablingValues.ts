import {useOutletContext} from "react-router-dom";
import {TOutletContext} from "../types/outletContext.type";

export const useGetDisablingValues = () => useOutletContext<TOutletContext>();