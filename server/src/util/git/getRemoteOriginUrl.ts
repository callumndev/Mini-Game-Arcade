import { promisify } from 'node:util'
import process from 'node:process'

import gitconfig from 'gitconfiglocal'


const pGitconfig = promisify(gitconfig);


export default (cwd: string = process.cwd(), remoteName: string = 'origin'): Promise<string> => {
    return new Promise(async (resolve, reject) => {
        const config = await pGitconfig(cwd);
        const url = config.remote && config.remote[remoteName] && config.remote[remoteName].url;

        if (!url)
            reject('Could not find url for remote: ' + remoteName);
        else
            resolve(url);
    })
}
