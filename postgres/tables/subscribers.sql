BEGIN TRANSACTION;

CREATE TABLE public.subscribers
(
    id serial PRIMARY KEY NOT NULL,
    email text UNIQUE NOT NULL,
    joined timestamp NOT NULL
);

COMMIT;