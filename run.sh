#!/bin/bash

source ./env.sh

docker run -d -p ${HOST_PORT}:${APPLICATION_PORT} --name ${APPLICATION_NAME} ${IMAGE_NAME}:${IMAGE_VERSION}