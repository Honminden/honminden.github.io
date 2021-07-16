
/**
 * Honminden's wrapper of localStorage
 * @version 1.0
 */
export default class HonStorage
{
    /**
     * recommended constuctor
     * @public
     * @param {String} name name of the storage, defining key in localStorage
     */
    constructor(name="newHonStorage")
    {
        this.meta = {
            name: name
        };
        this.db = null;
        
        this.init();
    }

    /**
     * initialize db object
     * @private
     */
    init()
    {
        try
        {
            this.db = JSON.parse(localStorage.getItem(this.meta.name));
        }
        catch (e)
        {
            // do nothing
        }
        if (!(this.db instanceof Object))
        {
            // cases:
            // 1. key not found in localStorage
            // 2. value is corrupted
            this.createNewDB();
        }
    }

    /**
     * create new db object and store new key-value pair in localStorage
     * @private
     */
    createNewDB()
    {
        this.db = {};
        localStorage.setItem(this.meta.name, JSON.stringify(this.db));
    }

    /**
     * roll back db object to localStorage version, discarding all changes
     * @public
     * @throws rollback failure error
     */
    rollback()
    {
        try
        {
            this.db = JSON.parse(localStorage.getItem(this.meta.name));
        }
        catch (e)
        {
            // do nothing
        }
        if (!(this.db instanceof Object))
        {
            // case: db corruption during usage
            throw Error("rollback failure due to corruption of stored data");
        }
    }

    /**
     * commit changes to localStorage
     * @public
     * @throws commit failure error
     */
    commit()
    {
        let dbStr = null;
        try {
            dbStr = JSON.stringify(this.db)
        }
        catch (e)
        {
            // case: db object corruption during usage
            throw Error("commit failure due to corruption of changed data");
        }

        try
        {
            localStorage.setItem(this.meta.name, dbStr);
        }
        catch (e)
        {
            // case:
            // 1. localStorage does not have enough space
            // 2. other localStorage problems
            throw Error("commit failure due to localStorage problems");
        }
    }

    /**
     * create key-value pair in db
     * warning: some values may change due to JSON APIs' behavior, try not to store them
     * @public
     * @param {String} key the key to locate value
     * @param {*} value the value to store
     * @throws key exists error
     */
    create(key, value)
    {
        if (this.db[key] !== undefined)
        {
            // case: the new key already exists in db
            throw Error("key exists due to a duplicated key");
        }

        this.db[key] = {
            meta: {
                created: new Date(),
                lastModified: new Date()
            },
            content: value
        };
    }
    
    /**
     * fetch pack by key in db
     * @param {String} key the key to locate value
     * @throws key not exist error
     * @returns the pack containing value and meta information
     */
    fetch(key)
    {
        let pack = this.db[key];
        if (pack === undefined)
        {
            // case: the key does not exist in db
            throw Error("key does not exist");
        }

        return pack;
    }

    /**
     * read value by key in db
     * @public
     * @param {String} key the key to locate value
     * @throws key not exist error
     * @returns the value
     */
    read(key)
    {
        return this.fetch(key).content;
    }

    /**
     * read created time of a key in db
     * @param {String} key the key to check created time
     * @throws key not exist error
     * @returns the created time
     */
    whenCreated(key)
    {
        return this.fetch(key).meta.created;
    }

    /**
     * read last-modified time of a key in db
     * @param {String} key the key to check last-modified time
     * @throws key not exist error
     * @returns the last-modified time
     */
    whenLastModified(key)
    {
        return this.fetch(key).meta.lastModified;
    }
    
    /**
     * update value by key in db
     * @param {String} key the key to locate value
     * @param {*} value new value to replace the old one
     * @throws key not exist error
     */
    update(key, value)
    {
        let pack = this.fetch(key);
        pack.content = value;
        pack.meta.lastModified = new Date();
    }

    /**
     * 
     * @param {String} key the key to locate value
     */
    delete(key)
    {
        delete this.db[key];
    }
}