FROM node:lts-slim

ARG USER_ID=1000
ARG GROUP_ID=1000
RUN echo "Used user id: ${USER_ID}\nUsed group id: ${GROUP_ID}"

# Update system
RUN apt update && apt upgrade -y && apt autoremove -y

# Upgrade python package manager
RUN npm install --location=global npm

# Change working directory
WORKDIR /var/www

# Copy folders and files – It's important to copy files before changing their ownership
COPY . .

# Change ID of www-data user and group to ID from ENV
RUN if [ ${USER_ID:-0} -ne 0 ] && [ ${GROUP_ID:-0} -ne 0 ]; then \
    if getent passwd www-data ; then echo "Delete user www-data" && userdel -f www-data;fi &&\
    if getent group www-data ; then echo "Delete group www-data" && groupdel www-data;fi &&\
    echo "Add new group www-data" && groupadd -g ${GROUP_ID} www-data &&\
    echo "Add new user www-data" && useradd -l -u ${USER_ID} -g www-data www-data &&\
    echo "Change ownership of workdir" && mkdir -p /var/www && chown --changes --no-dereference --recursive www-data:www-data /var/www &&\
    echo "Change ownership of homedir" && mkdir -p /home/www-data && chown --changes --no-dereference --recursive www-data:www-data /home/www-data \
;fi

# Change user
USER www-data:www-data

# Install requirements
RUN npm install

# Expose port
EXPOSE 4200

# Command on start of container
CMD npm run -- ng serve --host 0.0.0.0 --disable-host-check 
