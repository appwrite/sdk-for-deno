export namespace Models {
    /**
     * Documents List
     */
    export type DocumentList<Document extends Models.Document> = { 
        /**
         * Total number of documents documents that matched your query.
         */
        total: number;
        /**
         * List of documents.
         */
        documents: Document[];
    }
    /**
     * Collections List
     */
    export type CollectionList = { 
        /**
         * Total number of collections documents that matched your query.
         */
        total: number;
        /**
         * List of collections.
         */
        collections: Collection[];
    }
    /**
     * Indexes List
     */
    export type IndexList = { 
        /**
         * Total number of indexes documents that matched your query.
         */
        total: number;
        /**
         * List of indexes.
         */
        indexes: Index[];
    }
    /**
     * Users List
     */
    export type UserList<Preferences extends Models.Preferences> = { 
        /**
         * Total number of users documents that matched your query.
         */
        total: number;
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
         * Total number of sessions documents that matched your query.
         */
        total: number;
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
         * Total number of logs documents that matched your query.
         */
        total: number;
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
         * Total number of files documents that matched your query.
         */
        total: number;
        /**
         * List of files.
         */
        files: File[];
    }
    /**
     * Buckets List
     */
    export type BucketList = { 
        /**
         * Total number of buckets documents that matched your query.
         */
        total: number;
        /**
         * List of buckets.
         */
        buckets: Bucket[];
    }
    /**
     * Teams List
     */
    export type TeamList = { 
        /**
         * Total number of teams documents that matched your query.
         */
        total: number;
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
         * Total number of memberships documents that matched your query.
         */
        total: number;
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
         * Total number of functions documents that matched your query.
         */
        total: number;
        /**
         * List of functions.
         */
        functions: Function[];
    }
    /**
     * Runtimes List
     */
    export type RuntimeList = { 
        /**
         * Total number of runtimes documents that matched your query.
         */
        total: number;
        /**
         * List of runtimes.
         */
        runtimes: Runtime[];
    }
    /**
     * Deployments List
     */
    export type DeploymentList = { 
        /**
         * Total number of deployments documents that matched your query.
         */
        total: number;
        /**
         * List of deployments.
         */
        deployments: Deployment[];
    }
    /**
     * Executions List
     */
    export type ExecutionList = { 
        /**
         * Total number of executions documents that matched your query.
         */
        total: number;
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
         * Total number of countries documents that matched your query.
         */
        total: number;
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
         * Total number of continents documents that matched your query.
         */
        total: number;
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
         * Total number of languages documents that matched your query.
         */
        total: number;
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
         * Total number of currencies documents that matched your query.
         */
        total: number;
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
         * Total number of phones documents that matched your query.
         */
        total: number;
        /**
         * List of phones.
         */
        phones: Phone[];
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
         * Collection read permissions.
         */
        $read: string[];
        /**
         * Collection write permissions.
         */
        $write: string[];
        /**
         * Collection name.
         */
        name: string;
        /**
         * Collection enabled.
         */
        enabled: boolean;
        /**
         * Collection permission model. Possible values: `document` or `collection`
         */
        permission: string;
        /**
         * Collection attributes.
         */
        attributes: (AttributeBoolean | AttributeInteger | AttributeFloat | AttributeEmail | AttributeEnum | AttributeUrl | AttributeIp | AttributeString)[];
        /**
         * Collection indexes.
         */
        indexes: Index[];
    }
    /**
     * Attributes List
     */
    export type AttributeList = { 
        /**
         * Total number of attributes in the given collection.
         */
        total: number;
        /**
         * List of attributes.
         */
        attributes: (AttributeBoolean | AttributeInteger | AttributeFloat | AttributeEmail | AttributeEnum | AttributeUrl | AttributeIp | AttributeString)[];
    }
    /**
     * AttributeString
     */
    export type AttributeString = { 
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Attribute size.
         */
        size: number;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        xdefault?: string;
    }
    /**
     * AttributeInteger
     */
    export type AttributeInteger = { 
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Minimum value to enforce for new documents.
         */
        min?: number;
        /**
         * Maximum value to enforce for new documents.
         */
        max?: number;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        xdefault?: number;
    }
    /**
     * AttributeFloat
     */
    export type AttributeFloat = { 
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Minimum value to enforce for new documents.
         */
        min?: number;
        /**
         * Maximum value to enforce for new documents.
         */
        max?: number;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        xdefault?: number;
    }
    /**
     * AttributeBoolean
     */
    export type AttributeBoolean = { 
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        xdefault?: boolean;
    }
    /**
     * AttributeEmail
     */
    export type AttributeEmail = { 
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * String format.
         */
        format: string;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        xdefault?: string;
    }
    /**
     * AttributeEnum
     */
    export type AttributeEnum = { 
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * Array of elements in enumerated type.
         */
        elements: string[];
        /**
         * String format.
         */
        format: string;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        xdefault?: string;
    }
    /**
     * AttributeIP
     */
    export type AttributeIp = { 
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * String format.
         */
        format: string;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        xdefault?: string;
    }
    /**
     * AttributeURL
     */
    export type AttributeUrl = { 
        /**
         * Attribute Key.
         */
        key: string;
        /**
         * Attribute type.
         */
        type: string;
        /**
         * Attribute status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: string;
        /**
         * Is attribute required?
         */
        required: boolean;
        /**
         * Is attribute an array?
         */
        array?: boolean;
        /**
         * String format.
         */
        format: string;
        /**
         * Default value for attribute when not provided. Cannot be set when attribute is required.
         */
        xdefault?: string;
    }
    /**
     * Index
     */
    export type Index = { 
        /**
         * Index Key.
         */
        key: string;
        /**
         * Index type.
         */
        type: string;
        /**
         * Index status. Possible values: `available`, `processing`, `deleting`, `stuck`, or `failed`
         */
        status: string;
        /**
         * Index attributes.
         */
        attributes: string[];
        /**
         * Index orders.
         */
        orders: string[];
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
         * Document read permissions.
         */
        $read: string[];
        /**
         * Document write permissions.
         */
        $write: string[];
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
         * User ID.
         */
        userId: string;
        /**
         * User Email.
         */
        userEmail: string;
        /**
         * User Name.
         */
        userName: string;
        /**
         * API mode when event triggered.
         */
        mode: string;
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
         * User status. Pass `true` for enabled and `false` for disabled.
         */
        status: boolean;
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
         * Session Provider Access Token.
         */
        providerAccessToken: string;
        /**
         * Date, the Unix timestamp of when the access token expires.
         */
        providerAccessTokenExpiry: number;
        /**
         * Session Provider Refresh Token.
         */
        providerRefreshToken: string;
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
         * Bucket ID.
         */
        bucketId: string;
        /**
         * File read permissions.
         */
        $read: string[];
        /**
         * File write permissions.
         */
        $write: string[];
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
        /**
         * Total number of chunks available
         */
        chunksTotal: number;
        /**
         * Total number of chunks uploaded
         */
        chunksUploaded: number;
    }
    /**
     * Bucket
     */
    export type Bucket = { 
        /**
         * Bucket ID.
         */
        $id: string;
        /**
         * File read permissions.
         */
        $read: string[];
        /**
         * File write permissions.
         */
        $write: string[];
        /**
         * Bucket permission model. Possible values: `bucket` or `file`
         */
        permission: string;
        /**
         * Bucket creation date in Unix timestamp.
         */
        dateCreated: number;
        /**
         * Bucket update date in Unix timestamp.
         */
        dateUpdated: number;
        /**
         * Bucket name.
         */
        name: string;
        /**
         * Bucket enabled.
         */
        enabled: boolean;
        /**
         * Maximum file size supported.
         */
        maximumFileSize: number;
        /**
         * Allowed file extensions.
         */
        allowedFileExtensions: string[];
        /**
         * Bucket is encrypted.
         */
        encryption: boolean;
        /**
         * Virus scanning is enabled.
         */
        antivirus: boolean;
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
         * Total number of team members.
         */
        total: number;
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
         * User name.
         */
        userName: string;
        /**
         * User email address.
         */
        userEmail: string;
        /**
         * Team ID.
         */
        teamId: string;
        /**
         * Team name.
         */
        teamName: string;
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
         * Execution permissions.
         */
        execute: string[];
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
         * Function status. Possible values: `disabled`, `enabled`
         */
        status: string;
        /**
         * Function execution runtime.
         */
        runtime: string;
        /**
         * Function&#039;s active deployment ID.
         */
        deployment: string;
        /**
         * Function environment variables.
         */
        vars: object;
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
     * Runtime
     */
    export type Runtime = { 
        /**
         * Runtime ID.
         */
        $id: string;
        /**
         * Runtime Name.
         */
        name: string;
        /**
         * Runtime version.
         */
        version: string;
        /**
         * Base Docker image used to build the runtime.
         */
        base: string;
        /**
         * Image name of Docker Hub.
         */
        image: string;
        /**
         * Name of the logo image.
         */
        logo: string;
        /**
         * List of supported architectures.
         */
        supports: string[];
    }
    /**
     * Deployment
     */
    export type Deployment = { 
        /**
         * Deployment ID.
         */
        $id: string;
        /**
         * Resource ID.
         */
        resourceId: string;
        /**
         * Resource type.
         */
        resourceType: string;
        /**
         * The deployment creation date in Unix timestamp.
         */
        dateCreated: number;
        /**
         * The entrypoint file to use to execute the deployment code.
         */
        entrypoint: string;
        /**
         * The code size in bytes.
         */
        size: number;
        /**
         * The current build ID.
         */
        buildId: string;
        /**
         * Whether the deployment should be automatically activated.
         */
        activate: boolean;
        /**
         * The deployment status.
         */
        status: string;
        /**
         * The build stdout.
         */
        buildStdout: string;
        /**
         * The build stderr.
         */
        buildStderr: string;
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
         * Execution read permissions.
         */
        $read: string[];
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
         * The script status code.
         */
        statusCode: number;
        /**
         * The script response output string. Logs the last 4,000 characters of the execution response output.
         */
        response: string;
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
    /**
     * Health Antivirus
     */
    export type HealthAntivirus = { 
        /**
         * Antivirus version.
         */
        version: string;
        /**
         * Antivirus status. Possible values can are: `disabled`, `offline`, `online`
         */
        status: string;
    }
    /**
     * Health Queue
     */
    export type HealthQueue = { 
        /**
         * Amount of actions in the queue.
         */
        size: number;
    }
    /**
     * Health Status
     */
    export type HealthStatus = { 
        /**
         * Duration in milliseconds how long the health check took.
         */
        ping: number;
        /**
         * Service status. Possible values can are: `pass`, `fail`
         */
        status: string;
    }
    /**
     * Health Time
     */
    export type HealthTime = { 
        /**
         * Current unix timestamp on trustful remote server.
         */
        remoteTime: number;
        /**
         * Current unix timestamp of local server where Appwrite runs.
         */
        localTime: number;
        /**
         * Difference of unix remote and local timestamps in milliseconds.
         */
        diff: number;
    }
}