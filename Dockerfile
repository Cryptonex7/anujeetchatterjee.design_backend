FROM node:10.15.0

WORKDIR /usr/src/anujeetchatterjee-backend

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]
