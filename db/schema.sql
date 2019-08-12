drop database if exists bucketlist;

create database bucketlist;

use bucketlist;

create table list (
  category varchar(75),
  item varchar(50),
  completed boolean default false
);