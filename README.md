# Restaurant Progressive Web App - In Development

Check out a demo here:

- site: https://iph.colinmac.me
- graphql: https://iph.colinmac.me/graphql

This site uses a Node based GraphQL server to access a Wordpress API initiated through the Wordpress Command Line Interface. This data is displayed with with an Apollo client and a React.js frontend, organized by feature and the data layer separated through containers.

The website is maintained and customized through custom post types, categories, and taxonomies, making it user friendly on the back-end to non-programming individuals.

The front end is styled with a mobile first mentality, using CSS and Styled Components for better separation of components. Data flow is always moving down through the app, with state/data management through containers. It uses default data and caching for an offline experience and faster loading times.

The design of the site was done through Adobe Photoshop and Illustrator. The color scheme is entirely comprised of the company's yellow theme color. Even the overlay's, blacks, and whites have a tint of the thematic color, enhancing the overall experience and brand recognition of the site.

After the main features are finished. This will be integrated with a customizable loyalty user interface, built on the same stack.

## Screenshots

- **Dynamic Frontpage / Caching / Multiple API's / Responsive**

  ![Dynamic Frontpagey](https://i.imgur.com/gTSgdlz.gif)

## Running the tests

Coming Soon!

## Deployment

---

- NGINX is used to serve the web-app frontend.
- Apache is used to serve the WordPress backend.
- PM2 is used to continuously deploy the frontend web-app, graphQL express server, and the WordPress wp-cli web-app.

### Server Configuration

NGINX is used as a reverse proxy for Apache and WordPress CLI server (which uses PHP's built in web server). This setup allows the use of .htaccess and WordPress multi-site setup. Example configurations below:

#### NGINX

```
upstream wp_api {
server 127.0.0.1:8081;
keepalive 64;
}
upstream iph_server {
server 127.0.0.1:5000;
keepalive 64;
}
upstream wp_server {
server 0.0.0.0:8080;
keepalive 64;
}

upstream graphql_server {
server 127.0.0.1:4000;
keepalive 64;
}

server {
listen 80;
server_name iph.colinmac.me www.iph.colinmac.me;
if ($host = iph.colinmac.me) {
return 302 https://$host$request_uri;
} # managed by Certbot

        if ($host = www.iph.colinmac.me) {
                return 302 https://$host$request_uri;
        } # managed by Certbot

}

server {

    index index.php index.html index.htm;

    server_name iph.colinmac.me www.iph.colinmac.me;

        server_name_in_redirect off;
        root /path/to/app;

        location / {
         try_files $uri /index.html;
        }

        location /login {
         proxy_pass http://wp_server/wp-login.php;
        }
        location /wp-json {
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection 'upgrade';
          proxy_set_header Host $host;
          proxy_cache_bypass $http_upgrade;
          proxy_max_temp_file_size 0;
          proxy_redirect off;
          proxy_read_timeout 240s;
          proxy_pass http://wp_api/wp-json;
        }
        location ~ /wp-(login|admin|content|includes) {

          proxy_set_header        Host $host;
          proxy_set_header        X-Real-IP $remote_addr;
          proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header        X-Forwarded-Proto $scheme;
          proxy_pass http://wp_server;
        }
        location /graphql{
          proxy_http_version 1.1;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection 'upgrade';
          proxy_set_header Host $host;
          proxy_cache_bypass $http_upgrade;
          proxy_max_temp_file_size 0;
          proxy_redirect off;
          proxy_read_timeout 240s;
          proxy_pass http://graphql_server/;
        }
        location ~ /\.ht {
          deny all;
        location ~ \.php$ {
          proxy_pass http://wp_server;
          proxy_set_header Host $host;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header X-Forwarded-Proto $scheme;
        }
        listen [::]:443 ssl http2 ipv6only=on;
        listen 443 ssl http2;
        gzip off;

    ssl_certificate /etc/letsencrypt/live/colinmac.me/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/colinmac.me/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}

```

#### APACHE

```
<VirtualHost \*:8080>
ServerName iph.colinmac.me
ServerAlias www.iph.colinmac.me
ServerAdmin email@colinmac.me
DocumentRoot /path/to/wordpress/install
<Directory /path/to/wordpress/install>
AllowOverride All
</Directory>

        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined

</VirtualHost>
```
## Built With

- [React.js](https://reactjs.org/) - The web framework used
- [Apollo](https://www.apollographql.com/) - State Management / GraphQL client
- [GraphQL](https://graphql.org/) - Data Layer
- [Express.js](https://expressjs.com/) - Data Server
- [Wordpress](https://wordpress.org/) - Used for content management / data sanitization / fileserver

## Authors

- **Colin McCullough** - [Colincmcc](https://github.com/colincmcc)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
