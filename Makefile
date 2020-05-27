usage = "\
Usage: make [target] \n\n\
Available targets:\n\
install   安装\n\
dev       开发\n\
build     打包\n\
release   发布"

default:
	@echo $(usage)

install:
	yarn

dev: install
	yarn dev

build: install
	yarn build

release: build
	yarn release
