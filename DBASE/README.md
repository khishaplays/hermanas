# Database Notes

## Categories of Databases

There are two main categories of databases:

1. Relational Databases
2. Non-Relational Databases

---

## 1. Relational Databases

Relational databases store data in **tables** consisting of rows and columns.
They are commonly used when data has clear relationships.

### Advantages

1. **Relationships**
   - Tables can be connected using primary keys and foreign keys.

2. **Easy Queries**
   - Data can be retrieved and manipulated using structured queries.

3. **SQL**
   - Relational databases use SQL (Structured Query Language).

4. **Structured Data**
   - Data follows a clearly defined structure.

### Disadvantages

1. **Scaling limitations**
   - Traditional relational databases can be harder to scale horizontally
     when dealing with extremely large datasets.

2. **Fixed Schema**
   - The structure of the data normally needs to be defined beforehand.
   - Changing the schema later may require migrations.

### Examples

- SQLite
- PostgreSQL
- MySQL
- CockroachDB

---

## 2. Non-Relational Databases (NoSQL)

Non-relational databases do not necessarily organize information into
traditional relational tables.

They can store large amounts of structured, semi-structured, or
unstructured data.

### Advantages

1. **Very Large Data Stores**
   - Suitable for applications dealing with huge amounts of data.

2. **Flexible Data Structures**
   - Data does not always need to follow one fixed schema.

3. **IoT and Sensor Data**
   - Useful for systems generating large amounts of rapidly changing data.

4. **Offline Applications**
   - Some databases support offline-first applications and synchronization.
   - Example: CouchDB.

5. **Document Storage**
   - Document databases can store JSON-like documents.
   - Example: MongoDB.

### Disadvantages

1. **Relationships Can Be More Difficult**
   - Related data may be stored separately or embedded.
   - Applications may need to manage some relationships manually.

2. **Different Query Models**
   - Unlike relational databases, there is no single universal query
     language equivalent to SQL across all NoSQL databases.

### Examples

- MongoDB
- Amazon DynamoDB
- CouchDB
- PocketBase
- Redis

---

## Quick Comparison

| Feature        | Relational              | Non-Relational             |
| -------------- | ----------------------- | -------------------------- |
| Data model     | Tables                  | Documents, key-value, etc. |
| Schema         | Usually predefined      | Often flexible             |
| Relationships  | Strong support          | Depends on database        |
| Query language | SQL                     | Varies                     |
| Example        | PostgreSQL              | MongoDB                    |
| Common use     | Structured related data | Flexible/large-scale data  |

## Important Terms

### Primary Key

A value that uniquely identifies a row in a table.

### Foreign Key

A value used to create a relationship between tables.

### Schema

The defined structure of data stored in a database.

### SQL

**Structured Query Language** — a language used to communicate with
relational databases.

### Cache

Temporary high-speed data storage used to retrieve frequently accessed
information quickly. Redis is commonly used for caching.
