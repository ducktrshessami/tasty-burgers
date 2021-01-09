create table burgers(
    id int primary key auto_increment not null,
    burger_name varchar(100) not null,
    devoured bool default false not null
);
