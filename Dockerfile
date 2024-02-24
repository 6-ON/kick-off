FROM node:20-alpine3.19
WORKDIR /app
COPY package*.json .
RUN npm i -yes --verbose
COPY . .
# expo ports
EXPOSE 8081
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
CMD ["npm","run", "start"]
# docker build -t kick-off .
# docker run -it -p 19000:19000 -p 19001:19001 -p 19002:19002 -p 8081:8081 --net=host kick-off