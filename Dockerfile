FROM node:14.15.4-slim

#RUN apt update && apt install -y --no-install-recommends \
  #git \
  #ca-certificates \
  #default-jre

WORKDIR /home/node/app

CMD ["sh", "-c", "npm i && tail -f /dev/null"]