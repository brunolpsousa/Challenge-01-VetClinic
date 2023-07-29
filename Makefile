include .env

up:
	docker-compose up -d

down:
	docker-compose down

stop:
	docker-compose stop

restart:
	docker-compose restart

log:
	docker-compose logs -f

test:
	docker-compose run --rm test

coverage:
	docker-compose run -it --rm test npm run coverage

.PHONY: up down stop restart log test coverage
