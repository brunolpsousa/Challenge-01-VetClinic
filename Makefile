include .env

upd:
	docker-compose up -d

up:
	docker-compose up -d && docker-compose logs -f

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
	docker-compose run --rm api npm run test

coverage:
	docker-compose run -it --rm api npm run coverage

.PHONY: upd up down stop restart recreate logs test coverage
