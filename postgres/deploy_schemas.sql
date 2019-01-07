-- Deploy fesh database tables

\i '/docker-entrypoint-initdb.d/tables/subscribers.sql'
\i '/docker-entrypoint-initdb.d/seed/seed.sql'