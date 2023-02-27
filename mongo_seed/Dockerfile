FROM mongo:5.0.7

ARG DATABASE_URI
ARG USERNAME
ARG PASSWORD

ENV DATABASE_URI ${DATABASE_URI}
ENV USERNAME ${USERNAME}
ENV PASSWORD ${PASSWORD}

COPY *.json .

CMD mongoimport --username ${USERNAME} --password ${PASSWORD} --uri ${DATABASE_URI} -d monster_strike_db -c monsters --jsonArray --file /ms_db.json