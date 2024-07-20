const disablePrev = (page: number) => page <= 1;
const disableNext = (total: number, skip: number, limit: number) => skip + limit >= total;

export {
    disablePrev,
    disableNext
}