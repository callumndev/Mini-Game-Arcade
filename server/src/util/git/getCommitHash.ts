import { exec } from 'child_process'


export default (short?: boolean): Promise<string> => {
    return new Promise((resolve, reject) => {
        exec('git rev-parse HEAD', (err, stdout, stderr) => {
            // Reject if there was an error
            if (err || stderr)
                reject(err?.message ?? stderr);
            else
            {
                const hash: string = stdout.trim();

                // Resolve first 7 characters of the hash if short
                // Else the full hash is resolved
                resolve(hash.substring(0, short ? 7 : hash.length));
            }
        });
    })
}
