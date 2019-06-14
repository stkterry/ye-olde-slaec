# Database Schema

## `users`
| column name       | data type | details                   |
|:------------------|:---------:|:--------------------------|
| `id`              | integer   | not null, primary key     |
| `username`        | string    | not null, indexed, unique |
| `email`           | string    | not null, indexed, unique |         
| `icon_url`        | string    |                           |        
| `password_digest` | string    | not null                  |
| `session_token`   | string    | not null, indexed, unique |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |

+ index on `username, unique: true`
+ index on `email, unique: true`
+ index on `session_token, unique: true`


## `messages`
| column name       | data type | details                   |
|:------------------|:---------:|:--------------------------|
| `id`              | integer   | not null, primary key     |
| `body`            | string    | not null                  |
| `reactions`       | string    |                           |
| `author_id`       | string    | not null, indexed, foreign key |        
| `channel_id`      | string    | not null, indexed, foreign key |
| `thread_id`       | string    | indexed, foreign key      |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |

+ `author_id` references `users`
+ `channel_id` references `channels`
+ `thread_id` references `messages`
+ index on `:thread_id`
+ index on `[:author_id, :channel_id], unique: true`



## `channels`
| column name       | data type | details                   |
|:------------------|:---------:|:--------------------------|
| `id`              | integer   | not null, primary key     |
| `name`            | string    | not null                  |
| `created_by`      | integer   | not null, indexed, foreign key     |
| `purpose`         | string    |                           |
| `topic`           | string    |                           |
| `is_dm`           | string    | not null, default false   |
| `is_private`      | string    | not null, default false   |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |

+ `created_by` references `users`
+ index on `:created_by`


## `subscriptions` (joins)
| column name       | data type | details                   |
|:------------------|:---------:|:--------------------------|
| `id`              | integer   | not null, primary key     |
| `user_id`         | integer   | not null, indexed, foreign key  |
| `channel_id`      | integer   | not null, indexed, foreign key  |
| `thread_id`       | integer   | indexed, foreign key      |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |

+ `user_id` references `users`
+ `channel_id` references `channels`
+ `thread_id` references `messages`