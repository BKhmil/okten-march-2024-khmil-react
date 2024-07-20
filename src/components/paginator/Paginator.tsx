import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";
import {disableNext, disablePrev} from "../../utils/pagination.utils";

interface IProps {
    total: number;
    skip: number;
    limit: number;
}

const Paginator: FC<IProps> = ({total, skip, limit}) => {
    const [query, setQuery] =
        useSearchParams();
    const page = Number(query.get('page') ?? 1);

    const clickPrevHandler = () => {
        setQuery(prev => ({...prev, page: page - 1}));
    }

    const clickNextHandler = () => {
        setQuery(prev => ({...prev, page: page + 1}));
    }

    return (
        <div>
            <button
                disabled={disablePrev(page)}
                onClick={clickPrevHandler}
            >prev</button>
            {page}
            <button
                disabled={disableNext(total, skip, limit)}
                onClick={clickNextHandler}
            >next</button>
        </div>
    );
};

export default Paginator;