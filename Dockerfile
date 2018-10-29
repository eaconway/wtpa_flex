FROM ubuntu:14.04

RUN apt-get update && \
    apt-get install curl -y && \
    curl -sL https://deb.nodesource.com/setup_10.x | sudo bash - && \
    curl -sL https://deb.nodesource.com/setup_8.x | sudo bash - && \
    apt install nodejs -y



COPY . /WTPA

RUN cd WTPA && \
    npm install && \
    chmod a+x entrypoint.sh

EXPOSE 3000
WORKDIR /WTPA

ENTRYPOINT ["/WTPA/entrypoint.sh"]
CMD [""]
