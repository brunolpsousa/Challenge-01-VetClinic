include .env

args = $(shell arg="$(filter-out $@,$(MAKECMDGOALS))" && echo $${arg:-${1}})
current_dir = $(notdir $(shell pwd))
dir = $(subst #,,${current_dir})
sep = $(shell command -vp docker && echo - || echo _)

upd:
	docker-compose up -d $(call args,)

up:
	make ${args} && make logs

down:
	docker-compose down $(call args,)

stop:
	docker-compose stop $(call args,)

restart:
	docker-compose restart $(call args,)

build:
	docker-compose build --no-cache $(call args,)

logs:
	docker-compose logs -f

sh:
	docker-compose exec $(call args,api) sh

prod:
	docker-compose run -e NODE_ENV=production --name api_prod -p 3001:${PORT} --rm $(call args,api) sh -c "npm run build && npm start"

test:
	docker-compose exec $(call args,api) npm test

coverage:
	docker-compose exec $(call args,api) npm run coverage

rm:
	docker rmi ${dir}${sep}${args}

rmf:
	docker rmi ${dir}${sep}${args} -f

%:
	@:

.PHONY: upd up down stop restart build logs sh prod test coverage rm rmf
