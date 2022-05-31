use CharacterSheet;
create table rulesets ( 
	id int auto_increment primary key, 
	ruleset_name varchar(255)
);
create table campaigns (
	id int auto_increment primary key, 
    campaign_name varchar(255), 
    ruleset_id int
);
create table users (
	id int auto_increment primary key,
    username varchar(255)
);
create table characters (
	id int auto_increment primary key, 
    campaign_id int not null,
    character_name varchar(255)
);
create table skills (
	id int auto_increment primary key,
    ruleset_id int not null,
    skill_name varchar(255),
    max_value int,
    skill_cost int,
    shortname varchar(255),
    calculate_value varchar(255)
);
create table stats (
	id int auto_increment primary key, 
    ruleset_id int not null,
    stat_name varchar(255),
    shortname varchar(255)
);
create table saves (
	id int auto_increment primary key, 
    ruleset_id int not null,
    save_name varchar(255),
    shortname varchar(255),
    calculate_value varchar(255)
);
create table resources (
	id int auto_increment primary key, 
    name varchar(255)
);
create table abilities (
	id int auto_increment primary key, 
    ruleset_id int not null,
    resource_id int not null
);
create table inventory (
	id int auto_increment primary key,
    character_id int not null,
    inventory_entry_name varchar(255),
    inventory_entry_description varchar(255),
    quatity int
);

/* Relational Databases */

create table character_mtm_skill (
	id int auto_increment primary key, 
    skill_id int not null,
    character_id int not null,
    ranks int
);

create table character_mtm_save (
	id int auto_increment primary key, 
    character_id int not null,
    save_id int not null
);

create table character_mtm_ability (
	id int auto_increment primary key,
    character_id int not null,
    ability_id int not null
);

create table character_mtm_resources (
	id int auto_increment primary key,
    character_id int not null,
    resource_id int not null
)