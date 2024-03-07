CREATE TABLE public."Logins"
(
    id serial NOT NULL,
    username character varying(32) NOT NULL,
    password character varying(64) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT uq_logins_username UNIQUE (username)
        INCLUDE(username)
);