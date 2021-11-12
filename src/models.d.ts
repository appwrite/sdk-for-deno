export namespace Models {
    /**
     * Collections List
     */
    export type CollectionList = { 
        /**
         * Total number of items available on the server.
         */
        sum: number;
        /**
         * List of collections.
         */
        collections: Collection[];
    }
    /**
     * Documents List
     */
    export type DocumentList<Document extends Models.Document> = { 
        /**
         * Total number of items available on the server.
         */
        sum: number;
        /**
         * List of documents.
         */
        documents: Document[];
    }
    /**
     * Users List
     */
    export type UserList<Preferences extends Models.Preferences> = { 
        /**
         * Total number of items available on the server.
         */
        sum: number;
        /**
         * List of users.
         */
        users: User<Preferences>[];
    }
    /**
     * Sessions List
     */
    export type SessionList = { 
        /**
         * Total number of items available on the server.
         */
        sum: number;
        /**
         * List of sessions.
         */
        sessions: Session[];
    }
    /**
     * Logs List
     */
    export type LogList = { 
        /**
         * List of logs.
         */
        logs: Log[];
    }
    /**
     * Files List
     */
    export type FileList = { 
        /**
         * Total number of items available on the server.
         */
        sum: number;
        /**
         * List of files.
         */
        files: File[];
    }
    /**
     * Teams List
     */
    export type TeamList = { 
        /**
         * Total number of items available on the server.
         */
        sum: number;
        /**
         * List of teams.
         */
        teams: Team[];
    }
    /**
     * Memberships List
     */
    export type MembershipList = { 
        /**
         * Total number of items available on the server.
         */
        sum: number;
        /**
         * List of memberships.
         */
        memberships: Membership[];
    }
    /**
     * Functions List
     */
    export type FunctionList = { 
        /**
         * Total number of items available on the server.
         */
        sum: number;
        /**
         * List of functions.
         */
        functions: Function[];
    }
    /**
     * Tags List
     */
    export type TagList = { 
        /**
         * Total number of items available on the server.
         */
        sum: number;
        /**
         * List of tags.
         */
        tags: Tag[];
    }
    /**
     * Executions List
     */
    export type ExecutionList = { 
        /**
         * Total number of items available on the server.
         */
        sum: number;
        /**
         * List of executions.
         */
        executions: Execution[];
    }
    /**
     * Countries List
     */
    export type CountryList = { 
        /**
         * Total number of items available on the server.
         */
        sum: number;
        /**
         * List of countries.
         */
        countries: Country[];
    }
    /**
     * Continents List
     */
    export type ContinentList = { 
        /**
         * Total number of items available on the server.
         */
        sum: number;
        /**
         * List of continents.
         */
        continents: Continent[];
    }
    /**
     * Languages List
     */
    export type LanguageList = { 
        /**
         * Total number of items available on the server.
         */
        sum: number;
        /**
         * List of languages.
         */
        languages: Language[];
    }
    /**
     * Currencies List
     */
    export type CurrencyList = { 
        /**
         * Total number of items available on the server.
         */
        sum: number;
        /**
         * List of currencies.
         */
        currencies: Currency[];
    }
    /**
     * Phones List
     */
    export type PhoneList = { 
        /**
         * Total number of items available on the server.
         */
        sum: number;
        /**
         * List of phones.
         */
        phones: Phone[];
    }
    /**
     * Permissions
     */
    export type Permissions = { 
        /**
         * Read permissions.
         */
        read: string[];
        /**
         * Write permissions.
         */
        write: string[];
    }
    /**
     * Collection
     */
    export type Collection = { 
        /**
         * Collection ID.
         */
        $id: string;
        /**
         * Collection permissions.
         */
        $permissions: Permissions;
        /**
         * Collection name.
         */
        name: string;
        /**
         * Collection creation date in Unix timestamp.
         */
        dateCreated: number;
        /**
         * Collection creation date in Unix timestamp.
         */
        dateUpdated: number;
        /**
         * Collection rules.
         */
        rules: Rule[];
    }
    /**
     * Document
     */
    export type Document = { 
        /**
         * Document ID.
         */
        $id: string;
        /**
         * Collection ID.
         */
        $collection: string;
        /**
         * Document permissions.
         */
        $permissions: Permissions;
    }
    /**
     * Rule
     */
    export type Rule = { 
        /**
         * Rule ID.
         */
        $id: string;
        /**
         * Rule Collection.
         */
        $collection: string;
        /**
         * Rule type. Possible values: 
         */
        type: string;
        /**
         * Rule key.
         */
        key: string;
        /**
         * Rule label.
         */
        label: string;
        /**
         * Rule default value.
         */
        xdefault: string;
        /**
         * Is array?
         */
        array: boolean;
        /**
         * Is required?
         */
        required: boolean;
        /**
         * List of allowed values
         */
        list: string[];
    }
    /**
     * Log
     */
    export type Log = { 
        /**
         * Event name.
         */
        event: string;
        /**
         * IP session in use when the session was created.
         */
        ip: string;
        /**
         * Log creation time in Unix timestamp.
         */
        time: number;
        /**
         * Operating system code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/os.json).
         */
        osCode: string;
        /**
         * Operating system name.
         */
        osName: string;
        /**
         * Operating system version.
         */
        osVersion: string;
        /**
         * Client type.
         */
        clientType: string;
        /**
         * Client code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/clients.json).
         */
        clientCode: string;
        /**
         * Client name.
         */
        clientName: string;
        /**
         * Client version.
         */
        clientVersion: string;
        /**
         * Client engine name.
         */
        clientEngine: string;
        /**
         * Client engine name.
         */
        clientEngineVersion: string;
        /**
         * Device name.
         */
        deviceName: string;
        /**
         * Device brand name.
         */
        deviceBrand: string;
        /**
         * Device model name.
         */
        deviceModel: string;
        /**
         * Country two-character ISO 3166-1 alpha code.
         */
        countryCode: string;
        /**
         * Country name.
         */
        countryName: string;
    }
    /**
     * User
     */
    export type User<Preferences extends Models.Preferences> = { 
        /**
         * User ID.
         */
        $id: string;
        /**
         * User name.
         */
        name: string;
        /**
         * User registration date in Unix timestamp.
         */
        registration: number;
        /**
         * User status. 0 for Unactivated, 1 for active and 2 is blocked.
         */
        status: number;
        /**
         * Unix timestamp of the most recent password update
         */
        passwordUpdate: number;
        /**
         * User email address.
         */
        email: string;
        /**
         * Email verification status.
         */
        emailVerification: boolean;
        /**
         * User preferences as a key-value object
         */
        prefs: Preferences;
    }
    /**
     * Preferences
     */
    export type Preferences = { 
    }
    /**
     * Session
     */
    export type Session = { 
        /**
         * Session ID.
         */
        $id: string;
        /**
         * User ID.
         */
        userId: string;
        /**
         * Session expiration date in Unix timestamp.
         */
        expire: number;
        /**
         * Session Provider.
         */
        provider: string;
        /**
         * Session Provider User ID.
         */
        providerUid: string;
        /**
         * Session Provider Token.
         */
        providerToken: string;
        /**
         * IP in use when the session was created.
         */
        ip: string;
        /**
         * Operating system code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/os.json).
         */
        osCode: string;
        /**
         * Operating system name.
         */
        osName: string;
        /**
         * Operating system version.
         */
        osVersion: string;
        /**
         * Client type.
         */
        clientType: string;
        /**
         * Client code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/clients.json).
         */
        clientCode: string;
        /**
         * Client name.
         */
        clientName: string;
        /**
         * Client version.
         */
        clientVersion: string;
        /**
         * Client engine name.
         */
        clientEngine: string;
        /**
         * Client engine name.
         */
        clientEngineVersion: string;
        /**
         * Device name.
         */
        deviceName: string;
        /**
         * Device brand name.
         */
        deviceBrand: string;
        /**
         * Device model name.
         */
        deviceModel: string;
        /**
         * Country two-character ISO 3166-1 alpha code.
         */
        countryCode: string;
        /**
         * Country name.
         */
        countryName: string;
        /**
         * Returns true if this the current user session.
         */
        current: boolean;
    }
    /**
     * Token
     */
    export type Token = { 
        /**
         * Token ID.
         */
        $id: string;
        /**
         * User ID.
         */
        userId: string;
        /**
         * Token secret key. This will return an empty string unless the response is returned using an API key or as part of a webhook payload.
         */
        secret: string;
        /**
         * Token expiration date in Unix timestamp.
         */
        expire: number;
    }
    /**
     * Locale
     */
    export type Locale = { 
        /**
         * User IP address.
         */
        ip: string;
        /**
         * Country code in [ISO 3166-1](http://en.wikipedia.org/wiki/ISO_3166-1) two-character format
         */
        countryCode: string;
        /**
         * Country name. This field support localization.
         */
        country: string;
        /**
         * Continent code. A two character continent code &quot;AF&quot; for Africa, &quot;AN&quot; for Antarctica, &quot;AS&quot; for Asia, &quot;EU&quot; for Europe, &quot;NA&quot; for North America, &quot;OC&quot; for Oceania, and &quot;SA&quot; for South America.
         */
        continentCode: string;
        /**
         * Continent name. This field support localization.
         */
        continent: string;
        /**
         * True if country is part of the Europian Union.
         */
        eu: boolean;
        /**
         * Currency code in [ISO 4217-1](http://en.wikipedia.org/wiki/ISO_4217) three-character format
         */
        currency: string;
    }
    /**
     * File
     */
    export type File = { 
        /**
         * File ID.
         */
        $id: string;
        /**
         * File permissions.
         */
        $permissions: Permissions;
        /**
         * File name.
         */
        name: string;
        /**
         * File creation date in Unix timestamp.
         */
        dateCreated: number;
        /**
         * File MD5 signature.
         */
        signature: string;
        /**
         * File mime type.
         */
        mimeType: string;
        /**
         * File original size in bytes.
         */
        sizeOriginal: number;
    }
    /**
     * Team
     */
    export type Team = { 
        /**
         * Team ID.
         */
        $id: string;
        /**
         * Team name.
         */
        name: string;
        /**
         * Team creation date in Unix timestamp.
         */
        dateCreated: number;
        /**
         * Total sum of team members.
         */
        sum: number;
    }
    /**
     * Membership
     */
    export type Membership = { 
        /**
         * Membership ID.
         */
        $id: string;
        /**
         * User ID.
         */
        userId: string;
        /**
         * Team ID.
         */
        teamId: string;
        /**
         * User name.
         */
        name: string;
        /**
         * User email address.
         */
        email: string;
        /**
         * Date, the user has been invited to join the team in Unix timestamp.
         */
        invited: number;
        /**
         * Date, the user has accepted the invitation to join the team in Unix timestamp.
         */
        joined: number;
        /**
         * User confirmation status, true if the user has joined the team or false otherwise.
         */
        confirm: boolean;
        /**
         * User list of roles
         */
        roles: string[];
    }
    /**
     * Function
     */
    export type Function = { 
        /**
         * Function ID.
         */
        $id: string;
        /**
         * Function permissions.
         */
        $permissions: Permissions;
        /**
         * Function name.
         */
        name: string;
        /**
         * Function creation date in Unix timestamp.
         */
        dateCreated: number;
        /**
         * Function update date in Unix timestamp.
         */
        dateUpdated: number;
        /**
         * Function status. Possible values: disabled, enabled
         */
        status: string;
        /**
         * Function execution runtime.
         */
        runtime: string;
        /**
         * Function active tag ID.
         */
        tag: string;
        /**
         * Function environment variables.
         */
        vars: string;
        /**
         * Function trigger events.
         */
        events: string[];
        /**
         * Function execution schedult in CRON format.
         */
        schedule: string;
        /**
         * Function next scheduled execution date in Unix timestamp.
         */
        scheduleNext: number;
        /**
         * Function next scheduled execution date in Unix timestamp.
         */
        schedulePrevious: number;
        /**
         * Function execution timeout in seconds.
         */
        timeout: number;
    }
    /**
     * Tag
     */
    export type Tag = { 
        /**
         * Tag ID.
         */
        $id: string;
        /**
         * Function ID.
         */
        functionId: string;
        /**
         * The tag creation date in Unix timestamp.
         */
        dateCreated: number;
        /**
         * The entrypoint command in use to execute the tag code.
         */
        command: string;
        /**
         * The code size in bytes.
         */
        size: string;
    }
    /**
     * Execution
     */
    export type Execution = { 
        /**
         * Execution ID.
         */
        $id: string;
        /**
         * Execution permissions.
         */
        $permissions: Permissions;
        /**
         * Function ID.
         */
        functionId: string;
        /**
         * The execution creation date in Unix timestamp.
         */
        dateCreated: number;
        /**
         * The trigger that caused the function to execute. Possible values can be: `http`, `schedule`, or `event`.
         */
        trigger: string;
        /**
         * The status of the function execution. Possible values can be: `waiting`, `processing`, `completed`, or `failed`.
         */
        status: string;
        /**
         * The script exit code.
         */
        exitCode: number;
        /**
         * The script stdout output string. Logs the last 4,000 characters of the execution stdout output.
         */
        stdout: string;
        /**
         * The script stderr output string. Logs the last 4,000 characters of the execution stderr output
         */
        stderr: string;
        /**
         * The script execution time in seconds.
         */
        time: number;
    }
    /**
     * Country
     */
    export type Country = { 
        /**
         * Country name.
         */
        name: string;
        /**
         * Country two-character ISO 3166-1 alpha code.
         */
        code: string;
    }
    /**
     * Continent
     */
    export type Continent = { 
        /**
         * Continent name.
         */
        name: string;
        /**
         * Continent two letter code.
         */
        code: string;
    }
    /**
     * Language
     */
    export type Language = { 
        /**
         * Language name.
         */
        name: string;
        /**
         * Language two-character ISO 639-1 codes.
         */
        code: string;
        /**
         * Language native name.
         */
        nativeName: string;
    }
    /**
     * Currency
     */
    export type Currency = { 
        /**
         * Currency symbol.
         */
        symbol: string;
        /**
         * Currency name.
         */
        name: string;
        /**
         * Currency native symbol.
         */
        symbolNative: string;
        /**
         * Number of decimal digits.
         */
        decimalDigits: number;
        /**
         * Currency digit rounding.
         */
        rounding: number;
        /**
         * Currency code in [ISO 4217-1](http://en.wikipedia.org/wiki/ISO_4217) three-character format.
         */
        code: string;
        /**
         * Currency plural name
         */
        namePlural: string;
    }
    /**
     * Phone
     */
    export type Phone = { 
        /**
         * Phone code.
         */
        code: string;
        /**
         * Country two-character ISO 3166-1 alpha code.
         */
        countryCode: string;
        /**
         * Country name.
         */
        countryName: string;
    }
}