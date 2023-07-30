include .env

upd:
	docker-compose up -d

up:
	docker-compose up

down:
	docker-compose down

stop:
	docker-compose stop

restart:
	docker-compose restart

recreate:
	docker-compose up -d --force-recreate

logs:
	docker-compose logs -f

test:
	docker-compose run --rm test

coverage:
	docker-compose run -it --rm test npm run coverage

.PHONY: upd up down stop restart recreate logs test coverage
