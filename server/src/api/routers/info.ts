import { Request, Response, Router } from 'express'

import getCommitHash from '../../util/git/getCommitHash'
import getRemoteOriginUrl from '../../util/git/getRemoteOriginUrl'

import type { IAPIResponse } from '..'


const info = Router();


info.get('/', async (_req: Request, res: Response) => {
    res.json({
        code: 200,
        success: true,
        message: null,
        data: {
            version: await getCommitHash(true),
            author: {
                name: 'Callum N',
                github: await getRemoteOriginUrl(),
            }
        }
    } as IAPIResponse<IAPIInfoResponse>);
})


export default info;
export const path = '/'


export interface IAPIInfoResponse {
    version: string;
    author: {
        name: string;
        github: string;
    }
}
