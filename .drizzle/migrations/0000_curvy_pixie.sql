CREATE TABLE `auth_key` (
	`id` varchar(255) PRIMARY KEY NOT NULL,
	`user_id` varchar(15) NOT NULL,
	`primary_key` boolean NOT NULL,
	`hashed_password` varchar(255),
	`expires` bigint);

CREATE TABLE `media` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(100) NOT NULL,
	`file_name` varchar(255) NOT NULL,
	`file_size` varchar(255) NOT NULL DEFAULT '0',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP);

CREATE TABLE `product` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(255) NOT NULL,
	`publish` enum('publish','draft') NOT NULL DEFAULT 'draft',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP);

CREATE TABLE `auth_session` (
	`id` varchar(128) PRIMARY KEY NOT NULL,
	`user_id` varchar(15) NOT NULL,
	`active_expires` bigint NOT NULL,
	`idle_expires` bigint NOT NULL);

CREATE TABLE `auth_user` (
	`id` varchar(15) PRIMARY KEY NOT NULL,
	`name` varchar(100) NOT NULL,
	`email` varchar(100) NOT NULL,
	`password` varchar(255) NOT NULL,
	`role` enum('admin','user') NOT NULL DEFAULT 'user',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP);

ALTER TABLE `auth_key` ADD CONSTRAINT `auth_key_user_id_auth_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `auth_user`(`id`) ON DELETE no action ON UPDATE no action;
ALTER TABLE `auth_session` ADD CONSTRAINT `auth_session_user_id_auth_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `auth_user`(`id`) ON DELETE no action ON UPDATE no action;