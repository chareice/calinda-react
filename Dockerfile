FROM nginx:1.9.5
COPY nginx.conf /etc/nginx/conf.d/default.conf
# COPY storage/chareice.com.crt /etc/nginx/server.crt
# COPY storage/chareice.com.key /etc/nginx/server.key
COPY dist /usr/share/nginx/html
