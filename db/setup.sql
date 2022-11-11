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
	character_name varchar(255),
    current_hp int not null,
    max_hp int not null,
    tmp_hp int not null
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

CREATE TABLE bios (
	id int auto_increment primary key,
    ruleset_id int not null,
    bio_name varchar(255)
);

CREATE TABLE inventory (
	id int auto_increment primary key,
	character_id int not null,
	inventory_entry_name varchar(255),
	inventory_entry_description varchar(255),
	quatity int
);

/* Relational Databases */

CREATE TABLE characters_mtm_skills (
	id int auto_increment primary key, 
	skill_id int not null,
	character_id int not null,
	ranks int
);

CREATE TABLE characters_mtm_saves (
	id int auto_increment primary key, 
	character_id int not null,
	save_id int not null,
	save_value int not null
);

CREATE TABLE characters_mtm_abilities (
	id int auto_increment primary key,
	character_id int not null,
	ability_id int not null,
	ability_value int not null
);

CREATE TABLE characters_mtm_resources (
	id int auto_increment primary key,
	character_id int not null,
	resource_id int not null,
	current_value int not null,
    max_value int not null
);

CREATE TABLE characters_mtm_stats (
	id int auto_increment primary key,
	character_id int not null,
	stat_id int not null,
	stat_value int not null
);

CREATE TABLE characters_mtm_bios (
	id int auto_increment primary key,
	character_id int not null,
	bio_id int not null,
	bio_value int not null
);
END //

DELIMITER //
CREATE FUNCTION create_character(campaign_id int, character_name varchar(255))
RETURNS INT
DETERMINISTIC
BEGIN
	DECLARE done INT DEFAULT FALSE;
	DECLARE stat_id int;
	DECLARE StatCursor CURSOR FOR SELECT id FROM stats WHERE ruleset_id = @ruleset;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
    
    SELECT ruleset_id INTO @ruleset FROM campaigns WHERE id = campaign_id;
    IF (SELECT EXISTS(SELECT ruleset_id FROM campaigns WHERE id = campaign_id) = 0) THEN
		RETURN -1;
	END IF;
	INSERT INTO characters(campaign_id,character_name, current_hp, max_hp, tmp_hp) VALUES (campaign_id,character_name,0,0,0);
    SELECT last_insert_id() INTO @char_id; 
    
    OPEN StatCursor;
    read_loop: LOOP
		FETCH StatCursor INTO stat_id;
        IF done THEN
			LEAVE read_loop;
		END IF;
        INSERT INTO characters_mtm_stats(character_id, stat_id, stat_value) VALUES (@char_id, stat_id, 10);
    END LOOP;
    CLOSE StatCursor;
    
    RETURN @char_id;
END //

CREATE FUNCTION delete_character(character_id int)
RETURNS INT
DETERMINISTIC
BEGIN
	# Warning, this DELETES a character and all associated entries!!!
    
    IF (SELECT EXISTS(SELECT id FROM characters WHERE id = character_id) = 0) THEN
		RETURN -1;
	END IF;
    
    DELETE FROM characters_mtm_stats WHERE character_id = character_id;
    DELETE FROM characters_mtm_saves WHERE character_id = character_id;
    DELETE FROM characters_mtm_skills WHERE character_id = character_id;
    DELETE FROM characters_mtm_abilities WHERE character_id = character_id;
    DELETE FROM characters_mtm_resources WHERE character_id = character_id;
    
    DELETE FROM characters WHERE id = character_id;
    
    RETURN 1;
END //

CREATE FUNCTION create_campaign(campaign_name varchar(255), ruleset_id int)
RETURNS INT
DETERMINISTIC
BEGIN
    IF (SELECT EXISTS(SELECT id FROM rulesets WHERE id = ruleset_id) = 0) THEN
		RETURN -1;
	END IF;
	INSERT INTO campaigns(campaign_name, ruleset_id) VALUES (campaign_name, ruleset_id);
    SELECT last_insert_id() INTO @campaign_id; 
    
    RETURN @campaign_id;
END //

CREATE FUNCTION delete_campaign(campaign_id int)
RETURNS INT
DETERMINISTIC
BEGIN
	# Warning, this DELETES a campaign!!!
    
    IF (SELECT EXISTS(SELECT id FROM campaigns WHERE id = campaign_id) = 0) THEN
		RETURN -1;
	END IF;
    
    DELETE FROM campaigns WHERE id = campaign_id;
    
    RETURN 1;
END //

DELIMITER ;