import { cleanEnv, str, port, host } from 'envalid'
import { config } from 'dotenv'
import debug from 'debug'


/**
 * dotenv
 */
// Returns the .env file to load
export const getEnvFile = () => `.env.${process.env.NODE_ENV!}`;

// Loads the .env file returned from getEnvFile() into process.env
export const load = () => config({ path: getEnvFile() });


/**
 * envalid
 */
export const schema = {
    NODE_ENV: str({ choices: ['production', 'development'] }),
    PORT: port(),
    HOST: host(),
    DEBUG: str()
}

export const validate = () => cleanEnv(
    // Environment vars
    process.env,

    // Specifies the format of required vars
    schema,
)


/**
 * Setup
 */
export default () => {
    // Load .env file
    load();

    // Set debug namespaces after load
    debug.enable(process.env.DEBUG!);
    debug('server:env')(`Set debugger namespaces to '${process.env.DEBUG!}'`);
    debug('server:env')(`Using env file '${getEnvFile()}'`);

    // Validate
    validate();
}
