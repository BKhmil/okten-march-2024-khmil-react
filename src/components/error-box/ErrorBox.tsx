import {AxiosError} from "axios";
import {FC} from "react";

interface IProps {
    error: AxiosError;
}

const ErrorBox: FC<IProps> = ({error}) => {
    return <div>Error: {error.message}</div>;
}

export default ErrorBox;