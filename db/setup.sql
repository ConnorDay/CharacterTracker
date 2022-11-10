DROP DATABASE IF EXISTS CharacterSheet;
CREATE database CharacterSheet;
USE CharacterSheet;
BEGIN; # Create all the necessary tables
CREATE TABLE rulesets ( 
	id int auto_increment primary key, 
	ruleset_name varchar(255)
);
CREATE TABLE campaigns (
	id int auto_increment primary key, 
	campaign_name varchar(255), 
	ruleset_id int
);
CREATE TABLE users (
	id int auto_increment primary key,
	username varchar(255)
);
CREATE TABLE characters (
	id int auto_increment primary key, 
	campaign_id int not null,
	character_name varchar(255)
);
CREATE TABLE skills (
	id int auto_increment primary key,
	ruleset_id int not null,
	skill_name varchar(255),
	max_value int,
	skill_cost int,
	shortname varchar(255),
	calculate_value varchar(255)
);
CREATE TABLE stats (
	id int auto_increment primary key, 
	ruleset_id int not null,
	stat_name varchar(255),
	shortname varchar(255)
);
CREATE TABLE saves (
	id int auto_increment primary key, 
	ruleset_id int not null,
	save_name varchar(255),
	shortname varchar(255),
	calculate_value varchar(255)
);
CREATE TABLE resources (
	id int auto_increment primary key, 
	name varchar(255)
);
CREATE TABLE abilities (
	id int auto_increment primary key, 
	ruleset_id int not null,
	resource_id int not null
);
CREATE TABLE inventory (
	id int auto_increment primary key,
	character_id int not null,
	inventory_entry_name varchar(255),
	inventory_entry_description varchar(255),
	quatity int
);

/* Relational Databases */

CREATE TABLE character_mtm_skill (
	id int auto_increment primary key, 
	skill_id int not null,
	character_id int not null,
	ranks int
);

CREATE TABLE character_mtm_save (
	id int auto_increment primary key, 
	character_id int not null,
	save_id int not null,
	save_value int not null
);

CREATE TABLE character_mtm_ability (
	id int auto_increment primary key,
	character_id int not null,
	ability_id int not null,
	ability_value int not null
);

CREATE TABLE character_mtm_resources (
	id int auto_increment primary key,
	character_id int not null,
	resource_id int not null
	# todo?
);

CREATE TABLE character_mtm_stats (
	id int auto_increment primary key,
	character_id int not null,
	stat_id int not null,
	stat_value int not null
);
END //

DELIMITER //
CREATE FUNCTION create_character(campaign_id int, character_name varchar(255))
RETURNS boolean
DETERMINISTIC
BEGIN
	DECLARE done INT DEFAULT FALSE;
	DECLARE stat_id int;
	DECLARE StatCursor CURSOR FOR SELECT id FROM stats WHERE ruleset_id = @ruleset;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
    
    SELECT ruleset_id INTO @ruleset FROM campaigns WHERE id = campaign_id;
    
    IF (SELECT EXISTS(SELECT ruleset_id FROM campaigns WHERE id = campaign_id) = 0) THEN
		RETURN FALSE;
	END IF;
    
	INSERT INTO characters(campaign_id,character_name) VALUES (campaign_id,character_name);
    SELECT last_insert_id() INTO @char_id; 
    
    
    OPEN StatCursor;
    
    read_loop: LOOP
		FETCH StatCursor INTO stat_id;
        IF done THEN
			LEAVE read_loop;
		END IF;
        INSERT INTO character_mtm_stats(character_id, stat_id, stat_value) VALUES (@char_id, stat_id, 10);
    END LOOP;
    
    CLOSE StatCursor;
    
    RETURN TRUE;
END //
DELIMITER ;